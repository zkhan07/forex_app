import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"


const AddDeposit = () => {
    return(
        <div className="c1">

            <LiveNavbar />


            <br/><br/>
            <div className="ui fluid container">
               <div className="doubling stackable ui two column grid">

                   <div className="twelve wide column center aligned">
                       <br/>
                       <div className="ui stacked red segment">
                       <div className="ui secondary menu">
                           <div className="left item">
                           <h3>Select Mode of Payment</h3>
                           </div>
                       </div>
                  
                  <div className="ui divider"></div>

                   <div className="doubling stackabl ui four column grid">

                        <div className="four wide column">
                            <h2>Online Payment</h2>
                            <div className="ui image">
                            <img src="credit-card.jpg" />
                            </div>
                        </div>

                        <div className="four wide column">
                            <h2>Mega Transfer</h2>
                            <div className="ui image">
                            <img src="credit-card.jpg" />
                            </div>
                        </div>

                        <div className="four wide column">
                            <h2>Bank Transfer</h2>
                            <div className="ui image">
                            <img src="credit-card.jpg" />
                            </div>
                        </div>


                        </div>

                      








                        <br/><br/>
                        
                   


                      <div className="ui container"> 
                      <div className="ui secondary menu">
                           <div className="left item">
                           <h3>Please Enter Deposit Details</h3>
                           </div>
                       </div>
                       
                       <div className="ui divider"></div> <br/>
                     
                        <div className="ui form">
                        <div class="two fields">
                            <div className="field">
                                <label><h4>Deposit Currency</h4></label>
                                <select>
                                    <option>Select Currency</option>
                                    <option>USD Dollar</option>
                                    <option>IND INR</option>
                                </select>
                            </div>
                        </div> <br/>

                        <div class="two fields">
                            <div className="field">
                                <label><h4>Deposit Amount</h4></label>
                               <input type="text" />
                            </div>
                        </div>

                        </div> <br/>

                        <div className="ui secondary menu">
                           <div className="left item">
                           <button className="ui red button">DEPOSIT</button>
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

export default AddDeposit;