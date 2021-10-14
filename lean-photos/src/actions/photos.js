import { baseUrl } from "./urlhelper";

import { loadPhotos } from "../reducers/photos";

export const getPhotos = (id) => {
   let url = baseUrl;
   if(id !== 0) url = baseUrl + `?albumId=${id}`
   return async (dispatch) => {
      console.log("dispatch:", dispatch)
      return fetch(url ,{
         method: 'GET',
         headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
         }
      }).then(async (res) => {
         if(res.ok){
            return res
               .json()
               .then((photosJson) => {
                  dispatch(loadPhotos(photosJson));
               })
         } else {
            console.log("error")
            return res.json()
               .then((errors) => {
                  return Promise.reject(errors.message)
               })
         }
      })
   }
}