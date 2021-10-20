import {React, useState, useEffect} from 'react'
import NumericInput from 'react-numeric-input';
import styles from '../pages/Pagination.module.css'
import PageNumbers from '../pages/PageNumbers'

const Pagination = (props) => {
   const { imagesPerPage, setImagesPerPage, usePagination, setUsePagination, records, displayRecords, setDisplayRecords } = props;
   const [pageNumber, setPageNumber] = useState(1);
   const [lastPageNumber, setLastPageNumber] = useState(1);
   const [lastRecordCount, setLastRecordCount] = useState(null);
   const [newChanges, setNewChanges] = useState(false);
   const [pageNeighbors, setPageNeighbors] = useState(0);
   let pages = Math.ceil(records.length / imagesPerPage);
   const startPointer = ((pageNumber - 1) * imagesPerPage);
   const onChange = (e) => {
      setUsePagination(e.target.checked);
      setNewChanges(true);
   }

   const onImagesPerPageChange = (num) => {
      setImagesPerPage(num);
      setNewChanges(true);
   }

   const onChangeNeighbors = (n) => {
      setPageNeighbors(n);
   }

   useEffect(() => {
      if(displayRecords.length === 0 || lastRecordCount !== records.length || pageNumber !== lastPageNumber || newChanges){
         console.log("displayRecords.length:", displayRecords.length, "lastRecordCount:", lastRecordCount, "pageNumber:", pageNumber, "lastPageNumber:", lastPageNumber);
         let recordset;
         if(usePagination){
            recordset = records.slice(startPointer, startPointer + imagesPerPage);
         } else {
            recordset = records;
         }
         console.log("recordset:", recordset, startPointer, usePagination, imagesPerPage)
         setDisplayRecords(recordset);
         setLastRecordCount(records.length);
         setNewChanges(false);
         setLastPageNumber(pageNumber);
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
                  <div className={styles.block}>Center Neighbors</div>
                  <div className={styles.block}>           
                     <NumericInput
                     step={1}
                     precision={0}
                     value={pageNeighbors}
                     min={0}
                     max={2}
                     onChange={onChangeNeighbors}
                     />            
                  </div>
                  <div>
                     <PageNumbers 
                        pages={pages}
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                        pageNeighbors={pageNeighbors}
                     />
                  </div>
               </div>
            }
         </div>
      </div>
   )
}

export default Pagination