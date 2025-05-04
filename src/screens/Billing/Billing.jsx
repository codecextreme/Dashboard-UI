import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Top-Bar/Topbar";
import TopBox_2 from "../../components/Billing/TopBox-2";
import TopBox_1 from "../../components/Billing/TopBox-1";
import Bottom_Box from "../../components/Billing/Bottom-Box";
import Right_Box from "../../components/Billing/Right-Box";
import Bottom_1 from "../../components/Billing/Bottom-1";
import Bottom_2 from "../../components/Billing/Bottom-2";
import "./Billing.css";
import search from "../../../src/assets/Media/Icons/search.png";
import sin1 from "../../../src/assets/Media/Icons/sin1.png";
import setting from "../../../src/assets/Media/Icons/setting.png";
import bell from "../../../src/assets/Media/Icons/bell.png";

export default function Billing() {
  const navigate = useNavigate();

  return (
    <div className="billing">
      <div className="sidebar-column">
        <Sidebar />
      </div>
      <div className="main-column">
        <div className="top-bar">
      <Topbar page="Pages" title="/ Billing"  subtitle="Billing"/>
     </div>
        <div className="top-box">
          <div className="topBox-left">
            <div className="top-upper1">
              <div className="topBox-1">
                <TopBox_1 />
              </div>
              <div className="topBox-2">
                <TopBox_2 />
              </div>
            </div>
            <div className="bottom-box1">
              <Bottom_Box />
            </div>
          </div>
          <div className="topBox-right">
            <Right_Box />
          </div>
        </div>
        <div className="bottom-boxA">
          <div className="bottom-1">
            <Bottom_1/>
          </div>
          <div className="bottom-2">
            <Bottom_2/>
          </div>

        </div>
      </div>
    </div>
  );
}
