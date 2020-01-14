import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"
import Pagination from "./Pagination";


const Economic = () => {
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
                                <h3>Economic Calender</h3>
                            </div>
                        </div>
                        </div>
                        </div>

                        {/* <div className="ui divider"></div> */}
      
                        <div className="ui stacked red segment">
                        <div className="ui container">
                        <div className="doubling stackable ui secondary menu">
                            <div className="left item">
                                <h3>Investing.com</h3>
                                <i className="apple big icon"></i>
                                <i className="android big green icon"></i>
                            </div>
                            <div className="right item">
                               Current Time : <input type="time" />
                            </div>
                        </div>

                        <div className="doubling stackable ui secondary menu">
                            <div className="right item">
                            <input type="date" /> <i className="calendar big  icon"></i>
                            </div>
                        </div>
                       
                     
                        <table class="ui celled table">
                        <thead>
                            <tr>
                            <th>Time</th>
                            <th>Cur.</th>
                            <th>Imp.</th>
                            <th>Event </th>
                            <th>Actual</th>
                            <th>Forecast </th>
                            <th>Previous</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
                            </tr>

                            <tr>
                            <td>03.15</td>
                            <td>NZD</td>
                            <td></td>
                            <td>Electronic Card Retail Sales (MoM) (Oct)</td>
                            <td>-0.6%</td>
                            <td></td>
                            <td>0.2%</td>
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

export default Economic;