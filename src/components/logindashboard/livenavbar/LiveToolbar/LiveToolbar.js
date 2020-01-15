import React from 'react';
import { Link } from "react-router-dom";

import DrawerToggleButton from '../LiveSideDrawer/LiveDrawerToggleButton';
import './LiveToolbar.css';

const Livetoolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/loginlive"> PROFIT4MONEY </Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
          <div class="ui secondary menu">
        
            <div class="right item">
                  <Link to="logindemo"> 
                      <button className="ui red button">
                          SWITCH TO DEMO ACCOUNT
                      </button> 
                  </Link>
            </div>

            <div className="item">
              <Link to="/loginlive"> Dashboard </Link>
            </div>


     
            <div class="ui simple dropdown item">
              <a>Tools</a>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="liverates"> Live Rates & Charts </Link></div> 
                  <div class="item"> <Link to="economic"> Economic Calender  </Link></div> 
              </div>
            </div>
   

          
        
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
  </header>
);

export default Livetoolbar;
