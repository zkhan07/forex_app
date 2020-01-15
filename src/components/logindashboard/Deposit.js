import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"
import Pagination from "./Pagination";
import { Link } from "react-router-dom";


const Deposit = () => {
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
                            <h3>Search Filters</h3>
                            </div>
                        </div>
                        <div className="ui divider"></div>
                        <br/>
                        <div class="ui form">
                        <div class="two fields">
                        <div class="field">
                            <label>Deposit Status</label>
                            <input type="text" placeholder="ALL STATUS" />
                        </div>
                        <div class="field">
                            <label>Deposit Types</label>
                            <input type="text" placeholder="ALL DEPOSIT TYPES" />
                        </div>
                        </div>  <br/>

                        <div class="two fields">
                            <div class="field">
                            <label>From Date</label>
                            <input type="date" placeholder="First Name" />
                            </div>
                            <div class="field">
                            <label>To Date</label>
                            <input type="date" placeholder="Middle Name" />
                            </div> 
                            <br/>
                        </div>
                        </div> <br/>

                        <div className="ui secondary menu">
                            <div className="right item">
                            <button className="ui red button"> SEARCH </button>
                            </div>
                        </div>
                        </div>
                        </div>


                        









                            {/* Dropdown List try */}
                        {/* <div className="ui container">
                    
                        <div class="ui compact fluid menu">
                        <div class="ui simple dropdown button">
                            <i class="dropdown icon">zaid khan</i>
                            <div class="menu">
                            
                            <div class="item">
                            <div className="ui container">
                            <div className="ui menu">
                                <div className="left item">
                                <h3>Search Filters</h3>
                                </div>
                            </div>
                            <br/>
                            <div class="ui form">
                            <div class="two fields">
                            <div class="field">
                                <label>Deposit Status</label>
                                <input type="text" placeholder="ALL STATUS" />
                            </div>
                            <div class="field">
                                <label>Deposit Types</label>
                                <input type="text" placeholder="ALL DEPOSIT TYPES" />
                            </div>
                            </div> <br/>

                            <div class="two fields">
                                <div class="field">
                                <label>From Date</label>
                                <input type="date" placeholder="First Name" />
                                </div>
                                <div class="field">
                                <label>To Date</label>
                                <input type="date" placeholder="Middle Name" />
                                </div> 
                                <br/>
                            </div>
                            </div> <br/>

                            <div className="ui menu">
                                <div className="right item">
                                <button className="ui red button"> SEARCH </button>
                                </div>
                            </div>
                            </div>

                            
                            </div>
                            </div>
                        </div>
                        </div>
                      
                        
                        </div> */}
                        







                        <br/><br/>
                        <div className="ui divider"></div>
                        <br/><br/>   











                        <div className="ui container">
                        <div className="ui stacked red segment">
                        <div className="doubling stackable ui secondary menu">
                            <div className="left item">
                            <h3>Deposit List </h3>
                            </div>
                            <div className="right item">
                            <Link to="/adddeposit"> <button className="ui red button">ADD DEPOSIT</button> </Link>
                            </div>
                        </div>

                        <div className="ui divider"></div>
                        
                        <div className="doubling stackable ui secondary menu">
                            <div className="left item">
                                <select class="ui dropdown">
                                    <option >10</option>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                                    <option>All</option>
                                </select>
                                records
                            </div> 
                            <div className="right item">
                                Search : <input type="text" placeholder="" />
                            </div>
                        </div>

                        <div className="ui divider"></div>

                        <table class="ui celled table">
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Ref No#</th>
                            <th>Deposit Type</th>
                            <th>Amount </th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td></td>
                            <td>100.00</td>
                            <td>Pending <button className="ui red button">RETRY</button> </td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td>1.25220</td>
                            <td>100.00</td>
                            <td>Pending <button className="ui red button">RETRY</button> </td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td>1.30300</td>
                            <td>100.00</td>
                            <td>Pending <button className="ui red button">RETRY</button> </td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td></td>
                            <td>100.00</td>
                            <td>Pending <button className="ui red button">RETRY</button> </td>
                            </tr>

                            <tr>
                            <td>145036 XAU/USD</td>
                            <td>Buy 0.01000	</td>
                            <td>1.28420</td>
                            <td>100.00</td>
                            <td>Pending <button className="ui red button">RETRY</button> </td>
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

export default Deposit;