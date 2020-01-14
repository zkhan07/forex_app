import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const RiskCaution = () => {
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
                    <a class="ui massive blue tag label">Risk Caution</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Before you head into stock and foreign markets, remember that trading currencies, as well as other investment products, always involves a certain amount of risk. Sometimes due to financial fluctuation, you may not just suddenly boost your capital, but also lose it completely.</p> <br/>
                    <p className="para1">'Thus, our potential clients have to make sure profit4money that they know all the possible risks and their consequences,  they should be aware of all the rules and regulations governing the utilization of investment products.  Our clients know that there are some features and risks that affect exchange rates, prices, as well as investment products. these risks include price changes, decrease in liquidity, high volatility, etc.</p> <br/>
                    <p className="para1">As of high volatility , there is a high amount of risk in both profit and loss in the financial market.  The prices for underlying assets and derivative instruments may intensively change in wide ranges because of unexpected events and modifications in trading system. The company, nor the clients can control these changes. So, clients should understand specific market  conditions, to avoid any losses.</p> <br/>
                    <p className="para1">Before you sign up with us, assure to go through the user agreement properly,  and the basic rules and regulations of the financial markets.</p> <br/>
                    <p className="para1">profit4money is not responsible for any losses that happened as a result of regulations of stock markets,  military actions, government restrictions and suspension of trading.</p> <br/>
                    <p className="para1">Any news, opinions, prices, analysis, and other information on this ire are offered as general market fact and does not constitute investment advice. profit4money has taken prudent measures to ensure the authority of the information and knowledge on the website.  the content on our site to subject to modify at any moment without intimation.</p> <br/>
                    <p className="para1">Do not get into risky CFD or spot forex trading unless you know the basic information of such type of trading and its risks- like, how losses and profits are made, how positions are done, and many more.</p> <br/>
                    <p className="para1">CFDs and spot Forex trading is a very risky type of trading as it involves a certain amount of risk.  thus, trading in these sections is ideal only for those who already know how much risk involved in this trading. </p> <br/>
                    <p className="para1">Before start trading in any of these contracts, make sure to get advice from financial experts. </p> <br/>
                    <p className="para1">Former success in Trading Is Not necessarily Indicative Of further Results. Potential clients should not reply on investing in any type of trading only based on their past performance.  Past success doesn't come with a guarantee of future success.</p> <br/>
                    <p className="para1">Furthermore, Clients must also depend on their review if the Entity or Person making the decisions and the Advisory Agreement terms including the benefits and risks involved. '</p> <br/>
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

export default RiskCaution;