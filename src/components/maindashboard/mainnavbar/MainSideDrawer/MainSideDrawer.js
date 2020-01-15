import React from 'react';
import { Link } from "react-router-dom";

import './MainSideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>




      <div class="ui container">
          <div class="doubling stackable ui menu">
            
            <div className="item">
            <h3>PROFIT4MONEY</h3> 
            </div>
            
            <div class="ui compact menu">
              <div class="item">
                <Link to="/"> Home </Link>
              </div>
            </div>

            <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a href="#">Forex</a>
              <i class="dropdown icon"></i>
                <div class="menu">
                <div class="item"> <Link to="/whatforex"> What is Forex? </Link></div> 
                  <div class="item"> <Link to="/commodity"> Commodities  </Link></div> 
                  <div class="item"> <Link to="/indices"> Indices </Link></div> 
                  <div class="item"> <Link to="/stocks">   Stocks </Link></div> 
                  <div class="item"> <Link to="/conditions"> profit4money Conditions </Link></div> 
                  <div class="item"> <Link to="/trading">  Trading FAQs </Link></div> 
                  <div class="item"> <Link to="/account"> Account Types </Link></div> 
                </div>
            </div>
          </div>
          
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a href="#"> About Us</a>
              <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="/vision"> Our Vision              </Link> </div> 
                  <div class="item"> <Link to="/benefits"> Trading Benefits        </Link> </div> 
                  <div class="item"> <Link to="/support"> Trading Support         </Link> </div> 
                  <div class="item"> <Link to="/helpcenter"> profit4money Help Center </Link> </div>
                </div>
              </div>
          </div>

        <div class="ui compact menu">
            <div class="ui simple dropdown item">
          <a>Trading</a>
          <i class="dropdown icon"></i>
                  <div class="menu">
                  <div class="item"> <Link to="/liveaccount"> Open Live Account </Link></div>
                  <div class="item"> <Link to="/accountcomparision"> Account Comparisions </Link> </div>
                  <div class="item"> <Link to="/accountverification"> Account verification </Link></div>
                  <div class="item"> <Link to="/tradingparameters"> Tradnig Parameters </Link></div>
                  <div class="item"> <Link to="/tradingspreads"> Trading Spreads </Link></div>
                  <div class="item"> <Link to="/losspolicy"> Stop Loss policy </Link></div>
                  <div class="item"> <Link to="/premium"> Premium </Link></div>
                  <div class="item"> <Link to="/withdrawal"> Withdrawl process </Link></div>
                  </div>
                  </div>
		    </div>
          
        <div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<a>Tools</a>
				<i class="dropdown icon"></i>
              <div class="menu">
                <div class="item"> <Link to="/dailymarket"> Daily Market Review </Link></div> 
                <div class="item"> <Link to="/financial"> Finacial Calender  </Link></div> 
                <div class="item"> <Link to="/timecharts"> Real Time Charts </Link></div> 
                <div class="item"> <Link to="/signals"> Signals</Link></div> 
                <div class="item"> <Link to="/platforms"> Platforms </Link></div> 
                <div class="item"> <Link to="/livemarket"> Live Market Rates </Link></div> 
                <div class="item"> <Link to="/educationpackage"> Education Package </Link></div> 
              </div>
                </div>
                </div>

                <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a>Legal</a>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item"> <Link to="/policy"> Our Trading Policy </Link></div> 
                <div class="item"> <Link to="/disclaimer"> Disclaimer  </Link></div> 
                <div class="item"> <Link to="/terms"> Trading Terms </Link></div> 
                <div class="item"> <Link to="/riskcaution"> Risk Caution </Link></div> 
              </div>
            </div>
        </div>


            <div class="ui compact menu">
              <div class="item">
                <Link to="/contactnew"> Contact </Link>
              </div>
            </div>
            
            <div class="ui compact menu">
              <div class="item">
                <Link to="/signin"> Login </Link>
              </div>
            </div>

            <div class="ui compact menu">
              <div class="item">
                <Link to="/signup"> Register </Link>
              </div>
            </div>
          
          </div>
        </div>

















      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
