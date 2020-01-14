import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Conditions = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/><br/><br/>
            



            <div className=" ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="ten wide column center aligned">

                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">profit4money Conditions</a> <br/><br/>
                    <div class="description">
                    <p className="para1">We endeavor to bring forward all the best elements, tools, support and services so that our clients could make out the most in prevailing financial markets with smart investments and appreciable returns. However, while you make your investments with us, there are several important terms and conditions and regulations that need to be considered. Before you dive into the <b> forex market </b>, it is suggestible to get through these.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div class="ui inverted blue segment">
                      <p>Trading Hours</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>Margin Requirements</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>CFD Expiration Dates</p>
                    </div>
                    <div class="ui inverted blue segment">
                      <p>Trading Rules</p>
                    </div>

                

                    </div>










                    <div className="six wide column center aligned ">
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

export default Conditions;