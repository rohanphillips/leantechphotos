import { React, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select'
import NumericInput from 'react-numeric-input';
import Photo from '../photodisplay/Photo'
import styles from '../photodisplay/PhotoDisplay.module.css'

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
   return result.concat(colOptions(num));;
}

const searchOk = (photo, searchString) => {
   const inAlbumId = photo.albumId.toString().indexOf(searchString) > -1;
   const inId = photo.id.toString().indexOf(searchString) > -1;
   const inTitle = photo.title.indexOf(searchString) > -1;
   return inAlbumId || inId || inTitle || searchString === "";
}

const inColumns = (records, settings) => {
   const formatted = [];
   let row = [];
   let counter = 1;
   records
      .filter(e => {
         let albumOk = false;
         settings.albumNumber === -1 ? albumOk = true : albumOk = e.albumId === settings.albumNumber;
         if(albumOk && searchOk(e, settings.searchString)) return e;
      })
         .slice(0, settings.imgLimit).forEach(r => {
            row.push(r);
            counter ++;
            if(counter > settings.cols){
               counter = 1;
               formatted.push(row);
               row = [];
            }         
   })
   if(counter !== 1) formatted.push(row);
   return formatted;
}

const displayCount = (records) => {
   let count = 0;
   console.log(records);
   records.map(r => {
      count += r.length;
   })
   return count;
}

const PhotoDisplay = (props) => {
   const { records, albums } = props;
   const [columns, setColumns] = useState({value: 2});
   const [imageLimit, setImageLimit] = useState(5);
   const [albumSelect, setAlbumSelect] = useState({value: -1});
   const [searchString, setSearchString] = useState("");

   const cols = columns.value;
   const imgLimit = imageLimit;
   const albumCount = Object.keys(albums).length;
   const albumNumber = albumSelect.value;
   
   const formattedRecords = inColumns(records, {albumNumber: albumNumber, imgLimit: imgLimit, cols: cols, searchString: searchString});

   const onSearchChange = (e) => {
      e.preventDefault();
      setSearchString(e.target.value);
   };

   const onClear = (e) => {
      e.preventDefault();
      setSearchString("");
   }

   return(
      <div>  
         <div className={styles.Controls}>       
            <div className={styles.singleControl}>
               <div className={styles.centerBlock}>Columns</div>
               <div className={styles.centerBlock}>
                  <Select
                     defaultValue={{label: cols, value: cols}}
                     onChange={setColumns}
                     options={colOptions(5)}
                  />
               </div>
            </div>
            <div className={styles.singleControl}>
               <div className={styles.centerBlock}>Images to Display</div>
               <div className={styles.centerBlock}>
                  <NumericInput
                     style={styles.centerBlock}
                     step={1}
                     precision={0}
                     value={imageLimit}
                     min={1}
                     max={records.length}
                     onChange={setImageLimit}
                  />
               </div>
            </div>
            <div className={styles.singleControl}>
               <div className={styles.centerBlock}>Select Album</div>
               <div className={styles.centerBlock}>
                  <Select
                     defaultValue={{ value: -1, label: 'Not Filtered' }}
                     onChange={setAlbumSelect}
                     options={albumOptions(albumCount + 1)}
                  />
               </div>
            </div>
            <div className={styles.singleControl}>
               <div className={styles.centerBlock}>
                  <div className={styles.centerBlock}>Search for ...</div>
                  <form>
                     <input onChange={onSearchChange} type="text" name="search" value={searchString} />
                     <button onClick={onClear}>Clear</button>
                  </form>
               </div>
            </div>
         </div>
         {formattedRecords.length > 0 &&
            <div>
               <div className={styles.centerBlock}>Photo Display - Click to any image to Enlarge</div>
               <div className={styles.centerBlock}>
                  Currently showing {displayCount(formattedRecords)} photos
               </div>
            </div>
         }
         <div className={styles.sides}></div>
         <div className={styles.centerBlock}>
            {formattedRecords.map(e => {
               return (
                  <div className={styles.gridRow}>
                     {e.map(i => {
                        return (
                           <Fragment key={i.id}>
                              <div className={styles.photoBlock}>{<Photo photo={i}/>}</div>
                           </Fragment>
                        )
                     })}
                  </div>
               )
            })}
         </div>
         <div className={styles.sides}></div>
      </div>
   )
};

export default connect(state => {
   return {
      albums: state.photosState.albums
   }
})(PhotoDisplay)