import React, { useEffect } from "react";
import Animatedbg from "../../components/Animatedbg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import "./style.css";

// Login component for CODEPEAK website made by aritroCoder

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navigation />
      <Animatedbg />

      <div className="containerLogin">
        <h1>Log In</h1>
        <div className="box">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email"
          />
        </div>
        <div className="box">
          <i className="fas fa-key"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <Link to="/login/profile/profile_participant">
          {" "}
          <button className="btnlog">Log In student</button>
        </Link>
        <Link to="/login/profile/profile_mentor">
          {" "}
          <button className="btnlog">Log In mentor</button>
        </Link>
      </div>
      <div className="mt"></div>
      <div className="lowerpage">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
