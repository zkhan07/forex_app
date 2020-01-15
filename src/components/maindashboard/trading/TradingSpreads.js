import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const TradingSpreads= () => {
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
                    <a class="ui massive blue tag label">Trading Spreads</a> <br/><br/>
                    <div class="description">
                    <p className="para1">If you are new in forex trading, you may not be familiar with the vocabulary used in the world of forex. Few times even the easiest concepts can have concealed complexities- this is same the case with spreads and Pips.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">What does Pip mean in Trading?</a> <br/><br/>
                    <div class="description">
                    <p className="para1">A pip is known to be an incremental price movement which carries a specific value which is dependent on the considerable market. In simple words, it is the standard unit of measurement for recognizing the change in value in the exchange rate.</p> <br/>
                    <p className="para1">Originally, pip was considered as the smallest that would be done to a FX price. However, with the arrival of other precise pricing methods, this original definition does not hold importance. Traditionally, FX prices had been quoted for a set of decimal places that most commonly include four decimal places. A pip was originally considered as a one point movement in the last decimal place that has been quoted.</p> <br/>
                    <p className="para1">Many brokers are now known to quote forex price for an extra decimal value. However, it may now be clear that pip is no longer the final decimal place value. It continues to be a standardized value across various platforms and among different brokers which makes it an important unit of measure. Without such a unit of measure, there are chances that apples would be compared to oranges. When considering generic points pip certainly holds relevance. This measuring unit is essential for margin calculation at various points.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">What is Spread?</a> <br/><br/>
                    <div class="description">
                    <p className="para1">In forex trading, the spread is the difference between two things. the difference in the ask/bid/buy/sell price that is offered by the broker to the potential traders. </p> <br/>
                    <p className="para1">Spreads are usually of two types, Fixed spread and variable spread; </p><br/>
                    
                    </div>
                    </div>
                    </div>
                    </div>



                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">WVariable Spread:</a> <br/><br/>
                    <div class="description">
                    <p className="para1">In forex trading, a variable spread is a uniformly changing price between the bid and ask prices. In simple words, the spread you spend on buying a currency pair changes as of things such as demand, supply as well as total trading activity. </p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>



                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">What influences the spread in forex trading?</a> <br/><br/>
                    <div class="description">
                    <p className="para1">There are various factors which can affect the spread. Some factors are;</p> <br/>
                    <ul>
                        <li className="para1">Market liquidity</li> <br/>
                        <li className="para1">Market volatility</li> <br/>
                        <li className="para1">market uncertainty</li> <br/>
                        <li className="para1">Time of day</li> <br/>
                    </ul>
                    <p className="para1">Each forex trader should pay significant attention to spread management. High performance and results can only be obtained when a high quantity of market conditions is taken into consideration. A strong trading technique is based on a proper evaluation of the specific financial condition and market indicators of a deal. Spreads tend to fluctuate, spread management policy must be flexible enough to settle to market movement.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>



                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Withdrawal</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Withdrawing funds from your Forex4money account is easy and quick. Withdrawal requests received before 1pm AEST will be acted on the same day, with all others being acted on within 24 hours. Forex4money only uses secure methods for sending your funds to you, and fully complies with internal and regulatory procedures to ensure the funds are safely processed. For more details on withdrawal procedures, see below or contact us for more information.</p> <br/>
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

export default TradingSpreads;