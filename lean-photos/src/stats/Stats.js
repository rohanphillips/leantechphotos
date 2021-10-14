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
               <div className={styles.blockside}></div>
               <div className={styles.blockcenter}>
                  <table className={styles.StatsTable}>
                     <tbody>
                        <tr>
                           <th className={styles.alignright}>Stat Type</th>
                           <th className={styles.alignleft}>Info</th>
                        </tr>
                        <tr>
                           <td className={styles.alignright}>Albums</td>
                           <td className={styles.alignleft}>Count is {albumCount()}</td>
                        </tr>
                        <tr>
                           <td className={styles.alignright}>Total Photos</td>
                           <td className={styles.alignleft}>Count is {photoCount()}</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className={styles.blockside}></div>
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