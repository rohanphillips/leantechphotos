import { React, useState } from 'react';
import Photo from '../photodisplay/Photo'

const PhotoDisplay = (props) => {
   const [columns, setcolumns] = useState(2);
   const { records } = props;
   const inColumns = (records) => {
      const formatted = [];
      let row = [];
      let counter = 1;
      records.forEach(r => {
         row.push(r);
         counter ++;
         if(counter > columns){
            counter = 1;
            formatted.push(row);
            row = [];
         }         
      })
      if(counter !== 1) formatted.push(row);
      console.log("formatted:", formatted)
      return formatted;
   }
   const formattedRecords = inColumns(records);
   return(
      <div>
         Photo Display - Click to any image to Enlarge
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

export default PhotoDisplay