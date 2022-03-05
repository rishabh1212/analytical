import React from 'react';
import "./SideNav.css";
import {BlurLinear, BubbleChart, MyLocation,InsertChart, DynamicFeed} from '@mui/icons-material';
// import {quickSight} from "./src\components\sidenav\quickSight.html";

export default function SideNav() { 
  return (
    <div className="sideNav">
     <div className="sideNavWrapper">
      <div className="sideNavMenu">
     
       <h3 className='sideNavTitle'>ANLAYSIS</h3>
        <u1 classNmae="sideNavList">
          <li className='sideNavListItem '>
           <BlurLinear className='sideNavIcon'/> HOME
          
          </li>

          <li className='sideNavListItem '>
           <MyLocation className='sideNavIcon'/>MAPS
          
          </li>

          <li className='sideNavListItem '>
           <DynamicFeed className='sideNavIcon'/>ALERTS
          
          </li>

          <li className='sideNavListItem'>
           <BubbleChart className='sideNavIcon'/>COMPONTMENT ALERTS
          
          </li>


           <li className='sideNavListItem '>
           <a href={""}> <InsertChart className='sideNavIcon'/>GRAPHS</a>
          
          </li>

        </u1>




        {/* <h3 className='sideNavTitle'> INSIGHTS </h3>
        <u1 classNmae="sideNavList">
         

          <li className='sideNavListItem '>
           <Analytics className='sideNavIcon'/>Analytics
          
          </li>

          <li className='sideNavListItem '>
           <Summarize className='sideNavIcon'/>Insights
          
          </li>

          <li className='sideNavListItem'>
           <Article className='sideNavIcon'/>Article
          
          </li>

        </u1> */}







      </div>

     </div>
      
    </div>
  );
}
