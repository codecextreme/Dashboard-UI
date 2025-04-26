import React from "react";
import "./Navbar.css";
import dashboard from "../../../src/assets/Media/Icons/dashB.png";
import profile from "../../../src/assets/Media/Icons/profile.png";
import signup from "../../../src/assets/Media/Icons/signup.png";
import signin from "../../../src/assets/Media/Icons/signin.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
        <p>VISION UI FREE</p>
      </div>
      <div className="navlinks">
        <ul>
          <div className="ListContainer" >
            <img src={dashboard} alt="" />
            <li onClick={() => navigate("/dashboard")}>DASHBOARD</li>
          </div>

          <div className="ListContainer" >
            <img src={profile} alt="" />
            <li onClick={() => navigate("/profile")}>Profile</li>
          </div>

          <div className="ListContainer">
            <img src={signup} alt="" />
            <li  onClick={() => navigate("/signup")}>SignUp</li>
          </div>

          <div className="ListContainer" >
            <img src={signin} alt="" />
            <li onClick={() => navigate("/")}>SignIn</li>
          </div>
        </ul>
      </div>
      <div className="btn">
        <button>FREE DOWNLOAD</button>
      </div>
    </div>
  );
}
