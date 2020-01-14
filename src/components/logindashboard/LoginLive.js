import React from "react";
import LiveNavbar from "./livenavbar/LiveNavbar"
import Content1 from "./Content1";
import Content2 from "./Content2";

const LoginDashboard = () => {
    return(
        <div>
            <LiveNavbar />
            <Content1 />
            <Content2 />
        </div>
    );
}

export default LoginDashboard;