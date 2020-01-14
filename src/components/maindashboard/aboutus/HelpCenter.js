import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const HelpCenter = () => {
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
                    <a class="ui massive blue tag label">profit4money HelpCenter</a> <br/><br/>
                    <a class="header"> <h1></h1></a> <br/><br/>
                    <div class="description">
                    <p className="para1">Forex trading is not a piece of cake. If you really want to become a successful trader, then you must be ready to invest not only money but also hard work and time to obtain these three success factors- Experience, knowledge, and emotion charge..</p>  <br/>
                    <p className="para1">profit4money staff help center is here round the clock to assist you to reach your goals, offer youtechnical assistance remarkably from a learning view, but deciding if a forex trading regiment is ideal for you will not come easy. It only comes after hours of training, practice with real-time and virtual cash on a forex demo account.</p> <br/>
                    
                    <br/><br/><br/><br/><br/>
                    <a class="ui massive blue tag label">Making a Better Online Trading Experience Is Our Aspiration</a>
                    <br/><br/><br/><br/><br/>
                    
                    <p className="para1">At profit4money, we consider that victorious forex trading needs experience, knowledge as well as a disciplined approach towards the market. Every page on our website is dedicated to these main factors in some way. whether you think you are a newbie, intermediate or a professional trader, we assure that there is something exciting and new for you to study here. We are one of the most trusted forex brokers on the internet today.</p> <br/>
                    <p className="para1">Give clients what they want- easy and quick forex solutions to their queries. profit4money help desk assists you offer personalized support whenever they need, customers satisfaction is our priority.</p> <br/>
                    <p className="para1">We are committed to steadily growing and expanding our offerings; forex4 money team of ex[prts are accessible over email, live chat, and phone, so you can contact us anytime.  You can also find us on social media networks, our help team manage and respond to your queries or comments on our social media handle.</p> <br/> <br/>
                    <h4 className="para1">Technical Assistance</h4>
                    <p className="para1">We know Good and 24/7 customer support is very important in Forex, regardless of how expert you are but specifically if you're a newbie. if you will not get support by a broker when needed, then you may fail to solve any issue that you may face during your trading career.</p> <br/>
                    <p className="para1">On the other hand, technical assistance is also very important. all-round assistance is needed, but especially technical support, if you're a beginner. We understand how solid support is needed for successful trading. Our customer support will never let you and your hopes down.</p> <br/>
                    <p className="para1">profit4moneyhelp center is not only effective but also efficient.  you will get the instant help on demand, as we know poor support could lead our customers to make unnecessary loss of money.</p> <br/>
                    <p className="para1">Whenever you need our support, just fill your details in the form below and send your queries. We will respond to you as soon as possible.</p> <br/><br/><br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    

                    <br/> <br/> <br/>



                    </div>










                    <div className="column center aligned">
                    <form class="doubling stackable ui form center aligned">
                        <div className="ui segment">
                        {/* <h1>Join now for free</h1> */}

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
                    </div>
                    </form>
                    </div>
                    </div>
                </div>
           




        <br/><br/><br/> <br/><br/><br/>
  




        <Contact />
        <Footer />
        </div>
    );
}

export default HelpCenter;