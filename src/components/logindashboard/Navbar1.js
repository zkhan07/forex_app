import React from "react";

const Navbar = () => {
    return(
        <div>

            {/* // <!-- Menubar 1 --> */}
            <div class="ui fluid container center aligned">
            <div class="doubling stackable ui menu">
                
            <div className="left item">
                <h1>PROFIT<sub>4</sub>MONEY</h1> 
            </div>

			
            <div class="item">
                <a href="loginlive">
                    <button className="ui red button">
                    SWITCH TO LIVE ACCOUNT
                    </button> 
                </a>
			</div>
         
            <div class="item">
				<a href="/loginlive"> Dashboard </a>
			</div>
			
           
            <div class="ui compact menu">
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



            {/* // <!-- Menubar 2 --> */}
            <div class="ui fluid container">
            <div class="doubling stackable ui inverted red menu">
                <div className="left item">
                    <h4>A/C No: F4M000063</h4> 
                </div>
			
                <button className="ui red button">
                    <a href="closedeals" style={{color: "white"}}> 
                    CLOSED DEALS 
                    </a>
                </button>
            
                <button className="ui red button">
                    <a href="accountstatement" style={{color: "white"}}>
                    ACCOUNT STATEMENT 
                    </a>
                </button>
               
		  </div>
	     </div>

		



        </div>
    );
}

export default Navbar;