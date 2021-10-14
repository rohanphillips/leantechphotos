import reducer, { initialState, setPhotosLoaded, loadPhotos } from './photos'

test('should return initial state', () => {
   expect(reducer(undefined, {})).toEqual({
      photosLoaded: false,
      photoList: [],
      albums: {},
   })
})

test('should add photos', () => {
   const previousState = initialState;
   const photos = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      }];
   
   expect(reducer(previousState, loadPhotos(photos))).toEqual({
      photosLoaded: true,
      photoList: photos,
      albums: { 
         1: [{albumId: 1, id: 1, title: 'accusamus beatae ad facilis cum similique qui sunt', url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952'},
         {albumId: 1, id: 2, title: 'reprehenderit est deserunt velit ipsam', url: 'https://via.placeholder.com/600/771796', thumbnailUrl: 'https://via.placeholder.com/150/771796'}]
      }
   })
})

test('should set photosLoaded', () => {
   const previousState = initialState;
   expect(reducer(previousState, setPhotosLoaded(true))).toEqual({
      photosLoaded: true,
      photoList: [],
      albums: {}
   })
})