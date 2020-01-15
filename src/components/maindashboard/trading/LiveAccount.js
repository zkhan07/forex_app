import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const LiveAccount = () => {
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
                    <a class="ui massive blue tag label">Open Live Account with <br/> Forex4money</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Open forex trading account in forex4money. We train traders on how to open an account and help each client to turn their financial aspirations into reality by training them. open your live trading account today. Trade on our platform, highly optimized.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Difference between Demo account and Live Account</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Do not get confused between two Live accounts and Demo Account. Trading with a demo account means no profit and loss is real. but trading with a live account means all profit and loss are real. You can practice using Demo account, where you can learn the tricks, basics, and techniques that are important learning in the world of forex trading.</p> <br/>
                    <p className="para1">A forex live account is the main account. Open it with Forex4money today to start live trading. Our process of creating an account is very simple. If you want to create a corporate account or an individual account, our process makes it a piece of make. Don't worry about your strategic knowledge, skill level or budget. We have a suited solution for each trader. it is secure, reliable and fast. there is no hidden terms and conditions and hidden cost. We believe is an open and fair approach.</p> <br/>
                    <p className="para1">When you open a live trading account with Forex4money, we ensure that you will gain maximum profits. As you know the condition in a demo account is changed from live accounts, like margin and leverage setting, market volatility and pricing, so do not expect the results in the demo account to get shown in the live account similarly.</p> <br/>
                    <p className="para1">No doubt, demo accounts are best for those who are new to forex and want to learn the basics of trading. Here, at forex4money, our skilled professionals are always there to assist you. we would love to help you round the clock to let our users earn a good amount of money. wait no more! And get started with Forex trading today.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Simple and straight process for opening an account</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Its very simple to open a live account and start trading with forex4money/ Just fill the details, confirm your ID online, then use the most flexible and reliable payment method to deposit capital into your trading account. </p> <br/>
                    <p className="para1"> <h3>Before you open an account, make sure to read our terms and conditions. As Investing in CFDs carries certain risks and is not appropriate for all investors. </h3> </p><br/>
                    
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

export default LiveAccount;