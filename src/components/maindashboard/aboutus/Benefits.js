import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Benefits = () => {
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
                    <a class="ui massive blue tag label">Trading Benefits</a> <br/><br/><br/><br/><br/>
                    <a class="ui massive blue tag label">Why traders choose profit4money?</a> <br/><br/>
                    <div class="description">
                    <p className="para1">At Forex4moeny, we bring the best state-of-art trading base to the desirable traders and let them explore the best of global trading markets. Providing with appropriate suggestions about <b>where to invest </b>and the correct moves to be made, we tend to ease trading for beginners and even the great rollers.</p>  <br/>
                    <p className="para1">We come up with a variety of financial products including CFDs, foreign exchange, commodity spot trading etc. We come up with a wide range of trading functions comprehensive solutions for end-users that are combined with robust platform and flexibility. Being market leaders who are obligated to provide a considerable level of services, we come forward with the greatest professionalism and business integrity.</p> <br/>
                    <p className="para1">Working along profit4money will let you attain a combination of several great qualities like technical innovation and industry expertise. We tend to deliver the best liquidity levels and real time quotes to our clients with a lot of other <b>trading benefits.</b> All these aspects ensure a fruitful trading environment for them.</p>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Liquidity and Global Connections</a> <br/><br/>
                    <div class="description">
                        <ul>
                            <li className="para1">Directly access global markets that include shares, forex, indices and commodities. </li> <br/>
                            <li className="para1">Access worldwide resources that may be required to attain global liquidity at just a click of the mouse.</li> <br/>
                            <li className="para1">Get excellent customer support in all possible ways.</li> <br/>
                            <li className="para1">Comprehensive wide range of interbank market access tools that could be helpful to professional traders possessing larger accounts.</li> <br/>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>



                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Trading and Costs</a> <br/><br/>
                    <div class="description">
                        <ul>
                            <li className="para1">Interbank spreads for several major pairs and competitive spreads for various other instruments.</li> <br/>
                            <li className="para1">No extra charges or hidden fees.</li> <br/>
                            <li className="para1">Advanced technology for efficient protection.</li> <br/>
                            <li className="para1">The ability to add remove or change limit order for any tradable instruments even when the market is closed.</li> <br/>
                            <li className="para1">Hedging capabilities</li> <br/>
                            <li className="para1">1-click deal execution</li> <br/>
                            <li className="para1">Intermediate payments for future profits</li> <br/>
                            <li className="para1">No margin calls. Full margin use for ensuring optimal utilization of the complete trading capital involved.</li> <br/>
                            <li className="para1">User selectable leverage options</li> <br/>
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>



                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Risk Management</a> <br/><br/>
                    <div class="description">
                        <ul>
                            <li className="para1">Ensuring execution of limit orders, real-time margin protection, and various tools for automatic risk management along with protection of negative balance.</li> <br/>
                            <li className="para1">Advanced technology for ensuring uninterrupted maintenance of orders even under market conditions that are volatile.</li> <br/>
                        </ul>
                    <p className="para1">At profit4money, you are offered with the best customer support and commitment. With the various trading benefits we tend to create the most suitable trading platform. Our major interest is to support traders who want to invest along the rules of forex factory forum. With our efforts and algorithms we look into the fact that the highest good of the traders is considered.</p> <br/>
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

export default Benefits;