import React from "react";

const Form = () => {
    return(
        <div>

            <div className="ui container form1">
                <div className="doubling stackable ui grid">
                    <div className="column center aligned ">

                    <form class="ui form">
                        <h1>Join now for free</h1>
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div class="field">
                        <label>E-mail Address</label>
                        <input type="email" name="last-name" placeholder="Enter Email" />
                    </div>
                    <div class="field">
                        <label>Country</label>
                        <input type="text" name="last-name" placeholder="Enter Your Country" />
                    </div>
                    <div class="field">
                        <label>Mobile Number</label>
                        <input type="number" name="last-name" placeholder="Enter Number" />
                    </div>
                    <button class="ui primary button" type="submit">Join Now</button>
                    </form>

                    </div>
                    </div>
                </div>
           
             
    

        </div>
    );
}

export default Form;