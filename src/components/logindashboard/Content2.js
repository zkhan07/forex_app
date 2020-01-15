import React from "react";
import { Link } from "react-router-dom";

const Content2 = () => {
    return(
        <div className="c1">


            <br/><br/>
            <div className="ui fluid container">
               <div className="doubling stackable ui two column grid">

                   <div className="twelve wide column center aligned">

                         {/* // <!-- Menubar 1 --> */}
                        <div class="ui fluid container">
                        <div class="doubling stackable ui menu center aligned">
                        
                        <div className="left item">
                            <a> <button className="ui green button"> Open Oders </button> </a>
                            <a> <button className="ui green button"> Pending Orders </button> </a>
                        </div>
                      

                    
                        <div class="item">
                            <Link to="/newdeals">
                                <button className="ui red button">
                                NEW DEALS
                                </button>
                            </Link>
                        </div>

                        <div class="item">
                            <Link to="/newpendingdeals">
                                <button className="ui red button">
                                NEW PENDING DEAL
                                </button>
                            </Link>
                        </div>
            
                        <div class="item">
                            <div>
                                <button className="ui red button">
                                ZOOM
                                </button>	
                            </div>
                        </div>

                    
                       
                    </div>
                    </div>



                    <div className="ui container center aligned">
                    <div className="ui stacked red segment">
                    <table class="ui celled table">
                    <thead>
                        <tr>
                        <th>Order # Order Type</th>
                        <th>Instrument Lot Size</th>
                        <th>Open Time</th>
                        <th>Open Rate</th>
                        <th>Market Rate</th>
                        <th>Order Profit Swap</th>
                        <th>Net Profit</th>
                        <th>Take Profit / Stop Loss</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                        <td>empty</td>
                        <td>empty</td>
                        <td>empty</td>
                        <td>empty</td>
                        <td>empty</td>
                        <td>empty</td>
                        <td>empty</td>
                        <td>empty</td>
                        </tr>

                      No Open Orders

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    </tbody>
                    </table>
                    </div>
                  </div>
                  
                  
                 
      







            </div>
            </div>
            </div>

           



     


  




       

        </div>
    );
}

export default Content2;