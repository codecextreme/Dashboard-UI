// Billing.jsx (refactored for responsiveness)
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

export default function Billing() {
  const navigate = useNavigate();

  return (
    <div className="billing">
      {/* Sidebar stays fixed on the left */}
      <div className="sidebar-column">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="main-column">
        {/* Top bar */}
        <div className="top-bar">
          <Topbar page="Pages" title="/ Billing" subtitle="Billing" />
        </div>

        {/* Top section: left + right */}
        <div className="top-box">
          {/* Left column */}
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

          {/* Right column */}
          <div className="topBox-right">
            <Right_Box />
          </div>
        </div>

        {/* Bottom section */}
        <div className="bottom-boxA">
          <div className="bottom-1">
            <Bottom_1 />
          </div>
          <div className="bottom-2">
            <Bottom_2 />
          </div>
        </div>
      </div>
    </div>
  );
}
