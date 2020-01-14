import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const Terms = () => {
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
                    <a class="ui massive blue tag label">Trading Terms</a> <br/><br/>
                    <div class="description">
                    <p className="para1">The data on the website is based on the information received from research, report and from reliable sources. They cannot be displayed, copied, performed, altered, or use anywhere in any manner without profit4money's consent.</p>  <br/>
                    <p className="para1">We are not liable for any damage to be made as to use of the site and or the site data contained in it as of unavailability/malfunctions of the site including its diverse services.</p> <br/>
                    <p className="para1">You will be liable for maintaining and offering the means by which to use the site, which might include, however, is not limited to, mode, a personal computer or any other access line.</p> <br/>
                    <p className="para1">You further consider all risks connected with the storage and use of data on your PC or on any other device by which you will get access to the site and the services.</p> <br/> 
                    <p className="para1">You represent and warrant that you have implemented and plan to operate and maintain appropriate protection in relation to the security and control of access to your computer, computer viruses or other similarly harmful or inappropriate materials, devices, information or data.</p> <br/><br/>
                    <h4 className="para1">Change Policy</h4> <br/><br/>
                    <p className="para1">profit4money has all the right to update and modify the site content, consisting of discontinuing and adding services or instructions. So the site users shall have no doubt or complain or right to compensation of any type of damage that the client claims happened to him/her as of the change.</p> <br/>
                    <p className="para1">As per our trading terms, you agree that we are not responsible in any way in the event of any damage and failure to your PCs or any other system.</p> <br/>
                    <h4 className="para1">Anti Money Laundering Rules</h4> <br/><br/>
                    <p className="para1">We are also obliged to comply with AML rules and does its efforts to confirm the client's identity. being our client you are cordially asked to offer copies of some documents. If you fail to offer such copies under one week- your account may get blocked until you offer copies of your documents.</p> <br/>
                    <h4 className="para1">Security of your personal data</h4> <br/><br/>
                    <p className="para1">We use security systems as well as procedures to provide you a secure and safe trading environment and to secure your trading and financial information.</p> <br/>
                    <p className="para1">when you sign up with us, you will get a unique User ID, account number as well as password. We recommend our clients to not disclose any personal data with any outsider.</p> <br/>
                    <h4 className="para1">Indemnity</h4> <br/><br/>
                    <p className="para1">You consent to pay us against all claims, liabilities and expenses that might result from any violation of this Agreement by you or by a system on which you use to access the website.</p> <br/>
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

export default Terms;