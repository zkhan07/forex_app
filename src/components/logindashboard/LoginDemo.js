import React from "react";
import DemoNavbar from "./demonavbar/DemoNavbar"
import Content1 from "./Content1";
import Content2 from "./Content2";

const LoginDashboard = () => {
    return(
        <div>
            <DemoNavbar />
            <Content1 />
            <Content2 />
        </div>
    );
}

export default LoginDashboard;