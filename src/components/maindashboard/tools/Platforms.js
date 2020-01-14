import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const platforms = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/><br/><br/>
            



            <div className="ui container">
                <div className="ui two column grid">

                    <div className="ten wide column">
                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Trade with best trading <br/> platform of India- <br/> Forex4money</a> <br/><br/>
                    <div class="description">
                    <p className="para1">No matter whether you are a newbie or a professional trader, you will find the best platform to meet your trading needs. Forex4money set f trading platforms are made to offer exceptional speed, as well as performance and assure you have great control of your forex trading experience.</p> <br/>
                    <p className="para1">Forex4money offers you the choice of tree unique tradable platform crafted to meet your trading activity, personal style as well as net connection speed.</p> <br/>
                    <p className="para1">First account platform is a type of platform you can download. it fits best for skilled traders and the second platform is a web based platform. Each of our platforms fits your unique requirements.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Mobile trading:</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Take advantage of our mobile trading platform. No matter from which corner of the world you're, this will not impact your trading experience. you can rely on our advanced technology to offer you an exceptional trading experience.</p> <br/>
                    <p className="para1">It comes with advanced risk management ad full-featured trading options. Not just this, it offers you advanced analysis tools and trading View charting. </p> <br/>
                    <p className="para1">with this trading platform, you can quickly check account balances, view your trade history, and get price alerts. it is crafted for professional traders that demand advanced trading analytic tools and features in a single package.</p> <br/>
                    <p className="para1">Built for serious traders that demand sophisticated trading features and analytic tools in one powerful package.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>




                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Web based platform:</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Trade forex with web trading platform, our award-winning platform combines a set of technical tools, an intuitive interface, an advanced charting package and so on. Forex4money web based platform is the best choice for mobile trader. </p> <br/>
                    <p className="para1">This trading platform offers traders obtain several features straight from a PC like open and exit positions, withdrawing and depositing funds and checking trading history without downloading. It is best for those who explore more often and require instant accessibility.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>




                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">FXnet Platform:</a> <br/><br/>
                    <div class="description">
                    <p className="para1">This trading platform needs downloading and is highly customized to fill the unique needs of both newbie or expert traders.   FFXnet offers all of the essential data needed which can be shown on the device screen for ease of use.</p> <br/>
                    <p className="para1">This trading platform is especially crafted to offer the trader the opportunity to execute limit orders, single click dels as well as enables personalization as per trader's preference.</p> <br/>
                    <p className="para1">No doubt forex grading is among the most   popular type of trade right now. Its various trading platforms offers you a chance to select the one that best fits your trading objectives.</p> <br/> <br/>
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

export default platforms;