import React from "react";
import "./Style.css"

const About = () => {
    return(
        <div className="about">

        
        <br/><br/><br/> 

        <div className="ui container"><br/><br/><br/> 
         <div className="doubling stackable ui two column grid">
        <div className="column center aligned">
          <div className="ui segment">
            <div className="item">
          <div class="content">
            <div class="meta"> Some text about us </div>
            <a class="header"><h1>About us</h1></a>   <br/> <br/>
            <div class="description"> 
              <p className="para1"> At profit4money, we continuously strive to provide our customers with the services, tools, support and technology, required to take advantage of the Forex market and the opportunities it offers. We are constantly developing new advanced ways to make our client’s trading experience even better. This spirit of innovation coupled with our superior customer service which is our most important core value. </p> <br/>
              <p className="para1"> The mission of profit4money is to deliver a secure world class trading experience to all clients – both retail and institutional. We continually invest in new technologies and people, to provide our clients with a diverse range of trading products and an exceptional level of customer service. </p>
            </div> <br></br>
            <button className="ui primary button">Read More 
            <i className="right arrow icon"></i>  
            </button>
            </div>
            </div>
        </div>
        </div>

        <div class="column center aligned">
          <br/><br/>
          <div class="ui fluid image">
            <img src="bitcoin.jpg" />
          </div>
        </div>

        </div>
        <br/><br/><br/> 

        </div>


        <br/><br/><br/>
      
            


        </div>
    );
}

export default About;