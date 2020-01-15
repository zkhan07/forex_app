import React from 'react';
import { Link } from "react-router-dom";

import './LiveSideDrawer.css';

const LivesideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>




      <div class="ui container">
          <div class="doubling stackable ui menu">
            
          <div class="item">
                <Link to="logindemo"> 
                    <button className="ui red button">
                        SWITCH TO DEMO ACCOUNT
                    </button> 
                </Link>
		    	</div>

          <div className="item">
            <Link to="/loginlive"> Dashboard </Link>
          </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a>Tools</a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                      <div class="item"> <Link to="liverates"> Live Rates & Charts </Link></div> 
                      <div class="item"> <Link to="economic"> Economic Calender  </Link></div> 
                  </div>
            </div>
          </div>

          
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> Deals </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <Link to="closedeals"> CLOSED DEALS </Link></div>
                    <div class="item"> <Link to="accountstatement"> ACCOUNT STATEMENT</Link> </div>
                    <div class="item"> <Link to="deposit"> DEPOSIT </Link></div>
                    <div class="item"> <Link to="withdraw"> WITHDRAW  </Link></div>
                  </div>
                </div>
             </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> User Name </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <Link to="activitylog"> Activity Log </Link></div>
                    <div class="item"> <Link to="profile"> Profile </Link> </div>
                    <div class="item"> <Link to="document"> Documents</Link></div>
                    <div class="item"> <Link to="bankdetails"> Bank Deatils </Link></div>
                    <div class="item"> <Link to="changepassword"> Change Password</Link></div>
                    <div class="item"> <Link to="/"> Log Out </Link></div>
              </div>
            </div>
          </div>

        
          
          </div>
        </div>



    </nav>
  );
};

export default LivesideDrawer;
