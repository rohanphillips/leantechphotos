import React from 'react'
import NumericInput from 'react-numeric-input';
import styles from '../pages/Pagination.module.css'

const Pagination = (props) => {
   const { imagesPerPage, setImagesPerPage, usePagination, setUsePagination, records } = props;
   const pages = Math.ceil(records.length / imagesPerPage)
   const onChange = (e) => {
      setUsePagination(e.target.checked);
   }
   console.log("Pagination:", pages)
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
                     onChange={setImagesPerPage}
                     />            
                  </div>
               </div>
            }
         </div>
      </div>
   )
}

export default Pagination