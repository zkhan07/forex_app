import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Commodity = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/><br/><br/>
            



            <div className="ui container">
                <div className="doubling stackable ui two column grid">
               
                    <div className="ten wide column center aligned">
                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">What is a Commodity?</a> <br/><br/>
                    <div class="description">
                    <p className="para1">A commodity could be expressed as a group of goods/assets that you may deal with in everyday life. These may include metals, energy or food items. Commodities are regarded as exchangeable in nature and alternate. These could be simply expressed as movable goods that can be purchased and sold except for money and actionable claims.</p> <br/>
                    <p className="para1">Commodities have long found their way into the Indian trading market, much before any other countries. However, foreign rule and invasion, different government systems, policies and natural calamities led to decrease in commodity trading. Presently, although there are share market trades or the stock market, commodity trade continues to gain back its importance.</p>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Difference between Forex trading and Commodity trading</a> <br/><br/>
                    <div class="description">
                        <ul>
                            <li className="para1"><b>Difference in Regulation:</b> the markets for commodity trading are known to be way more sophisticated than forex trading. Although there are regulations with forex too, there is still much scope for better implementations.</li> <br/>
                            <li className="para1"><b>Leverage:</b> although both markets offer considerable leverage, you will not need to jump over hoops in forex trading to obtain it. All need to do is to fund your respective accounts with a few hundred dollars and manage thousands. Forex trading offers spectacular leverage than the commodities market.</li> <br/>
                            <li className="para1"><b>Exchange Limits:</b> commodities are traded on exchange and have daily range limits unlike foreign exchange that is traded through brokers in the interbank market. You are rather not allowed to exceed limits with commodities trading.</li> <br/>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Advantages of commodities trading with profit4money</a> <br/><br/>
                    <div class="description">
                    <p> <b className="para1"> Investing in commodities could often hold several advantages. Here are a few: </b></p>
                    <ul>
                       <li className="para1"><b>Refuge during crisis:</b> although investors do not seem to be secure about investing in commodities. It could be a great way of investment during tough times.</li> <br/>
                       <li className="para1"><b>Diversified Investment Portfolio:</b> Diversified portfolio means a perfect plan for asset allocation. This is one of the best aspects with commodity trading since you can keep track of the various changes that may occur in the economic-scenarios and let you make smart investment with appropriate trading strategies.</li> <br/>
                       <li className="para1"><b>Profitable returns </b> commodities are known to be quite riskier forms of investments. You could soon come up with great investments provided the fact that you’ve made your investment right.</li> <br/>
                       <li className="para1"><b>Protection against inflation:</b> Inflation could hit any economy very badly. A few commodities you’ve invested in could help you maintain the upswing.</li> <br/>
                    </ul>
                    </div>
                    </div>
                    </div>
                    </div>






                    </div>










                    <div className="six wide column  center aligned">
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

export default Commodity;