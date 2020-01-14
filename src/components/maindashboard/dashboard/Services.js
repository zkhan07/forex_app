import React from "react";
import "./Style.css";

const Services = () => {
    return(
        <div className="service">

            <br/><br/>
        
            <div className="ui container center aligned">

                <h3>We offer different services</h3>
                <a class="header"><h2> Our services </h2></a>
                <br/><br/>

                <div class="doubling stackable ui three column grid">
                    <div class="column center aligned">
                        <div class="ui segment">
                            <div className="ui image">
                                <img src="ball.jpg" />
                            </div>
                        </div>
                    </div>


                    <div class="column center aligned">
        
                        <div class="ui fluid card">
                            <div class="content">
                                <a class="header">Commodities</a>
                                <div class="meta">2 days ago</div>
                                <div class="description">
                                    <p className="para1">It has become a popular form of investment
                                    amongst individual investors as they allow the use of leverage.</p>
                                </div> <br/>
                                </div>
                            </div> 
                      

                        <div class="ui fluid card">
                            <div class="content">
                                <a class="header">Stocks</a>
                                <div class="meta">2 days ago</div>
                                    <div class="description">
                                    <p className="para1">The importance of being a shareholder is that you
                                    are entitled to a portion of the company's profits.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                


           
            <div class="column center aligned">
             
            <div class="ui fluid card">
                <div class="content">
                    <a class="header"> Indices </a>
                    <div class="meta">2 days ago</div>
                        <div class="description">
                            <p className="para1">Trading major market indices has been a popular
                            way of investing for nearly a century.</p>
                        </div> <br/>
                    </div>
                </div>
            </div>


            

            </div>
            </div>

            <br/><br/><br/>
            <div className="ui divider"></div>
            
        </div>
    );
}

export default Services;