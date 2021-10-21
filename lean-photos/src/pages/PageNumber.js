import React from 'react';
import styles from '../pages/Pagination.module.css'

const PageNumber = (props) => {
   const { place, neighbors, setPageNumber, setNeighbors, pages, pageNeighbors, pageNumber } = props;

   const onPlaceClick = (e) => {
      updatePagination(e.target.innerText);  
   }

   const updatePagination = (v) => {
      switch(v){
         case ">>":
            setNeighbors([...Array(pageNeighbors).keys()].map(e => e + pages - neighbors.length));
            break;
         case ">":
            setNeighbors(neighbors.map(n => n + 1));
            break;
         case "<":
            setNeighbors(neighbors.map(n => n - 1));
            break;
         case "<<":
            setNeighbors([...Array(pageNeighbors).keys()].map(e => e + 2));
            break;
         default:
           setPageNumber(parseInt(v));
      }
   }

   const getStyle = (place, pageNumber) => {
      if(place === pageNumber){
         return styles.selected;
      } else {
         return styles.notselected;
      }
   }
   
   return (
      <div>
         <p className={getStyle(place, pageNumber)} onClick={onPlaceClick}>{place}</p>
      </div>
   )
}

export default PageNumber;