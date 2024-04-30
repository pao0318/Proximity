import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { useState } from "react";
import SignupBuyer from "./components/buyer/SignupBuyer";
import { Notfound } from "./components/Notfound";
import HomePage from "./components/HomePage/HomePage.js";
import Login from "./components/Login/Login";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import Payment from "./components/Payment/Payment";
import SquareWebPaymentsQuickstart from "./components/squareIndex";
import PaymentForm from "./components/MakePayments/PaymentForm";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, otp="") => {
    setAlert({
      msg: message,
      type: type,
      otp: otp,
    });
    setTimeout(() => {
      // setAlert(null);
    }, 5000);
  };
  return (
    <>
      <Router>
        {/* <Navbar showAlert={showAlert} /> */}
        <Navbar />
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signupbuyer" element={<SignupBuyer showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<DashboardPage />} />
            <Route exact path="/payment" element={<Payment />} />
            {/* <Route path="*" element={<Notfound />} /> */}
            <Route path ="/square" element = {<SquareWebPaymentsQuickstart/>}/>
            <Route path ="/payment-card" element = {<PaymentForm/>}/>
          </Routes>
        </div>
        <footer className="footer py-2 text-muted">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 mb-lg-0 mb-4">
                <div className="text-center text-sm">
                  Made with <span role="img" aria-label="">❤️</span> by
                  <b> Team Proxies</b>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
