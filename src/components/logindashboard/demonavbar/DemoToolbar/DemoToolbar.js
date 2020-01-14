import React from 'react';

import DrawerToggleButton from '../DemoSideDrawer/DemoDrawerToggleButton';
import './DemoToolbar.css';

const Livetoolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/logindemo"> PROFIT4MONEY </a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
          <div class="ui secondary menu">
        
            <div class="right item">
                  <a href="loginlive"> 
                      <button className="ui red button">
                          SWITCH TO LIVE ACCOUNT
                      </button> 
                  </a>
            </div>

            <div className="item">
              <a href="/loginlive"> Dashboard </a>
            </div>

            <div class="ui simple dropdown item">
              <div> Deals </div>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <a href="closedeals"> CLOSED DEALS </a></div>
                    <div class="item"> <a href="accountstatement"> ACCOUNT STATEMENT</a> </div>
              </div>
            </div>
       
            <div class="ui simple dropdown item">
              <div> User Name </div>
                <i class="dropdown icon"></i>
                <div class="menu">
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
