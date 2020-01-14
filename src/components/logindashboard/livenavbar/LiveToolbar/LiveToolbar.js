import React from 'react';

import DrawerToggleButton from '../LiveSideDrawer/LiveDrawerToggleButton';
import './LiveToolbar.css';

const Livetoolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/loginlive"> PROFIT4MONEY </a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
          <div class="ui secondary menu">
        
            <div class="right item">
                  <a href="logindemo"> 
                      <button className="ui red button">
                          SWITCH TO DEMO ACCOUNT
                      </button> 
                  </a>
            </div>

            <div className="item">
              <a href="/loginlive"> Dashboard </a>
            </div>


     
            <div class="ui simple dropdown item">
              <a>Tools</a>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <a href="liverates"> Live Rates & Charts </a></div> 
                  <div class="item"> <a href="economic"> Economic Calender  </a></div> 
              </div>
            </div>
   

          
        
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
  </header>
);

export default Livetoolbar;
