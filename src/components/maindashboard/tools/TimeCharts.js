import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const TimeCharts = () => {
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
                    <a class="ui massive blue tag label">Real Time Charts</a> <br/><br/>
                    <div class="description">
                    <p className="para1">A forex trading chart enables a trader to watch historical rates of currency exchange. Forex4money brokers will offer free trading chart software for our potential customers who have open trading accounts. Traders use this charting software to know the probability flow on a particular currency pair.</p> <br/>
                    <p className="para1">Forex4money offers direct and free access to our advanced and most useful market indicators and trading charts. our tools are highly customizable, easy to use and offer traders with amazing trading experience by letting them use incredible features offered by these tools to make an informed trading decision.</p> <br/>
                    <h4 className="para1">5 strong reasons to use our trading chart software:</h4>
                   <ul>
                       <li>Our charts can assist traders to track current price flow and examine market trends.</li> <br/>
                       <li>Multiple time frames enable traders to watch patterns and trends easily</li> <br/>
                       <li>Highly customizable tools to fit with trader's requirement</li> <br/>
                       <li>Power to overlay various indicators for every commodity or currency pair </li> <br/>
                       <li>Can help traders in taking real-time decisions</li> <br/>
                   </ul>
                    <p className="para1">Forex4money offer trading chart software to our clients.  our tool generally shows information as a bar chart, line chart, as well as candlestick chart depends on the trader desires. </p> <br/>
                    <p className="para1">Usually, traders use candlestick chart as it shows the most extensive range of data.</p> <br/>
                    <p className="para1">The trading chart usually shows opening prices, closing prices, low price, and high price points.  Candlestick and bar charts show data on the closing and opening currency pair prices, low and high prices as well for the currency pair.</p> <br/>
                    <h4 className="para1">Why is Forex charting software important?</h4>
                    <p className="para1">Trading Chart is a very important tool in trading, and especially for technical traders. Technical search depends on the examination of chart patterns, price charts, price action trading, technical indicators, which makes reliable and stable trading chart very essential for such traders</p> <br/>
                    <p className="para1">Trading charts are the keys to unlock all the trading secrets. <b>Trading charts</b>  are the keys to unlock all the trading secrets.  We offer updated forex trading charts on the popular currency pairs and more detail on technical analyses with the use of Trading charts. </p> <br/>
                    <p className="para1">As you become more comfortable reading and understanding the real-time charts you will know how to add other important tools like technical analysis to calculate the changes in value and rate of market volatility.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                  
            




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

export default TimeCharts;