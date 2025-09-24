import React from "react";
import "./Tables.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Top-Bar/Topbar";
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

      <div className="main-column8">
        <div className="top-bar">
      <Topbar page="Pages" title="/ Tables"  subtitle="Tables"/>
        </div>
        <div className="container8">
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
