import React from 'react';

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
                <a href="logindemo"> 
                    <button className="ui red button">
                        SWITCH TO DEMO ACCOUNT
                    </button> 
                </a>
		    	</div>

          <div className="item">
            <a href="/loginlive"> Dashboard </a>
          </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a>Tools</a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                      <div class="item"> <a href="liverates"> Live Rates & Charts </a></div> 
                      <div class="item"> <a href="economic"> Economic Calender  </a></div> 
                  </div>
            </div>
          </div>

          
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> Deals </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <a href="closedeals"> CLOSED DEALS </a></div>
                    <div class="item"> <a href="accountstatement"> ACCOUNT STATEMENT</a> </div>
                    <div class="item"> <a href="deposit"> DEPOSIT </a></div>
                    <div class="item"> <a href="withdraw"> WITHDRAW  </a></div>
              </div>
            </div>
          </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> User Name </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <a href="activitylog"> Activity Log </a></div>
                    <div class="item"> <a href="profile"> Profile </a> </div>
                    <div class="item"> <a href="document"> Documents</a></div>
                    <div class="item"> <a href="bankdetails"> Bank Deatils </a></div>
                    <div class="item"> <a href="changepassword"> Change Password</a></div>
                    <div class="item"> <a href="/"> Log Out </a></div>
              </div>
            </div>
          </div>

        
          
          </div>
        </div>



    </nav>
  );
};

export default LivesideDrawer;
