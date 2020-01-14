import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"
import { Pagination } from "semantic-ui-react";


const Document = () => {
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
                               <h3>My Documents</h3> 
                               </div>
                           </div>

                           <div className="ui divider"></div>

                           <div className="doubling stackable ui secondary menu">
                               <div className="left item">
                               <h3>We are committed to protecting the best interests of our
                                    client s. To provide the highest level of security to your
                                    account,</h3>
                               </div>
                           </div>

                           <div className="doubling stackable ui secondary menu">
                               <div className="left item">
                               <h3>we require Account Identification.For this, you
                                    just need to send following documents</h3> 
                               </div>
                           </div>

                           <br/><br/>
                           <div className="ui divider"></div>
                           <br/><br/>


                           <div className="doubling stackable ui secondary menu">
                               <div className="left item">
                               <h3>Attachment - Max Size 10 MB</h3> 
                               </div>
                           </div>

                        
                        <div class="ui form">
                        <div class="three fields">

                        <div class="field">
                            <label>Document Type</label>
                            <select class="ui dropdown">
                            <option>SELECT DOCUMENT TYPE</option>
                            <option>ID Proof</option>
                            <option>Address Proof</option>
                            <option>Bank Statement</option>
                            </select>
                        </div>

                        <div class="field">
                            <label>Document</label>
                            <select class="ui dropdown">
                            <option value="">SELECT DOCUMENT</option>
                            <option value="1">ID Proof</option>
                            <option value="0">Address Proof</option>
                            <option value="0">Bank Statement</option>
                            </select>
                        </div>

                        <div class="field">
                        <button className="ui red button"> SELECT FILES </button>
                        </div>

                        </div>
                        </div>
                        </div>
                        </div>
                     

                        <br/><br/>    <br/><br/>


                        <div className="ui container">
                        <div className="ui stacked red segment">
                    
                        <table class="ui celled table">
                        <thead>
                            <tr>
                            <th>Document Type</th>
                            <th>Document Name</th>
                            <th>Download</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <td>empty</td>
                            <td>empty</td>
                            <td>empty</td>
                            <td>empty</td>
                            </tr>

                            <tr>
                         
                            </tr>

                            <tr>
                          
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

export default Document;