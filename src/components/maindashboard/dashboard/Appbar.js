import React from "react";
import "./Style.css";

const Appbar = () => {
  return(
    <div>

      
      {/* <!-- // Menubar 1 --> */}
		<div className="ui fluid container bar1">
			<div className="doubling stackable ui inverted blue menu">
			<div className="left item">
			    <a> <i class="mail icon"></i> info@profit4money.com </a>
			</div>
			
			<div className="item">
				<a href="/signup">
					<button className="ui red button">  
					Register
					</button>
				</a>
			</div>
			
			<div className="item">
			<a href="/loginlive">
				<button className="ui red button"> 
				  Login 
				</button>
			</a>
			</div>
			
			</div>
		</div>
		



	{/* // <!-- Menubar 2 --> */}
	<div class="ui container">
		<div class="doubling stackable ui menu">
			
			<div className="left item">
			<h1>PROFIT<sub>4</sub>MONEY</h1> 
			</div>
		
			<div class="item">
				<a href="/"> Home </a>
			</div>

			<div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<div>Forex</div>
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
				<div> About Us</div>
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
				<div>Trading</div>
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
				<div>Tools</div>
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
				<div>Legal</div>
				<i class="dropdown icon"></i>
                <div class="menu">
		 		    <div class="item"> <a href="policy"> Our Trading Policy </a></div> 
					<div class="item"> <a href="disclaimer"> Disclaimer  </a></div> 
					<div class="item"> <a href="terms"> Trading Terms </a></div> 
					<div class="item"> <a href="riskcaution"> Risk Caution </a></div> 
                </div>
                </div>
			</div>

            <div class="item">
				<a href="/contactnew"> Contact </a>
			</div>
		</div>
	</div>



		
				
					
		








    </div>
  );
}

export default Appbar;