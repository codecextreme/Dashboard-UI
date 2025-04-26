import React from 'react'
import './Sidebar.css'
import dashboard from "../../../src/assets/Media/Icons/db.png";
import chart from "../../../src/assets/Media/Icons/chart.png";
import billing from "../../../src/assets/Media/Icons/billing.png";
import rtl from "../../../src/assets/Media/Icons/rtl.png";
import profile from "../../../src/assets/Media/Icons/profile.png";
import signin from "../../../src/assets/Media/Icons/sgnin.png";
import signup from "../../../src/assets/Media/Icons/sharp.png";
import { useNavigate } from "react-router-dom";




export default function Sidebar() {
   const navigate = useNavigate();

  return (
    <div className='sidebar'>
      <div className="logo1">
      <h4>VISSION UI FREE</h4>
      <hr class="line" />
      </div>
      <div className="menu">
        <ul>
        <li className="icons" onClick={() => navigate("/dashboard")}>
          <div className="icon-box">
  <img src={dashboard} alt="Profile Icon"/>
</div>
<span>Dashboard</span>
  </li>

  <li className="icons" onClick={() => navigate("/tables")}>
          <div className="icon-box">
  <img src={chart} alt="Profile Icon"/>
</div>
<span onClick={() => navigate("/tables")}>Tables</span>
  </li>

  <li className="icons" onClick={() => navigate("/billing")}>
          <div className="icon-box">
  <img src={billing} alt="Profile Icon"/>
</div>
<span >Billing</span>
  </li>

  <li className="icons" onClick={() => navigate("/rtl")}>
          <div className="icon-box">
  <img src={rtl} alt="Profile Icon"/>
</div>
<span >RTL</span>
  </li>
         <div className="ap">
          <p>Account Pages</p>
          </div>
          <li className="icons" onClick={() => navigate("/profile")}>
          <div className="icon-box">
  <img src={profile} alt="Profile Icon"/>
</div>
<span >Profile</span>
  </li>

  <li className="icons" onClick={() => navigate("/")}>
          <div className="icon-box">
  <img src={signin} alt="Profile Icon"/>
</div>
<span >Sign In</span>
  </li>

  <li className="icons" onClick={() => navigate("/signup")}>
          <div className="icon-box">
  <img src={signup} alt="Profile Icon"/>
</div>
<span >Sign Up</span>
  </li>
        </ul>
      </div>
      <div className="bottom-box">
        <div className="icon">
           </div>
           <div className="content">
           <h6>Need help?</h6>
           <p>Please check our docs</p>
           <div className="btn">
            <button>DOCUMENTATION</button>
           </div>
           </div>

      </div>
    </div>
  )
}
