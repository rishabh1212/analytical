import React from 'react'
import "./Topbar.css"
import Netsumachine from "../images/nihon_netsugen_logo.jpg"
import {Notifications, Translate,Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className='topbar'>
     <div className="topbarWrapper">
       
       <div className='topLeft'>
        <img src={Netsumachine} 
        />
       </div>
       
       <div className='topRight'>
          <div className="topbarIconsContainer">
            <Notifications/>
             <span className="topIconBadge">7</span>
          </div>
          <div className="topbarIconsContainer">
            <Translate/>
             <span className="topIconBadge">人</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings/>
          </div>

       </div>

     </div>
    </div>
  )
}
