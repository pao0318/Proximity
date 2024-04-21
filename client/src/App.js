import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/patient/Home";
import Alert from "./components/Alert";
import { Signup } from "./components/doctor/Signup";
import { useState } from "react";
import SignupHome from "./components/SignupHome";
import SignupBuyer from "./components/patient/SignupBuyer";
import { Notfound } from "./components/Notfound";

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
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/signuphome" element={<SignupHome showAlert={showAlert} />} />
            <Route exact path="/signupmerchant" element={<Signup showAlert={showAlert} />} />
            <Route exact path="/signupbuyer" element={<SignupBuyer showAlert={showAlert} />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        <footer className="footer py-2 text-muted">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 mb-lg-0 mb-4">
                <div className="text-center text-sm">
                  Made with ❤️ by
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
