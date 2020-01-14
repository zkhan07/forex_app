import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"
import { Pagination } from "semantic-ui-react";


const BankDetails= () => {
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
                               <h3>Bank Account</h3> 
                               </div>
                               <div className="right item">
                               <a href="addbank"><button className="ui red button">ADD NEW BANK ACCOUNT</button></a>
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
                  

                        <table class="ui celled table">
                        <thead>
                            <tr>
                            <th>Nick Name </th>
                            <th>Account Number</th>
                            <th>Bank Name</th>
                            <th>Country</th>
                            <th>Currency</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <td>empty</td>
                            <td>empty</td>
                            <td>empty</td>
                            <td>empty </td>
                            <td>empty </td>
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

export default BankDetails;