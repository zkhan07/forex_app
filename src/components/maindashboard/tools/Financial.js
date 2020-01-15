import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Financial = () => {
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
                    <a class="ui massive blue tag label">Forex calendar and its use</a> <br/><br/>
                    <div class="description">
                    <p className="para1"><b>Forex calendar</b> is a very useful forex tool. It is a customized tool that provides detailed information regarding forex trading. It will inform traders about upcoming important economic information, like <b>commodity live market rate</b>, non farm payroll etc. As our regular calendars assist us to remind the day and date, Our forex calendar assists the traders similarly.</p> <br/>
                    <p className="para1">In short, the Foreign calendar is One of the best and most useful forex tools that offer traders with relatable information, such as changes expected to have a great impact on the economic markets to make the right predictions.</p> <br/>
                    <p className="para1">This tool helps forex traders in maintaining track of the latest <b>forex news</b>, and events happening in the world of economics.</p> <br/>
                    <p className="para1">By using our <b>forex calendar</b>, forex traders have the chance to get informative details about economic and non-economic signs and stay in touch with current forex trends, and what can change the movement of any particular currency.</p> <br/>
                    <p className="para1">With this, you can keep an eye on how the economy is moving, it will hint to you when the market is down and up. It saves a lot you from risky trade, and much more useful for beginner traders.</p> <br/>
                    <p className="para1">You can rely on our <b>forex calendar</b> that will offer you great benefit in your trading. It works as a powerful tool that helps you to know when to trade or not.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Tips to use an Economic <br/> Calendar</a> <br/><br/>
                    <div class="description">
                    <h4 className="para1">Recognize the right indicators?</h4>
                    <p className="para1">There are basically  two types of indicators.</p> <br/>
                    <p className="para1"><b>Lagging Indicators:</b> These indicators show past economic performance. Changes to this type of indicators are known only after an economic tendency has been formed already. The best example of lagging indicators is Unemployment rate. </p> <br/>
                    <p className="para1"><b>Leading Indicators:</b>this type of indicators get changed when a huge change or adjustment made in the economy is formed. so, this type of indicator could be used to predict upcoming trends. the best example of Leading indicators is retail sales.</p> <br/>
                    <p className="para1">A forex calendar should be made in a manner that economic indicators are ranked accordingly.  Few traders rank these indicators as per the volatility that these economic indicators may cause in the trading market. </p> <br/>
                    <p className="para1">Almost every time when market-changing news comes out, traders analyze the present figure with the previous ones also taking into analyst's account estimates for the same. These figures when set together will assist a trader to become informed whether the new information surpasses expectations or going to disappoint.   This will help traders know their new move.</p> <br/>
                    <p className="para1">In this case, A forex calendar can assist a trader get informed about all the possible change and so they can act accordingly, quicker than their competitors in the trading market. economic announcements and political news can change the flow of a particular currency pair. Sometimes this flow can change in no time and this is where our tool <b>Forex calendar</b> comes in use.</p>
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

export default Financial;