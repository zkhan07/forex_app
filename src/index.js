import React from  "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';

import SignIn from "./components/maindashboard/signin/SignIn";
import SignUp from "./components/maindashboard/signup/SignUp";
import Dashboard from "./components/maindashboard/dashboard/Dashboard";

import LoginLive from "./components/logindashboard/LoginLive";
import LoginDemo from "./components/logindashboard/LoginDemo";
import AccountStatement from "./components/logindashboard/AccountStatement";
import CloseDeals from "./components/logindashboard/CloseDeals";
import Deposit from "./components/logindashboard/Deposit";
import AddDeposit from "./components/logindashboard/AddDeposit";
import Withdraw from "./components/logindashboard/Withdraw";
import AddWithdraw from "./components/logindashboard/AddWithdraw";
import LiveRates from "./components/logindashboard/LiveRates";
import Economic from "./components/logindashboard/Economic";
import ActivityLog from "./components/logindashboard/ActivityLog";
import Profile from "./components/logindashboard/Profile";
import Document from "./components/logindashboard/Document";
import BankDetails from "./components/logindashboard/BankDetails";
import AddBank from "./components/logindashboard/AddBank";
import ChangePassword from "./components/logindashboard/ChangePassword";

import NewPendingDeals from "./components/logindashboard/NewPendingDeals";
import NewDeals from "./components/logindashboard/NewDeals";

import WhatForex from "./components/maindashboard/forex/WhatForex";
import Commodity from "./components/maindashboard/forex/Commodity";
import Indices from "./components/maindashboard/forex/Indices";
import Stocks from "./components/maindashboard/forex/Stocks";
import Conditions from "./components/maindashboard/forex/Conditions";
import Trading from "./components/maindashboard/forex/Trading";
import Account from "./components/maindashboard/forex/Account";


import Vision from "./components/maindashboard/aboutus/Vision";
import Benefits from "./components/maindashboard/aboutus/Benefits";
import Support from "./components/maindashboard/aboutus/Support";
import HelpCenter from "./components/maindashboard/aboutus/HelpCenter";


import LiveAccount from "./components/maindashboard/trading/LiveAccount";
import AccountComparision from "./components/maindashboard/trading/AccountComparision";
import AccountVerification from "./components/maindashboard/trading/AccountVerification";
import TradingParameters from "./components/maindashboard/trading/TradingParameters";
import TradingSpreads from "./components/maindashboard/trading/TradingSpreads";
import LossPolicy from "./components/maindashboard/trading/LossPolicy";
import Premium from "./components/maindashboard/trading/Premium";
import Withdrawal from "./components/maindashboard/trading/Withdrawal";


import DailyMarket from "./components/maindashboard/tools/DailyMarket";
import Financial from "./components/maindashboard/tools/Financial";
import TimeCharts from "./components/maindashboard/tools/TimeCharts";
import Signals from "./components/maindashboard/tools/Signals";
import Platforms from "./components/maindashboard/tools/Platforms";
import LiveMarket from "./components/maindashboard/tools/LiveMarket";
import EducationPackage from "./components/maindashboard/tools/EducationPackage";



import Policy from "./components/maindashboard/legal/Policy";
import Disclaimer from "./components/maindashboard/legal/Disclaimer";
import Terms from "./components/maindashboard/legal/Terms";
import RiskCaution from "./components/maindashboard/legal/RiskCaution";


import ContactNew from "./components/maindashboard/contact/ContactNew";



ReactDOM.render(

<HashRouter>

    <Route exact path="/signin" component={SignIn}/>
    <Route exact path="/signup" component={SignUp}/>

    <Route exact path="/" component={Dashboard}/>
    <Route exact path="/loginlive" component={LoginLive}/>
    <Route exact path="/logindemo" component={LoginDemo}/>
    <Route exact path="/accountstatement" component={AccountStatement}/>
    <Route exact path="/closedeals" component={CloseDeals}/>
    <Route exact path="/deposit" component={Deposit}/>
    <Route exact path="/adddeposit" component={AddDeposit}/>
    <Route exact path="/withdraw" component={Withdraw}/>
    <Route exact path="/addwithdraw" component={AddWithdraw}/>
    <Route exact path="/liverates" component={LiveRates}/>
    <Route exact path="/economic" component={Economic}/>
    <Route exact path="/activitylog" component={ActivityLog}/>
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/document" component={Document}/>
    <Route exact path="/bankdetails" component={BankDetails}/>
    <Route exact path="/addbank" component={AddBank}/>
    <Route exact path="/changepassword" component={ChangePassword}/>

    <Route exact path="/newpendingdeals" component={NewPendingDeals}/>
    <Route exact path="/newdeals" component={NewDeals}/>
   
    <Route exact path="/whatforex" component={WhatForex}/>
    <Route exact path="/commodity" component={Commodity}/>
    <Route exact path="/indices" component={Indices}/>
    <Route exact path="/stocks" component={Stocks}/>
    <Route exact path="/conditions" component={Conditions}/>
    <Route exact path="/trading" component={Trading}/>
    <Route exact path="/account" component={Account}/>

    <Route exact path="/vision" component={Vision}/>
    <Route exact path="/benefits" component={Benefits}/>
    <Route exact path="/support" component={Support}/>
    <Route exact path="/helpcenter" component={HelpCenter}/>

    <Route exact path="/liveaccount" component={LiveAccount}/>
    <Route exact path="/accountcomparision" component={AccountComparision}/>
    <Route exact path="/accountverification" component={AccountVerification}/>
    <Route exact path="/tradingparameters" component={TradingParameters}/>
    <Route exact path="/tradingspreads" component={TradingSpreads}/>
    <Route exact path="/losspolicy" component={LossPolicy}/>
    <Route exact path="/premium" component={Premium}/>
    <Route exact path="/withdrawal" component={Withdrawal}/>

    <Route exact path="/dailymarket" component={DailyMarket}/>
    <Route exact path="/financial" component={Financial}/>
    <Route exact path="/timecharts" component={TimeCharts}/>
    <Route exact path="/signals" component={Signals}/>
    <Route exact path="/platforms" component={Platforms}/>
    <Route exact path="/livemarket" component={LiveMarket}/>
    <Route exact path="/educationpackage" component={EducationPackage}/>

    <Route exact path="/policy" component={Policy}/>
    <Route exact path="/disclaimer" component={Disclaimer}/>
    <Route exact path="/terms" component={Terms}/>
    <Route exact path="/riskcaution" component={RiskCaution}/>

    <Route exact path="/contactnew" component={ContactNew}/>

</HashRouter>,
document.getElementById("root"));