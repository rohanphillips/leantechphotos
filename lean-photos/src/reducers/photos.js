import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
   photosLoaded: true,
   photoList: [{
      "albumId": 3,
      "id": 101,
      "title": "incidunt alias vel enim",
      "url": "https://via.placeholder.com/600/e743b",
      "thumbnailUrl": "https://via.placeholder.com/150/e743b"
    },
    {
      "albumId": 3,
      "id": 102,
      "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
      "url": "https://via.placeholder.com/600/a393af",
      "thumbnailUrl": "https://via.placeholder.com/150/a393af"
    },
    {
      "albumId": 3,
      "id": 103,
      "title": "et eius nisi in ut reprehenderit labore eum",
      "url": "https://via.placeholder.com/600/35cedf",
      "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
    },
    {
      "albumId": 3,
      "id": 104,
      "title": "et natus vero quia totam aut et minima",
      "url": "https://via.placeholder.com/600/313b40",
      "thumbnailUrl": "https://via.placeholder.com/150/313b40"
    },
    {
      "albumId": 3,
      "id": 105,
      "title": "veritatis numquam eius",
      "url": "https://via.placeholder.com/600/eaf2e1",
      "thumbnailUrl": "https://via.placeholder.com/150/eaf2e1"
    }],
   albums: {},
   displayRecords: [{
      "albumId": 3,
      "id": 101,
      "title": "incidunt alias vel enim",
      "url": "https://via.placeholder.com/600/e743b",
      "thumbnailUrl": "https://via.placeholder.com/150/e743b"
    },
    {
      "albumId": 3,
      "id": 102,
      "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
      "url": "https://via.placeholder.com/600/a393af",
      "thumbnailUrl": "https://via.placeholder.com/150/a393af"
    },
    {
      "albumId": 3,
      "id": 103,
      "title": "et eius nisi in ut reprehenderit labore eum",
      "url": "https://via.placeholder.com/600/35cedf",
      "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
    },
    {
      "albumId": 3,
      "id": 104,
      "title": "et natus vero quia totam aut et minima",
      "url": "https://via.placeholder.com/600/313b40",
      "thumbnailUrl": "https://via.placeholder.com/150/313b40"
    },
    {
      "albumId": 3,
      "id": 105,
      "title": "veritatis numquam eius",
      "url": "https://via.placeholder.com/600/eaf2e1",
      "thumbnailUrl": "https://via.placeholder.com/150/eaf2e1"
    }],
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