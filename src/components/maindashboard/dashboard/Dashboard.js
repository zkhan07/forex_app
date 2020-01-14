import React from "react";
import Navbar from "../mainnavbar/MainNavbar";
import Image from "./Image";

import About from "./About";
import Services from "./Services";
import Payment from "./Payment";
import Contact from "./Contact";
import Footer from "./Footer";


const Dashboard = () => {
  return(
    <div>

      <Navbar />
      <Image />
      <About /> 
      <Services />
      <Payment />
      <Contact />
      <Footer />
   
    </div>
  );
}

export default Dashboard;















