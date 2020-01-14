import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"
import Pagination from "./Pagination";

const CloseDeals = () => {
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
                        <div className="doubling stackable ui secondary menu">
                            <div className="left item">
                            <h3>Closed Orders</h3>
                            </div>
                            <div className="right item">
                                <button className="ui red button">Zoom</button>
                            </div>
                        </div>
                      

                        <div className="ui divider"></div>
                       
                      
                        <table class="ui selectable celled table">
                        <thead>
                            <tr>
                            <th>Order # Instrument</th>
                            <th>Type Lot SIze</th>
                            <th>Take Profiit Stop Loss</th>
                            <th>Open Time</th>
                            <th>Open Rate</th>
                            <th>Close Rate</th>
                            <th>Order Profiit Swap</th>
                            <th>Net Profiit</th>
                            <th>Close Time</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td></td>
                            <td>23-May-2017 10:06:52 AM</td>
                            <td>1261.80000</td>
                            <td>1294.63000	</td>
                            <td>$328.30 $0.00</td>
                            <td>$328.30</td>
                            <td>25-Sep-2017 11:26:09 AM</td>
                            <td>Manual Close</td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td>1.25220</td>
                            <td>23-May-2017 10:06:52 AM</td>
                            <td>1261.80000</td>
                            <td>1294.63000	</td>
                            <td>$328.30 $0.00</td>
                            <td>$328.30</td>
                            <td>25-Sep-2017 11:26:09 AM</td>
                            <td>Manual Close</td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td>1.30300</td>
                            <td>23-May-2017 10:06:52 AM</td>
                            <td>1261.80000</td>
                            <td>1294.63000	</td>
                            <td>$328.30 $0.00</td>
                            <td>$328.30</td>
                            <td>25-Sep-2017 11:26:09 AM</td>
                            <td>Auto Close</td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td></td>
                            <td>23-May-2017 10:06:52 AM</td>
                            <td>1261.80000</td>
                            <td>1294.63000	</td>
                            <td>$328.30 $0.00</td>
                            <td>$328.30</td>
                            <td>25-Sep-2017 11:26:09 AM</td>
                            <td>Auto Close</td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td>1.28420</td>
                            <td>23-May-2017 10:06:52 AM</td>
                            <td>1261.80000</td>
                            <td>1294.63000	</td>
                            <td>$328.30 $0.00</td>
                            <td>$328.30</td>
                            <td>25-Sep-2017 11:26:09 AM</td>
                            <td>Manual Close</td>
                            </tr>
                        </tbody>
                        </table>
                       
                        
                        <Pagination />
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

export default CloseDeals;