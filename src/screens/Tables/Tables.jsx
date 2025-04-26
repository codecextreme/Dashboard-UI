import React from "react";
import "./Tables.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Container1 from "../../components/Tables/Container1";
import Container2 from "../../components/Tables/Container2";
import Footer from "../../components/Footer/Footer";
import search from "../../../src/assets/Media/Icons/search.png";
import sin1 from "../../../src/assets/Media/Icons/sin1.png";
import setting from "../../../src/assets/Media/Icons/setting.png";
import bell from "../../../src/assets/Media/Icons/bell.png";

export default function Tables() {
  return (
    <div className="tables">
      <div className="sidebar-column">
        <Sidebar />
      </div>

      <div className="main-column">
        <div className="top-bar">
          <div className="left">
            <div className="p-span">
              <p>Pages</p> <span> / Tables</span>
            </div>
            <h4>Tables</h4>
          </div>
          <div className="right">
            <div className="search-container">
              <input type="search" placeholder="Search..." />
              <span className="search-icon">
                <img src={search} alt="" />
              </span>
            </div>
            <div className="sign-in-text">
              <img src={sin1} alt="" />
              <p>Sign in</p>
            </div>
            <img src={setting} alt="" />
            <img src={bell} alt="" />
          </div>
        </div>
        <div className="container1">
          <Container1/>

        </div>
        <div className="container2">
          <Container2/>
        </div>
        <div className="footer-div">
        <Footer/>
        </div>

      </div>
    </div>
  );
}
