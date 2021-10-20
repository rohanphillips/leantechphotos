import {React, useState} from "react";
import PageNumber from '../pages/PageNumber'
import styles from '../pages/Pagination.module.css'

const neighborPlaces = (pageNeighbors) => {
   const base = 1;
   return (pageNeighbors * 2) + base;
}

const constructNeighbors = (pages, pageNeighbors) => {
   let places = [];
   console.log("constructNeighbors")
   if(pages > 2){
      const neighbors = neighborPlaces(pageNeighbors) - 1;
      const center = Math.ceil(pages / 2);
      const left = center - neighbors / 2;
      const right = center + neighbors / 2;
      let i = left;
      while (i < pages){
         if((i > 1 && i >= left && i !== center && i <= right && i < pages) || i === center){
            places.push(i);
         }
         i ++;
      }
   }
   return places;
}

const constructPlaces = (pageNeighors, neighbors, pages) => {
   let places = [];
   const endPlaceholders = 2;
   if(neighbors){
      places.push(1);
      const leftNeighbor = neighbors[0];
      const rightNeighbor = neighbors[neighbors.length - 1];
      if(pages > neighborPlaces(pageNeighors) + endPlaceholders){
      leftNeighbor > 3 && places.push("<<");
      leftNeighbor > 2 && places.push("<");
      }
      if(neighbors.length > 0) places = places.concat(neighbors);
      if(pages > neighborPlaces(pageNeighors) + endPlaceholders){
      rightNeighbor < pages - 1 && places.push(">");
      rightNeighbor < pages - 2 && places.push(">>");
      }
      pages > 1 && places.push(pages);
   }
   return places;
}

console.log("PageNumbers");
const PageNumbers = (props) => {
   const { pageNumber, pages, setPageNumber } = props;
   const [pageNeighbors, setPageNeighbors] = useState(1);
   const [neighbors, setNeighbors] = useState(null);
   const [lastPageCount, setLastPageCount] = useState(null)

   if(neighbors === null || lastPageCount !== pages){
      setNeighbors(constructNeighbors(pages, pageNeighbors));
      pages !== lastPageCount && setLastPageCount(pages);
   };
   const places = constructPlaces(pageNeighbors, neighbors, pages);
   return (
      <div>
         {
            places.map(p => {
               return (
                  <div className={styles.block}>
                     <PageNumber 
                        place={p} 
                        pageNumber={pageNumber}
                        pages={pages}
                        setPageNumber={setPageNumber}
                        neighbors={neighbors}
                        pageNeighbors={neighborPlaces(pageNeighbors)}
                        setNeighbors={setNeighbors}
                     />
                  </div>
               )
            })
         }
      </div>
   )
};

export default PageNumbers;