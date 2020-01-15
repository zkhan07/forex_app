import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const AccountComparision = () => {
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
                    <a class="ui massive blue tag label">Account Comparisions</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Forex4money is committed to offering its potential clients with the best trading experience. we offer types of trading accounts, all with distinct and highly competitive trading conditions, they are made to meet the requirements and demands of each trader.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Demo Account</a> <br/><br/>
                    <div class="description">
                    <p className="para1">One of the best ways for a forex beginner to enter the currency worlds is to begin practicing on a demo account. as the saying goes, “Practice makes perfect and this saying goes best and this couldn’t be more accurate with forex trading. So, if you want to test your trading skills, choose from one of our forex demo accounts and start trading.</p> <br/>
                    <h3 className="para1">Benefits of Forex Demo Account:</h3>
                    <p className="para1"><b>Offers a great  learning experience</b></p>
                    <p className="para1">Demo trading platforms are basically made to offer newbie traders with great learning experiences. They let every trader learn the basics from how to enter and exit foreign exchange positions without bearing any loss. </p> <br/>
                    <p className="para1">if you want to go profitable in the trade market, then you should know all the strategies and techniques involved. knowing these forex tricks is very important since you can not perform with them using authentic money. Without getting fully aware of the impacts that come about using such techniques you may end up losing money in trading. </p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Live account</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Fore4money live accounts have their own goal and personality; each account is reliable to a different type of trader or investor and each shows a new window of opportunity to the forex currency world.  from newbies to expert traders, from minor depositors to major, the type of live accounts we provide is a way to your financial goals. </p> <br/>
                    <p className="para1">A trading live account is where you trade using real money. Any profit or loss is real. Live account is different from a demo account in terms of execution, spreads, and slippage.  </p> <br/>
                    <p className="para1"> <b>Spreads are normally tighter in a demo </b>trading condition. Analyze this to a live trading account and you may observe the difference in spreads in the demo is almost 1 pip. </p> <br/>
                    <p className="para1">forex4money offers types of live accounts for each trader with varying stop levels, deposits, spreads, and commissions.  You are supposed to choose the one that suits you best and fulfills your goals. The best way to choose the right one for you is to compare them and choose the best one. </p> <br/>
                    
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

export default AccountComparision;