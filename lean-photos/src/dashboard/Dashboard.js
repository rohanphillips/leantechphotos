import { React} from 'react';
import { connect } from 'react-redux'
import ControlPanel from '../controlpanel/ControlPanel'
import PhotoDisplay from '../photodisplay/PhotoDisplay';

const Dashboard = (props) => {
   const { displayRecords } = props;
   return(
      <div >
         <div>
            <p>Photos Dashboard</p>
         </div>
         <div><ControlPanel/></div>
         <div><PhotoDisplay records={displayRecords}/></div>
      </div>
   )
}

export default connect(state => {
   return {
      displayRecords: state.photosState.displayRecords
   }
})(Dashboard)