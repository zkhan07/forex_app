import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Vision = () => {
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
                    <a class="ui massive blue tag label">Our Vision</a> <br/><br/>
                    <div class="description">
                    <p className="para1">With every hour that is passing by, there are increasing opportunities of profit earning in the prevailing financial markets. At profit4money, we offer the most relevant <b>customer support</b>  for trading in the forex market. When clients arrive to us for reaching out to reliable earning opportunities we make sure to keep ourselves updated with the most relevant tools and guidance for them.</p>  <br/>
                    <p className="para1">We come up with the most relevant technologies that could help clients make the best out of available opportunities to earn considerable profits. We’re prepared with various quantitative spreads that could support quality trade execution.</p>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Secure Trading Options</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Although there are endless opportunities of earning with trade finance, it is quite hard to find trading platforms and technologies that are secure. Every trader wants to proceed with considerably lower risk fetch out maximum profits. We therefore determine stronger core values that can encourage and empower people from different backgrounds to trade with confidence. </p> <br/>
                    <p className="para1">We continuously bring in our efforts to unleash the actual potential of desiring traders and enter the world of trading with a sense of reliability and security for the money they are going to invest.</p> <br/>
                    <p className="para1">More than anything, our major concern is account security along with exceptional customer support service. For this purpose we come up with advanced tools and the most suitable encryption protocols. This helps in attaining suitable market liquidity and ensures investment capital for the traders.</p> <br/>
                    <p className="para1">profit4money handles situations and cases under great market volumes with strict policies and measures for accounts security. They continually come up with better ways of connecting traders to the fast paced global markets.</p> <br/><br/>
                    <h4 className="para1">Dependable Customer Support System</h4> <br/>
                    <p className="para1">We are available to our clients through various mediums so that we are reachable at the very moment they need us. Our representatives are perfect at handling different cases in ways that could keep everything well in place. We proceed with our activities keeping in mind the vision of creating and extending a secure and safe trading environment to our clients and help them explore the lucrative proximities of trade finance.</p> <br/>
                    <p className="para1">With proper licensing and regulations we tend to make out the ultimate best returns for forex currency. Continuous research and reliable decision making is preferable to ensure that traders operate the market suitably with considerable returns. We constantly endeavor towards creating an environment that is perfect for realizing the most appropriate trade practices. While many may be unaware of the actual operations of forex trading, with profit4money we tend to provide them a secure platform which is reliable for both investing and learning.</p>
            
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

export default Vision;