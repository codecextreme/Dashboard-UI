import React from "react";
import "./Index.css";
import background from "../../../src/assets/Media/Images/background.png";
import Navbar from "../../components/Navbar/Navbar";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="signinj">
      <Navbar />
      
      <div className="signin-containerj">
        <div className="left-sidej">
          <img src={background} alt="background" className="imgj" />
          <div className="text-overlayj">
            <p>INSPIRED BY THE FUTURE:</p>
            <h2>THE VISION UI DASHBOARD</h2>
          </div>
        </div>
        <div className="right-sidej">
          <div className="content1j">
            <h2>Nice to see you!</h2>
            <p>Enter your email and password to sign in </p>
          </div>
          <div className="signin-boxj">
            <p>Email</p>
            <input type="email" placeholder="Your Email Address" />
            <p>Password</p>
            <input type="password" placeholder="Your Password" />
            <div className="switch">
              <Switch defaultChecked />
              <p>Remember me?</p>
            </div>
            <button>SIGN IN</button>
            <div className="lastpj">
              <p>Don't have an account? </p>
              <span onClick={() => navigate("/signup")}>Sign up</span>
            </div>
          </div>
          <p className="paraj">
            @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
          </p>
          <div className="endj">
            <p>Marketplace</p>
            <p>Blog</p>
            <p>License</p>
          </div>
        </div>
      </div>
    </div>
  );
}
