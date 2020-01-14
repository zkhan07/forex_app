import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const ContactNew = () => {
    return(
        <div className="cont">
            <Navbar />

            <br/><br/><br/><br/>
            



            <div className="ui container">
                <div className="doubling stackable ui one column grid">

                    <div className="column center aligned">
                    <div className="ui items">
                    <div className="item">
                    <div class="content"> 
                    <a class="ui massive blue tag label">Start Forex Trading Contact profit4money</a> <br/><br/>
                    <div class="description">
                    <p className="para1">profit4money support team is there to assist you round the clock. Our support team members are dedicated to helping clients and clarify their doubts in no time. Contact us through email, phone or chat anytime, Our FAQs also offer you useful information to some extent.</p>  <br/>
                    <p className="para1">The simplest way to convey your query with us is by filling the following form: Just fills your Name, contact number, Gmail id and the suggestion or query you have, click on the send message. As soon we receive your query, we will respond to you within 24 hours.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    

                    <br/> <br/> <br/>



                    </div>
                    </div>









                <div className="doubling stackable ui two column grid">

                    <div className="twelve wide column center aligned">
                        <div className="ui segment">
                    <form class="ui form">
                    <div class="three fields">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="first-name" placeholder="Name" />
                    </div>
                    <div class="field">
                        <label>E-mail Address</label>
                        <input type="email" name="last-name" placeholder="Enter Email Address" />
                    </div>
                    <div class="field">
                        <label>Mobile Number</label>
                        <input type="number" name="last-name" placeholder="Enter Mobile Number" />
                    </div>
                    </div>
                    <div class="field">
                        <label>Message</label>
                        <textarea placeholder="Enter Message"></textarea>
                    </div>
                    <button class="ui green button" type="submit"> Submit </button>
                    </form>
                    </div>
                    </div>


                    <div className="four wide column center aligned">
                        <div className="ui fluid segment">
                        <div className="item">
                            <i className="home large green icon"></i>
                            <h3>133 Santina Parde Ellluk,
                            Vantu House, Port Vila Efate,
                            Vanuatu</h3>
                        </div> <br/>
                        <div className="item">
                        <i className="phone large icon"></i> <h3>+1 727 451 9982</h3>
                        </div> <br/><br/>
                        <div className="item">
                        <i className="mail large red icon"></i> <h3>info@profit4money.com</h3> 
                        </div>
                        </div>
                    </div>
            
                </div>

                </div>


                <br/><br/><br/>
                <div className="ui divider"></div>
                <br/><br/><br/>



                <div className="ui container">
                <div className="doubling stackable ui two column grid">

                    <div className="column center aligned">
                    <div class="ui segment">
                        <div className="item">
                            <a><h3>Forex International Gain LTD</h3></a> <br/>
                            <p  className="para1">133 Santina Parde Ellluk,
                            Vantu House, Port Vila Efate,
                            Vanuatu</p>
                        </div>
                        </div>
                    </div>

                    <div className="column center aligned">
                    <div class="ui segment">
                        <div className="item">
                            <a><h3>Help Center</h3></a> <br/>
                            <p  className="para1">profit4money - Technical assistance and customer support 24/5</p>
                        </div>
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

export default ContactNew;