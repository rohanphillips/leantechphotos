import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Stats from '../stats/Stats'

import { getPhotos } from '../actions/photos'


const ControlPanel = (props) => {
   const [AlbumID] = useState(0);
   const { photosLoaded, getPhotos } = props;

   useEffect(() => {
      if(!photosLoaded){
         getPhotos(AlbumID);
      } 
   })
   console.log("Props:", props)
   return(
      <div>
         {!photosLoaded &&
            <p>Loading....</p>
         }
         {photosLoaded &&
            <div>
               <div>
                  <Stats />
               </div>
               <div>
                  <div>Column Count</div>
                  <div>Image Limit</div>
                  <div>Albumn Selector</div>
                  <div>Search for</div>
               </div>
            </div>            
         }         
      </div>
   )
}

export default connect(state => {
   return {
      photosLoaded: state.photosState.photosLoaded,
      photoList: state.photosState.photoList,
      albums: state.photosState.albums
   }
}, {getPhotos})(ControlPanel);