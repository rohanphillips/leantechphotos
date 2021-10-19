import {React, useState, useEffect} from 'react'
import NumericInput from 'react-numeric-input';
import styles from '../pages/Pagination.module.css'

const Pagination = (props) => {
   const { imagesPerPage, setImagesPerPage, usePagination, setUsePagination, records, displayRecords, setDisplayRecords } = props;
   const [pageNumber, setPageNumber] = useState(1);
   const [lastPageNumber, setLastPageNumber] = useState(1);
   const [lastRecordCount, SetLastRecordCount] = useState(null);
   const [newChanges, setNewChanges] = useState(false);
   const pages = Math.ceil(records.length / imagesPerPage);
   const startPointer = ((pageNumber - 1) * imagesPerPage);
   
   const onChange = (e) => {
      setUsePagination(e.target.checked);
      setNewChanges(true);
   }

   const onImagesPerPageChange = (num) => {
      setImagesPerPage(num);
      setNewChanges(true);
   }

   useEffect(() => {
      if(displayRecords.length === 0 || lastRecordCount !== records.length || pageNumber !== lastPageNumber || newChanges){
         let recordset;
         if(usePagination){
            recordset = records.slice(startPointer, imagesPerPage);
         } else {
            recordset = records;
         }
         setDisplayRecords(recordset);
         SetLastRecordCount(records.length);
         setNewChanges(false);
      }
   })

   return (
      <div>
        <div className={styles.block}>
           <label>
              <input onChange={onChange} type="checkbox" checked={usePagination} name='pagination' />
              Use Pagination
           </label>
        </div>
         <div>
            {usePagination &&
               <div>
                  <div className={styles.block}>Images Per Page</div>
            
                  <div className={styles.block}>           
                     <NumericInput
                     step={1}
                     precision={0}
                     value={imagesPerPage}
                     min={1}
                     max={25}
                     onChange={onImagesPerPageChange}
                     />            
                  </div>
               </div>
            }
         </div>
      </div>
   )
}

export default Pagination