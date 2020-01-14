import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"
import Pagination from "./Pagination";


const NewDeals = () => {
    return(
        <div className="c1">

            <LiveNavbar />



            <div className="ui fluid container">
               <div className="doubling stackable ui two column grid">

                   <div className="twelve wide column center aligned">

                        <br/><br/>
                       <div className="ui container">
                           <div className="ui stacked red segment">
                           <div className="ui secondary menu">
                               <div className="left item">
                                  <h3>New Deal</h3>
                               </div>
                           </div>

                        <div className="ui divider"></div> <br/>

                        <div class="ui form">
                        <div class="two fields">
                            <div class="field">
                            <label>Instrument</label>
                            <select class="ui dropdown">
                            <option>EUR/USD</option>
                            <option>USD/JPY</option>
                            <option>GBP/USD</option>
                            <option>USD/CHF</option>
                            </select>
                            </div>
                            <div class="field">
                            <label>Lot Size</label>
                            <input type="number" placeholder="" />
                            </div> 
                        </div>

                        <div class="two fields">
                            <div class="field">
                            <label>Open Price</label>
                            <input type="number" placeholder="" />
                            </div>
                            <div class="field">
                           <button className="ui massive button">SELL 10.203</button>
                           <button className="ui massive button">BUY 25.213</button>
                            </div> 

                        <div className="ui secondary menu">
                            <div className="left item">
                            <h3>This deal requires $2.20 <br/>
                            of funds from your available margin.<br/>
                            Each pip is worth $0.10.</h3>
                            </div>
                        </div>
                            
                        </div>

            
                        </div> <br/>
                        <div className="ui secondary menu">
                            <div className="right item">
                            <button className="ui red button"> MAKE A DEAL </button>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className="ui container">
                        <div className="ui stacked red segment">
                            <div className="ui secondary menu">
                                <div className="left item">
                                <h3>Live Rate & Charts</h3>
                                </div>
                            </div>
                        <div className="ui divider"></div> <br/>
                        <div className="ui big image">
                            <img src="analysis.jpg" />
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

export default NewDeals;