import { React} from 'react';
import { connect } from 'react-redux'
import ControlPanel from '../controlpanel/ControlPanel'
import PhotoDisplay from '../photodisplay/PhotoDisplay';
import styles from '../dashboard/Dashboard.module.css'

const Dashboard = (props) => {
   const { photoList } = props;
   return(
      <div  >
         <div className={styles.block}>
            <p>Photos Dashboard</p>
         </div>
         <div><ControlPanel/></div>
         <div><PhotoDisplay records={photoList}/></div>
      </div>
   )
}

export default connect(state => {
   return {
      photoList: state.photosState.photoList
   }
})(Dashboard)