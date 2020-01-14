import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Indices = () => {
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
                    <a class="ui massive blue tag label">Indices</a> <br/><br/>
                    <div class="description">
                    <p className="para1">You may have heard people discussing the performance of “market today” every now and then. Well, here is a bit into trading indices. Trading some of the major market indices has been a considerable way of investing. However, it does not have to be available to individual investors always. With profit4money you can access the market indices you desire in the form of CFDs and make the most benefit out of it.</p> 
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Why is CFD trading preferable?</a> <br/><br/>
                    <div class="description">
                    <p className="para1"> CFD trading is known to be a form of trading derivatives. This means that you can deal on prices that have been derived on underlying markets and not underlying markets itself. It has been a popular form of trading since it enables traders to: </p> <br/>
                    <ul>
                        <li className="para1">Leverage and let capital go further</li> <br/>
                        <li className="para1">Go long or short</li> <br/>
                        <li className="para1">Trade a wide range of markets</li> <br/>
                        <li className="para1">Mirror trading the underlying markets</li> <br/>
                        <li className="para1">Hedge a portfolio</li> <br/>
                        <li className="para1">Use DMA</li> <br/>
                    </ul>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Benefits of indices and CFD trading</a> <br/><br/>
                    <div class="description">
                        <h4 className="para1">Leverage </h4>
                    <p className="para1"> CFDs allow your investment capitals go further since you would be required to deposit only a considerable portion of your the entire value of your trade to create a position. This deposit is called margin. Further deposits would depend on the size of your position and the margin factor for the market you choose. However, profit or loss would be dependent on the full size of your position.</p>
                        <h4>Going Short </h4>
                    <p className="para1"> Since CFD trading also considers an agreement to exchange the considerable difference in the opening price and closing price of your position, it could be considered more flexible than any other forms of trading. </p> <br/>
                        <h4 className="para1">Wide Range of markets </h4>
                    <p className="para1"> With these contracts you could trade over 16,000 markets that include indices, shares, commodities, cryptocurrencies, forex and several others. You can trade over different markets from the same platform.</p><br/>
                        <h4 className="para1">Similarity to underlying market  </h4>
                    <p className="para1"> CFDs have been designed to very closely mimic the trading environments of various underlying markets.  Buying CFDs is similar to buying shares for any brand. However, you will not be entitled to any shareholder privileges and your position would be adjusted to the offset the effects caused by any dividend payments.</p><br/>
                        <h4 className="para1">Hedging your share portfolio   </h4>
                    <p className="para1"> For example, you have a several number of shares with a company and decide to hold on to them for a long time. You may open a short position considering that the banking sector would offset any losses with CFDs. If things fall perfect, you will earn a profit. If not, you can close your CFD position and offset the losses against future profits for CGT purposes.</p><br/>
                        <h4 className="para1">CFD trading this way could prove to be beneficial.   </h4>
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

export default Indices;