import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Disclaimer = () => {
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
                    <a class="ui massive blue tag label">profit4money Disclaimer for <br/> Forex Trader</a> <br/><br/>
                    <div class="description">
                    <p className="para1">This legal disclaimer refers to the use of profit4money.com and its associated services.</p>  <br/>
                    <p className="para1">Trading forex on margin contains a certain amount of risk, and may not be ideal for all trading investors. The high amount of capital can work in favor as well as against you. So, before choosing to invest in the Forex market you should consider and clarify your investment goals, risk appetite as well as a level of experience.</p> <br/>
                    <p className="para1">Decisions to Sell, purchase, trade or hold insecurities and several other types of investments consist of high-level of risk and are made based on the guidance of financial experts. Any investments or trading securities contain a certain risk of loss.</p> <br/>
                    <p className="para1">Before undertaking any forex program, you should talk to a professional first to avoid a level of risk. Forex trading for beginners, Must consider whether such trading type is right for you as per your financial condition as well as the ability to bear monetary risks.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">profit4money Market opinions:</a> <br/><br/>
                    <div class="description">
                    <p className="para1">Any news, opinions, analysis or any other data contained on this website is served as general market commentary and doesn't form investment advice. profit4money will not be responsible for any damage or loss, which may result from the use of reliance on such data.</p> <br/>
                    <p className="para1">This website is not aimed for use or distribution by, any person from any country where such use or distribution would be obstinate to local regulation.</p> <br/>
                    <h4 className="para1">Distribution</h4>
                    <p className="para1">At profit4money, none of the investments or services are accessible to persons living in any state or country where the use of such investments or services would be against local law and regulation. Its the site visitors responsibility to read the terms and conditions, and obey it.</p> <br/>
                   
            
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


           


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Information Accuracy</a> <br/><br/>
                    <div class="description">
                    <p className="para1">The content on this can be alter or change, remove any content, or take strict action for violating any rules at anytime without notice and is offered to help forex traders to build independent and informed investment decisions. profit4money has taken the right measures to assure the accuracy of the data or information on the website, but doesn't ensure its accuracy.</p> <br/>
                    <p className="para1">We recommend you to get expert financial advice to make sure investing or trading in any product is appropriate for your concerns, and make sure you read and know any applicable offer piece of document.</p> <br/>
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

export default Disclaimer;