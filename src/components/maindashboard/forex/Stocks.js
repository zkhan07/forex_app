import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Stocks = () => {
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
                    <a class="ui massive blue tag label">Stocks</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Stock trading had been one of the most popular ways of investments over all this time since business and trading has gained pace. Stock represents a share in the company’s earnings and assets. Holding a company’s share provides a trader the decision making rights proportionately in the company allowing them to attend the meetings of the board of directors.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">What is stock trading?</a> <br/><br/>
                    <div class="description">
                    <p className="para1"> Stock trading in simple words could be defined as buying and selling of stocks in order to capitalize on regular price fluctuations. The short-term traders involved in this tend to bet about being able to make up a few bucks within the next hour, day or minute. There are the following types of stock trading:</p> <br/>
                    <p className="para1"> <b>Active Trading:</b>  this one is generally conducted by traders who place about 10 or more trades every month. Their strategies are dependent greatly on the right timing so that the investments could actually make up to suitable profits.</p> <br/>
                    <p className="para1"> <b>Day trading: </b>  this one is a popular strategy determined by traders who generally prefer playing hot potato with stocks i.e. buying and selling stocks and closing up their positions. All this is done within a single trading day without considering the effects within the underlying market. The general aim of investors pursuing day trading is to earn a few bucks in the next few hours.</p>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Advantages of stock trading</a> <br/><br/>
                    <div class="description">
                    <p className="para1"> <b>Stock trading prevails as one of the most popular investment trade India.  Here are a few important benefits of it:</b></p> <br/>
                    <p className="para1"> <b>Take advantage of the growing economy: </b> With the growth of the economy, corporate earnings also tend to increase. It could be a good way to make profit out of suitable situations.</p><br/>
                    <p className="para1"> <b>Stay ahead of inflation:</b>As per past records, stocks had been able to make out the best returns. Even when they perform the minimum, they can earn the investors considerable much profit to beat up the effects of inflation in various cases..</p><br/>
                    <p className="para1"> <b>Easy: </b> the regulations have made it very easy to buy stocks of considerable companies. You can purchase stocks through a broker, online or a financial broker. Just like purchasing a few, you can sell out shares very easily whenever you desire.</p><br/>
                    <p className="para1"> With <b> forexlive </b> updates you may catch up with market conditions and give a better direction to your investments, bringing out appropriate profit. You can easily manage risks and get on to the most successful spheres of investment recognizing growth in earnings.</p><br/>
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

export default Stocks;