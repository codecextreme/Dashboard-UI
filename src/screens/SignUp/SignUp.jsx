import React from "react";
import "./SignUp.css";
import background from "../../../src/assets/Media/Images/background.png";
import Navbar from "../../components/Navbar/Navbar";
import facebook from "../../../src/assets/Media/Icons/facebook.png";
import apple from "../../../src/assets/Media/Icons/apple.png";
import google from "../../../src/assets/Media/Icons/google.png";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="signup">
      <Navbar />
      <div className="signup-container">
        <div className="left-side">
          <img src={background} alt="background" className="img" />
          <div className="text-overlay">
            <p>INSPIRED BY THE FUTURE:</p>
            <h2>THE VISION UI DASHBOARD</h2>
          </div>
        </div>
        <div className="right-side">
          <div className="content1">
            <h2>Welcome!</h2>
            <p>Use these awesome forms to login or create new </p>
            <span> account in your project for free.</span>
          </div>
          <div className="signup-box">
            <h2>Register With</h2>
            <div className="icon3">
              <div className="icon-div">
                <img src={facebook} alt="" />
              </div>
              <div className="icon-div">
                <img src={apple} alt="" />
              </div>
              <div className="icon-div">
                <img src={google} alt="" />
              </div>
            </div>
            <h2 style={{ color: "rgba(160, 174, 192, 1)" }}>Or</h2>
            <p>Name</p>
            <input type="text" placeholder="Your Full Name" />
            <p>Email</p>
            <input type="email" placeholder="Your Email Address" />
            <p>Password</p>
            <input type="password" placeholder="Your Password" />
            <div className="switch">
              <Switch />
              <p>Remember me?</p>
            </div>
            <button>SIGN UP</button>
            <div className="lastp">
              <p>Already have an account?</p>
              <span onClick={() => navigate("/")}>Sign in</span>
            </div>
          </div>
          <p className="para">
            @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
          </p>
          <div className="end">
            <p>Marketplace</p>
            <p>Blog</p>
            <p>License</p>
          </div>
        </div>
      </div>
    </div>
  );
}
