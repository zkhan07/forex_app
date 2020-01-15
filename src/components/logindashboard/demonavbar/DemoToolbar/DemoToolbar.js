import React from 'react';
import { Link } from "react-router-dom";

import DrawerToggleButton from '../DemoSideDrawer/DemoDrawerToggleButton';
import './DemoToolbar.css';

const Livetoolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><Link to="/logindemo"> PROFIT4MONEY </Link></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
          <div class="ui secondary menu">
        
            <div class="right item">
                  <Link to="loginlive"> 
                      <button className="ui red button">
                          SWITCH TO LIVE ACCOUNT
                      </button> 
                  </Link>
            </div>

            <div className="item">
              <Link to="/loginlive"> Dashboard </Link>
            </div>

            <div class="ui simple dropdown item">
              <div> Deals </div>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <Link to="closedeals"> CLOSED DEALS </Link></div>
                    <div class="item"> <Link to="accountstatement"> ACCOUNT STATEMENT</Link> </div>
              </div>
            </div>
       
            <div class="ui simple dropdown item">
              <div> User Name </div>
                <i class="dropdown icon"></i>
                <div class="menu">
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
