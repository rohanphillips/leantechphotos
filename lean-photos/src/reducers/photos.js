import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
   photosLoaded: false,
   photoList: [],
   albums: {},
}

const createAlbums = (photoList) => {
   let albums = {};
   photoList.forEach(element => {
      const albumID = element.albumId;
      if(albums[albumID] === undefined) albums[albumID] = [];
      albums[albumID].push(element); 
   });
   return albums;
};

const photosSlice = createSlice({
   name: 'photos',
   initialState: initialState, 
   reducers: {
      setPhotosLoaded(state, action){
         state.photosLoaded = action.payload
      },
      loadPhotos(state, action){
         state.photoList = action.payload;
         state.albums = createAlbums(state.photoList);
         state.photosLoaded = true;
      },
      updateDisplayRecords(state, action){
         state.displayRecords = action.payload;
      }
   }
})

export const {setPhotosLoaded, loadPhotos, updateDisplayRecords} = photosSlice.actions;

export default photosSlice.reducer;