import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"


const ChangePassword = () => {
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
                               <h3>Change Password</h3> 
                               </div>
                           </div>

                        <div className="ui divider"></div> <br/>
                        
                        <div class="ui form">
                            <div class="ten wide field">
                            <label>Enter Old Password :</label>
                            <input type="text" placeholder="Enter Old Password" />
                            </div> <br/>
                            <div class="ten wide field">
                            <label>Enter New Password :</label>
                            <input type="text" placeholder="Enter New Password" />
                            </div> <br/>
                            <div class="ten wide field">
                            <label>Enter Confirm Password :</label>
                            <input type="text" placeholder="Enter Confirm Password " />
                            </div> <br/>
                        
                           <div className="ui secondary menu">
                               <div className="left item">
                               <button className="ui red button">CHANGE PASSWORD</button>
                               </div>
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

export default ChangePassword;