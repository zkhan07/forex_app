import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Contact from "../dashboard/Contact";
import Footer from "../dashboard/Footer";

const AccountVerification = () => {
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
                    <a class="ui massive blue tag label">Account Verification</a> <br/><br/>
                    <div class="description">
                    <p className="para1">If your account on forex4money is not verified yet, you can only take 60% benefit of all the services we offer you. Although verification of the account is not compulsory, it offers you access to the full use of the services. Its good to verify your identity, as it will improve your trading way.</p> <br/>
                    <p className="para1">The verification process is very simple. all you need to do is to upload the softcopy on your Id proof for passport. After that, your uploaded documents will be cross-checked.</p> <br/>
                    <p className="para1">Within 3 days after sending the verification documents, you will get an email verifying trading status or requesting for the additional documentation required. We have mentioned about all the required documents for different level of verification.</p> <br/>
                    <p className="para1">You have to come across 2 levels of account verification: the first one is already mentioned, and to pass the second level, you need to verify the first level mandatorily. Both the levels are simple, you only have to upload valid documents. Do not use false documents while verification, this can lead to an account ban.</p> <br/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <br/> <br/> <br/>


                    <div className="ui items">
                    <div className="item">
                    <div class="content">
                    <a class="ui massive blue tag label">Points to ponder</a> <br/><br/>
                    <div class="description">
                        <p className="para1">Always keep the following things into consideration while sending verification documents:</p>
                        <ul>
                            <li className="para1">The document must be in color and clarity. </li> <br/>
                            <li className="para1">The scanned document must have two blank pages </li> <br/>
                            <li className="para1">Don't forget to scan both sides of the document</li> <br/>
                            <li className="para1">No scratch-outs and cancellations are allowed </li> <br/>
                            <li className="para1">upload only high-resolution photos </li> <br/>
                            <li className="para1">Name on the trading account should match the name used in the document</li> <br/>
                            <li className="para1">Don't forget to upload proof of address for verification </li> <br/>
                            <li className="para1">Submitted documents should be valid for a maximum of 6 months</li> <br/>
                            <li className="para1">Accepted file types; jpeg, png, pdf, gif. The document size must not cross 2MB.</li> <br/>
                            <li className="para1">Do not type name in Block letters. You are supposed to write only the first letter of the word in Block letters. </li> <br/>
                        </ul>
                        <p className="para1">By verifying address proof, you will assure that the local or permanent address you filled in your scanned documents is correct. You can upload your internet bill, mobile bill as the address proof. Make sure the document you upload for verification is not 6 months old.</p> <br/>
                        <p className="para1">if in any case, your verification request is rejected, you will get a notification to your gmail id; the cause of rejection will be informed in your place.</p> <br/>
                        <p className="para1">It's beneficial to get your account verified on forex4money, it means you have joined hands with us and our trading is really good. Make sure to read the procedure of uploading documents to avoid error.</p> <br/>
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

export default AccountVerification;