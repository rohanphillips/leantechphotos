import { React } from 'react'
import { connect } from 'react-redux'
import styles from '../stats/Stats.module.css'

const Stats = (props) => {
   const { photosLoaded, photoList, albums } = props;

   const photoCount = () => {
      return photoList.length;
   }

   const albumCount = () => {      
      return Object.keys(albums).length;
   }
   return(
      <div>
         {photosLoaded &&
            <div>
               <p className={styles.Loaded}>Photos Loaded</p>
               <table>
                  <tbody>
                     <tr>
                        <th>Stats</th>
                        <th>Info</th>
                     </tr>
                     <tr>
                        <td>Albums</td>
                        <td>Count is {albumCount()}</td>
                     </tr>
                     <tr>
                        <td>Total Photos</td>
                        <td>Count is {photoCount()}</td>
                     </tr>
                  </tbody>
               </table>
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
})(Stats)