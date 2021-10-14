import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Stats from '../stats/Stats'

import { getPhotos, setDisplayRecords } from '../actions/photos'


const ControlPanel = (props) => {
   const [AlbumID, setAlbumID] = useState(0);
   const { photosLoaded, getPhotos, setDisplayRecords } = props;

   useEffect(() => {
      if(!photosLoaded){
         //getPhotos(AlbumID);
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
                  Album Selector
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
}, {getPhotos, setDisplayRecords})(ControlPanel);