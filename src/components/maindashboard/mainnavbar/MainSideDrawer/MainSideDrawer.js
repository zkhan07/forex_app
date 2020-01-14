import React from 'react';

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
                <a href="/"> Home </a>
              </div>
            </div>

            <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a href="#">Forex</a>
              <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <a href="whatforex"> What is Forex? </a></div> 
                  <div class="item"> <a href="commodity"> Commodities  </a></div> 
                  <div class="item"> <a href="indices"> Indices </a></div> 
                  <div class="item"> <a href="stocks">   Stocks </a></div> 
                  <div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
                  <div class="item"> <a href="trading">  Trading FAQs </a></div> 
                  <div class="item"> <a href="account"> Account Types </a></div> 
                </div>
            </div>
          </div>
          
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a href="#"> About Us</a>
              <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <a href="vision"> Our Vision              </a> </div> 
                  <div class="item"> <a href="benefits"> Trading Benefits        </a> </div> 
                  <div class="item"> <a href="support"> Trading Support         </a> </div> 
                  <div class="item"> <a href="helpcenter"> profit4money Help Center </a> </div>
                </div>
              </div>
          </div>

        <div class="ui compact menu">
            <div class="ui simple dropdown item">
          <a>Trading</a>
          <i class="dropdown icon"></i>
                  <div class="menu">
            <div class="item"> <a href="liveaccount"> Open Live Account </a></div>
            <div class="item"> <a href="accountcomparision"> Account Comparisions </a> </div>
              <div class="item"> <a href="accountverification"> Account verification </a></div>
            <div class="item"> <a href="tradingparameters"> Tradnig Parameters </a></div>
            <div class="item"> <a href="tradingspreads"> Trading Spreads </a></div>
            <div class="item"> <a href="losspolicy"> Stop Loss policy </a></div>
              <div class="item"> <a href="premium"> Premium </a></div>
            <div class="item"> <a href="withdrawal"> Withdrawl process </a></div>
                  </div>
                  </div>
		    </div>
          
        <div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<a>Tools</a>
				<i class="dropdown icon"></i>
                <div class="menu">
		 		    <div class="item"> <a href="dailymarket"> Daily Market Review </a></div> 
					<div class="item"> <a href="financial"> Finacial Calender  </a></div> 
					<div class="item"> <a href="timecharts"> Real Time Charts </a></div> 
					<div class="item"> <a href="signals"> Signals</a></div> 
				    <div class="item"> <a href="platforms"> Platforms </a></div> 
					<div class="item"> <a href="livemarket"> Live Market Rates </a></div> 
			     	<div class="item"> <a href="educationpackage"> Education Package </a></div> 
                </div>
                </div>
                </div>

                <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <a>Legal</a>
              <i class="dropdown icon"></i>
                <div class="menu">
                <div class="item"> <a href="policy"> Our Trading Policy </a></div> 
                <div class="item"> <a href="disclaimer"> Disclaimer  </a></div> 
                <div class="item"> <a href="terms"> Trading Terms </a></div> 
                <div class="item"> <a href="riskcaution"> Risk Caution </a></div> 
              </div>
            </div>
        </div>


            <div class="ui compact menu">
              <div class="item">
                <a href="/contactnew"> Contact </a>
              </div>
            </div>


         
            <div class="ui compact menu">
              <div class="item">
                <a href="/loginlive"> Login </a>
              </div>
            </div>

            <div class="ui compact menu">
              <div class="item">
                <a href="/signup"> Register </a>
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
