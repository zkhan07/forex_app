import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const LossPolicy = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/><br/><br/>
            



            <div className="ui container">
                <div className="doubling stackable ui two column grid">

                    <div className="ten wide column">

                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">What is Stop Loss policy?</a> <br/><br/>
                    <div class="description">
                    <p className="para1">A Stop Loss refers to a risk management tool which intends to add security to your fund investment. It is necessary on every position except for  real assets. and cryptocurrencies.</p> <br/>
                    <p className="para1">It's an order to end the trade when the forex market moves a defined amount upon your position and assist you to reduce your losses when the market moves in the odd flow to what you anticipated.</p> <br/>
                    <p className="para1">You as a trader can set your Stop Loss as a monetary amount or as a specific level in the market, which is shown as an initial investment percentage.</p> <br/>
                    <p className="para1">During normal market conditions, when the market exceeds your requested rate and you lost the decided amount, then the Stop Loss will target and close your position automatically. </p> <br/>
                    <p className="para1">Stop Losses are not secured. In Volatile periods market gaps, slippage and spikes may occur as of changing market conditions, sometimes Stop Loss fail to trigger and stop at your requested rate.</p> <br/>
                    <p className="para1">we do not remunerate for these occurrences as we do not conflict with market events or conditions. </p> <br/>
                    <p className="para1">With so many important aspects to view at and consider when considering a stock buy, its easy to forget about minor things. And the Stop-loss is one of those minor things, however, it can make a huge difference. Each trader can benefit from this trading tool.</p> <br/>
                    <p className="para1">Forex4money Stop-loss let you focus on other important tasks, and in the meantime, it will monitor how your stock is performing.  this tool is extremely beneficial when you are on a vacation that stops you from viewing your stocks position for a long period.  </p> <br/>
                    <p className="para1">Last, but Most importantly, a stop-loss enables decision-making process to be freed from any emotional impacts. Sometimes people think t give a stock new change, which causes delay and procrastination, giving the stock another chance only cause losses. </p> <br/><br/><br/>

                    <p className="para1">Overall, Stop loss is one of the most important tools offered by us.  It's very easy to use the tool. Whether you want to lock in profits or prevent losses,   You can benefit from this tool.   It's like an insurance policy: You think you never need it, but it's great to know you have the security should you require it.</p> <br/>
                    <p className="para1">Stop-loss orders can assist you to stay on the right track without overshadowing your decision with emotion.  </p> <br/>
                    <p className="para1">It's important to know that Stop-loss policy does not guarantee you'll gain profit in the trading.  </p> <br/><br/><br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                   
            
                    </div>










                   
                    <div className="six wide column center aligned">
                    <div className="ui container">
                    <form class="ui form">
                    <div className="ui segment">
                    <a class="ui massive red tag label">Join now for free</a> <br/><br/>
                       
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>  <br/>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>  <br/>
                    <div class="field">
                        <label>E-mail Address</label>
                        <input type="email" name="last-name" placeholder="Enter Email" />
                    </div>  <br/>
                    <div class="field">
                        <label>Mobile Number</label>
                        <input type="number" name="last-name" placeholder="Enter Number" />
                    </div>  <br/>
                    <button class="ui big red button" type="submit">
                        Join Now 
                    <i className="right arrow icon"></i> 
                    </button> <br/><br/><br/>
                    </div>
                    </form>
                </div>
            </div>

                </div>
            </div>




        <br/><br/><br/>
     




        <Contact />
        <Footer />
        </div>
    );
}

export default LossPolicy;