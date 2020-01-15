import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Premium = () => {
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
                    <a class="ui massive blue tag label">Premium</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Forex4money premium trading account enables traders to get access to services and benefits that are not provided on other trading accounts. Premium account is made to serve the needs of forex traders with more active accounts. no doubt each trader want to become wealthy through trading. And our team will assist you to lead the right path. Our premium accounts increase the chances of huge earning.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Our premium clients benefit from:</a> <br/><br/>
                    <div class="description">
                        <h4 className="para1">Free services and reduced charges</h4>
                    <p className="para1">At forex4money, we offer premium clients with cutting-edge technologies and advanced charting options to real-time data feeds, we try to offer the best experience to our premium as well as non-premium clients. we even negotiate charges for our premium clients.</p> <br/>
                        <h4 className="para1">Super fast service</h4>
                    <p className="para1">Get benefit from our rocket service for your forex trades and requests you might have.</p> <br/>
                        <h4 className="para1">VIP treatment</h4>
                    <p className="para1">Get advantage from our rapid response times to your emails, msgs, and calls. premium clients will also get invited to private events.</p> <br/>
                        <h4 className="para1">Higher interested</h4>
                    <p className="para1">You get higher interests on your account balance.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Forex4money team of experts:</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Our expert team knows your trading needs and financial aspirations, so we can offer tailored solutions that work best for you. We can assist you to get the most out of your trading, we focus to bring you the best solutions by our premium services.</p> <br/>
                    <p className="para1">Our managers <b>forpremium accounts</b> are here to create long-lasting relationships with our clients, by offering them with specialist and informed services.</p> <br/>
                    <p className="para1">All pur Premium Clients are assigned to manager. You can contact to your manager through email, phone, or face-to-face,to offer you expert guidance as well as support whenever you require. They can also get expert investment advice from our experts to assist them find the right place to invest their hard earned money.</p> <br/>
                    <p className="para1">Forex4money wants you to become a knowledgeable and successful trader in the Forex market. If you are a beginner, but trading as a premium investor, worry not! As we are there to make every step simple to you. to earn high profit, become a premium investor today at Forex4money.</p> <br/>
                    <p className="para1">At Forex4Money, you earn the real benefits of FOREX Trading! Open your account today with us and get the best trading experience. The process to sign up is very simple and straightforward. For any query, contact us through gmail or contact number. You can also subscribe to our newsletter, its free. You will get updated by trading tricks, tips and strategies to maximize your earning.</p> <br/>
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

export default Premium;