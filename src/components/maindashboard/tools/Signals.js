import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Signals = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/><br/><br/>
            



            <div className="ui container">
                <div className="ui two column grid">

                    <div className="ten wide column">
                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">ADVANCED TRADING SIGNALS</a> <br/><br/>
                    <div class="description">
                    <p className="para1">At Forex4money, we are here to prove that our Forex signals will guide you with professional advice and strategies regarding when to purchase and sell currency pairs without hurting your pocket.</p> <br/>
                    <p className="para1">Forex signals is a popular software made by trading experts who trade in the Forex Market. This tool made to make the process of trading currencies available for everyone- no matter the trader has enough knowledge about the market. The analyst will collect data from the forex market and offer suggestions on how to earn profit from it, which is afterwards forwarded to users through various methods.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">How you can benefit from our Advanced Trading Signals?</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Our Advanced forex signal tool comes with in-depth tutorials about market trends so that users can watch to polish their knowledge in the forex market. this software gives users a huge amount of time to boost their knowledge of the market and software itself. Using this software will surely increase the chance of becoming a successful trader.Forex4money suggest you make the most of the best forex signals.</p> <br/>
                    <p className="para1">its very simple to use our Advanced Trading Signals: use trading signals to understand when your trades are generating fund or copy recommended trading tips to your trading account.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>




                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">List of Trading Signals:</a> <br/><br/>
                    <div class="description">
                        <h4 className="para1">Currencies</h4>
                    <p className="para1">AUD/CHF AUD/JPY AUD/AD EUR/CAD AUD/USD CAD/JPY CHF/JPY CHF/AUD EUR/CCHF EUR/CZK EUR/GBP EUR/HUF EUR/JPY EUR/NOK EUR/JPY NZD/NZD EUR/CAD NZD/PLN EUR/SEK EUR/TRY EUR/USD GBP/AUD GBP/CAD GBP/CHF GBP/JPY GBP/NZD GBP/NZD AUD/USD NZD/CHF NZD/USD SGD/JPY USD/PLN EUR/CAD USD/CHF USD/CZK USD/DKK USD/HKD USD/HUF USD/ILS USD/JPY USD/MXN USD/NOK USD/PLN USD/SEK USD/SGD USD/TRY USD/ZAR</p> <br/>
                        <h4 className="para1">Commodities</h4>
                    <p className="para1">COF/USD OIL/USD SOY/COF/USD XPT/USD SUG/USD XAG/USD COR/USD XAU/USD/USD GAS/</p> <br/>
                        <h4 className="para1">Indices</h4>
                    <p className="para1">USD GAS/COF/COF/USD XAU/USD SOY/USD SUG/USD XAG/USD COR/USD/USD OIL/USD XPT/</p> <br/> <br/>
                    <p className="para1">Forex4money Advanced Trading Signals are highly customizable, letting you manage them as per your trading needs as well as assisting you make informed trading decisions. Our Trading signals are broadcast straight on your devices for your ease.these days thousands of traders are using this tool, no matter how much experienced they are.using Trading signals will enhance the probability of earning profit and get you on proper track to forex trading success.</p> <br/>
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

export default Signals;