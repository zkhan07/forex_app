import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Policy = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/><br/><br/>
            



            <div className="ui container">
                <div className="doubling stackable ui two column grid">

                    <div className="ten wide column">
                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Our Trading Policy</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Forex International Gain Ltd., an investment firm licensed and supervised by the Vanuatu Financial Services("vfs") offers investment services (the "services") strictly under the following terms and conditions, which are non - negotiable and may be amended after proper notice has been given to you (the "client") at the absolute discretion of vfs subject to the provisions of the terms below..</p>  <br/>
                    <p className="para1">By accepting and agreeing to the terms and conditions of this agreement and opening an account, the client accepts the following terms and conditions. subsequent to that and (i) subject to vfs’s final approval and (ii) upon the client's funding of his account, the client enters into a legal and binding agreement with vfs.</p> <br/>
                    <p className="para1">Whereas, VFS allows the carrying out of transactions in foreign currency exchange rates, in contracts for differences ("CFDs") based on foreign exchange rates and other financial assets, including, without limitation, commodities, shares and indices, as well as in options and other Financial Instruments, all as may be offered from time to time by FIH at its sole discretion, all subject to the terms and conditions set forth in this Agreement; and Whereas The Client wishes to open an account with FIH for purposes of carrying out such Transactions ("Account");</p> <br/>
                    
                    <ul>
                       <li className="para1">Scope of Agreement & Definitions</li> <br/>
                       <li className="para1">Opening of Account & Appointment of Agent</li> <br/>
                       <li className="para1">Trading</li> <br/>
                       <li className="para1">Guarantee and Margin Requirement; Limit on Transactions; No Interest Bearing Account</li> <br/>
                       <li className="para1">EXPIRY OF TRANSACTIONS; ROLLOVER</li> <br/>
                       <li className="para1">Use of the Internet Trading Platform and Website.</li> <br/>
                       <li className="para1">MARKET SUSPENSION AND DELISTING; CORPORATE ACTIONS</li> <br/>
                       <li className="para1">Use of the Internet Trading Platform and Website.</li> <br/>
                       <li className="para1">Withdrawal from and Closing of the Account by Client</li> <br/>
                       <li className="para1">Pricing & Commissions</li> <br/>
                       <li className="para1">Reports</li> <br/>
                       <li className="para1">Risks & Indemnification.</li> <br/>
                       <li className="para1">Telephone & Recording</li> <br/>
                       <li className="para1">Law and Jurisdiction</li> <br/>
                       <li className="para1">Entire Agreement & Amendments</li> <br/>
                       <li className="para1">Assignment</li> <br/>
                       <li className="para1">Termination & Force Major</li> <br/>
                       <li className="para1">Severability</li> <br/>
                       <li className="para1">Communications</li> <br/>
                       <li className="para1">Trading Service Provider (TSP)</li> <br/>
                       <li className="para1">iPayments only allow a maximum deposit of USD/EUR/GBP 5000.</li> <br/>
                   </ul>
                    
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                  
        

                    </div>










              
                    <div className="six wide column center aligned">
                    <div className="ui container">
                    <form class="ui form">
                    <div className="ui segment">
                    <a class="ui massive red tag label">Join now for free</a> <br/><br/>
                       
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>  <br/>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>  <br/>
                    <div class="field">
                        <label>E-mail Address</label>
                        <input type="email" name="last-name" placeholder="Enter Email" />
                    </div>  <br/>
                    <div class="field">
                        <label>Mobile Number</label>
                        <input type="number" name="last-name" placeholder="Enter Number" />
                    </div>  <br/>
                    <button class="ui big red button" type="submit">
                        Join Now 
                    <i className="right arrow icon"></i> 
                    </button> <br/><br/><br/>
                    </div>
                    </form>
                </div>
            </div>

                </div>
            </div>




        <br/><br/><br/>
     




        <Contact />
        <Footer />
        </div>
    );
}

export default Policy;