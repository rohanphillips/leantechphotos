import { React, useState } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select'
import NumericInput from 'react-numeric-input';
import Photo from '../photodisplay/Photo'

const colOptions = (num) =>{
   let result = [];
   for(let i=1; i <= num; i++){
      const option = { value: i, label: i};
      result.push(option);
   }
   return result;
};

const albumOptions = (num) => {
   let result = [{ value: -1, label: 'Not Filtered'}];
   result.concat(colOptions(num));
   return result;
}

const PhotoDisplay = (props) => {
   const { records, albums } = props;
   const [columns, setColumns] = useState({value: 2});
   const [imageLimit, setImageLimit] = useState(records.length);
   const [albumSelect, setAlbumSelect] = useState({value: -1});
   const cols = columns.value;
   const imgLimit = imageLimit;
   console.log("props:", props, imgLimit)
   const inColumns = (records) => {
      const formatted = [];
      let row = [];
      let counter = 1;
      records.slice(0, imgLimit).forEach(r => {
         row.push(r);
         counter ++;
         if(counter > cols){
            counter = 1;
            formatted.push(row);
            row = [];
         }         
      })
      if(counter !== 1) formatted.push(row);
      return formatted;
   }
   const formattedRecords = inColumns(records);
   console.log("imageLimit:", imageLimit)
   return(
      <div>
         Photo Display - Click to any image to Enlarge
         <div>
            <Select
               defaultValue={{label: cols, value: cols}}
               onChange={setColumns}
               options={colOptions(5)}
            />
         </div>
         <div>
            <NumericInput
               step={1}
               precision={0}
               value={imageLimit}
               min={1}
               max={records.length}
               onChange={setImageLimit}
            />
         </div>
         {/* <div>
            <Select
               defaultValue={{label: 'All', value:records.length}}
               onChange={setImageLimit}
               options={colOptions(records.length)}
            />
         </div> */}
         {/* <div>
            <Select
               defaultValue={{ value: -1, label: 'Not Filtered' }}
               onChange={setAlbumSelect}
               options={albumOptions(albums.length + 1)}
            />
         </div> */}
         {formattedRecords.map(e => {
            return (
               <div>
                  {e.map(i => {
                     return (
                        <div style={{display: "inline-block"}}>{<Photo photo={i}/>}</div>
                     )
                  })}
               </div>
            )
         })}
      </div>
   )
};

export default connect(state => {
   return {
      albums: state.photosState.albums
   }
})(PhotoDisplay)