import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Trading = () => {
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
                    <a class="ui massive blue tag label">Trading FAQs</a> <br/><br/>
                    <div class="description">
                    <p className="para1">There are various considerable elements that need to be known while you may be dealing with forex. Before you dive into the regular updates of your investments, it may be important to recognize several basics of forex. These include some commonly used terms and concepts that need to be understood.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div class="ui inverted blue segment">
                      <p>What is a CFD?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is Forex?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>How does CFD and Forex Trading Work?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What are the market trading hours?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What are the tools needed to trade Forex and CFD?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is the minimum age to be able to trade?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is pip in Forex?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is a Spread?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What does going “long” and “short” mean?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>DDoes Forex market have any central location?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>How are prices determined?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>Are orders executed even when underlying markets are closed?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>Does profit4money re-quote or change order prices?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What are the costs of Index based CFDs and trading commodity with profit4money?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is the validity of a spot transaction and what is automatic rollover?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What if a CFD position is held open overnight?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What are binary options?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is a call option?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is a Put option?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is meant by ‘in-the money’?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is meant by ‘out-of-the-money’?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>How much can I lose, if the investment I chose turns out to wrong?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What if my option expires at strike rate?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>How much do I need to invest on trade?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What will I receive for a successful investment?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What options can I trade?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is an underlying asset?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What is the expiry time?</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>What would be the time zone for expiry time?</p>
                    </div>

                    <p className="para1">Do you have a question which does not appear in this page? Kindly send it to us by E-mail on info@profit4money.com and we will be glad to add it.</p>
               
                

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

export default Trading;