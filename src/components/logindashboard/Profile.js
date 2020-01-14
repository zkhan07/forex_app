import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"


const Profile = () => {
    return(
        <div className="c1">

            <LiveNavbar />


            <br/><br/>
            <div className="ui fluid container">
               <div className="doubling stackable ui two column grid">

                   <div className="twelve wide column center aligned">
                        
                        <br/>
                       <div className="ui container">
                       <div className="ui stacked red segment">
                           <div className="ui secondary menu">
                               <div className="left item">
                               <h3>My Profile</h3> 
                               </div>
                           </div>

                        <div className="ui divider"></div> <br/>

                        <div class="ui form">
                        <div class="two fields">
                            <div class="field">
                            <label>Account Number</label>
                            <input type="text" value="F4M000063" />
                            </div>
                            <div class="field">
                            <label>Email Address</label>
                            <input type="email" value="dineshkyadav85@gmail.com" />
                            </div>    
                        </div> <br/>

                        <div class="two fields">
                            <div class="field">
                            <label>Package</label>
                            <input type="text" value="MINI" />
                            </div>
                            <div class="field">
                            <label>Leverage Ratio</label>
                            <input type="text" value="1:500" />
                            </div>    
                        </div> <br/>

                        <div class="two fields">
                            <div class="field">
                            <label>First Name</label>
                            <input type="text" value="dinesh" />
                            </div>
                            <div class="field">
                            <label>Last Name</label>
                            <input type="text" value="Yadav" />
                            </div>    
                        </div> <br/>

                        <div class="two fields">
                            <div class="field">
                            <label>Mobile Number</label>
                            <input type="number" value="9167248371" />
                            </div>
                            <div class="field">
                            <label>Date Of Birth</label>
                            <input type="date" value="10/06/1985" />
                            </div>    
                        </div> <br/>

                        <div class="field">
                            <label>Street Address</label>
                            <input type="text" value="gali no.2" />
                        </div> <br/>

                        <div class="two fields">
                            <div class="field">
                            <label>City</label>
                            <input type="text" value="mumbai" />
                            </div>
                            <div class="field">
                            <label>State</label>
                            <input type="text" value="NA" />
                            </div>    
                        </div> <br/>

                        <div class="two fields">
                            <div class="field">
                            <label>Country</label>
                            <input type="text" value="INDIA" />
                            </div>
                            <div class="field">
                            <label>Postal Code</label>
                            <input type="number" value="400103" />
                            </div>    
                        </div> 

                        <div className="ui secondary menu">
                            <div className="left item">
                            <input type="checkbox" className="ui massive checkbox" /> Daily Analysis  
                            <input type="checkbox" className="ui large checkbox" />  Receive News
                            </div>
                        </div>

                        </div> <br/>
                        
                        <div className="ui secondary menu">
                            <div className="right item">
                               <button className="ui red button">UPDATE PROFILE</button>
                            </div>
                        </div>
                        
                        </div>
                        </div>
                   </div>






                   <div className="four wide column center aligned">
                       <div>
                           <h2>Account Summary</h2>
                           <table class="ui fixed inverted table">
                            <thead>
                                <tr><th>Name</th>
                                <th>Status</th>
                            </tr></thead>
                            <tbody>
                                <tr>
                                <td>Package </td>
                                <td>Mini DEMO</td>
                                </tr>
                                <tr>
                                <td>Balance</td>
                                <td>$10,210.85</td>
                                </tr>
                                <tr>
                                <td>Open P/L</td>
                                <td>$-4.59</td>
                                </tr>
                                <tr>
                                <td>Net Equity</td>
                                <td>$-4,494..64</td>
                                </tr>
                                <tr>
                                <td>Margin</td>
                                <td>$0.00</td>
                                </tr>
                                <tr>
                                <td>Free Margin</td>
                                <td>$-4,494.64</td>
                                </tr>
                                <tr>
                                <td>Margin Level</td>
                                <td>0.00 %</td>
                                </tr>
                                <tr>
                                <td>Net Exposer</td>
                                <td>$0.00</td>
                                </tr>
                                <tr>
                                <td>Trading Bonus</td>
                                <td>$0.00</td>
                                </tr>
                                <tr>
                                <td>Cash Back</td>
                                <td>$0.00</td>
                                </tr>
                                <tr>
                                <td>Max Exposer</td>
                                <td>$0.00</td>
                                </tr>
                                <tr>
                                <td>Padding Withdrawal</td>
                                <td>$0.00</td>
                                </tr>
                               
                            </tbody>
                            </table>
                            <button className="ui red button"> Show More Details</button>


                       </div>
                   </div>

               </div>
           </div>
          



        </div>
    );
}

export default Profile;