import React from 'react';
import { Link } from "react-router-dom";

import './DemoSideDrawer.css';

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
                <Link to="loginlive"> 
                    <button className="ui red button">
                        SWITCH TO LIVE ACCOUNT
                    </button> 
                </Link>
		    	</div>

          <div className="item">
            <Link to="/loginlive"> Dashboard </Link>
          </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> Deals </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <Link to="closedeals"> CLOSED DEALS </Link></div>
                    <div class="item"> <Link to="accountstatement"> ACCOUNT STATEMENT</Link> </div>
              </div>
            </div>
          </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> User Name </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
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
