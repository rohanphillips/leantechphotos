import {React, useState} from "react";
import PageNumber from '../pages/PageNumber'
import styles from '../pages/Pagination.module.css'

const PageNumbers = (props) => {
   const { pageNumber, pages } = props;
   const [pageNeighors, setPageNeighbors] = useState(1);
   const numbers = [...Array(pages).keys()].map(p => p + 1);
   return (
      <div>
         {
            numbers.map(n => {
               return (
                  <div className={styles.block}>
                     <PageNumber number={n} />
                  </div>
               )
            })
         }
      </div>
   )
};

export default PageNumbers;