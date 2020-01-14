import React from 'react';

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
                <a href="loginlive"> 
                    <button className="ui red button">
                        SWITCH TO LIVE ACCOUNT
                    </button> 
                </a>
		    	</div>

          <div className="item">
            <a href="/loginlive"> Dashboard </a>
          </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> Deals </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
                    <div class="item"> <a href="closedeals"> CLOSED DEALS </a></div>
                    <div class="item"> <a href="accountstatement"> ACCOUNT STATEMENT</a> </div>
              </div>
            </div>
          </div>


          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a> User Name </a>
                <i class="dropdown icon"></i>
                  <div class="menu">
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
