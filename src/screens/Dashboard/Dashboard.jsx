import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Top-Bar/Topbar";
import search from "../../../src/assets/Media/Icons/search.png";
import sin1 from "../../../src/assets/Media/Icons/sin1.png";
import setting from "../../../src/assets/Media/Icons/setting.png";
import bell from "../../../src/assets/Media/Icons/bell.png";
import glob from "../../../src/assets/Media/Icons/glob.png";
import wallet from "../../../src/assets/Media/Icons/wallet.png";
import cart from "../../../src/assets/Media/Icons/cart.png";
import text from "../../../src/assets/Media/Icons/text.png";
import smile from "../../../src/assets/Media/Icons/smile.png";
import Chart from "../../components/Chart/Chart";
import BarGraph from "../../components/BarGraph/BarGraph";
import Projects from "../../components/Projects/Projects";
import Orders from "../../components/Orders/Orders";
import Footer from "../../components/Footer/Footer";


export default function Dashboard() {
  const navigate = useNavigate();
  const [progress1, setProgress1] = useState(70); // Blue Progress
  const [progress2, setProgress2] = useState(7.8); // Green Progress

  const circleSize = 150;
  const strokeWidth = 12;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset1 = circumference - (progress1 / 100) * circumference;
  const offset2 = circumference - (progress2 / 10) * circumference;

  return (
    <div className="dashboard" style={{ position: "relative" }}>
      <div className="dashboard-background"></div>
      <div className="dbcolumn">
        <div className="sidebarbox">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <div className="top">
      <Topbar page="Pages" title="/ Dashboard"  subtitle="Dashboard"/>
          </div>

          <div className="top2">
            <div className="topMenu">
              <div className="content-div">
                <p>Today's Money</p>
                <div className="h-div">
                  <h6>$53,000</h6>
                  <p>+55%</p>
                </div>
              </div>
              <div className="icon-div">
                <img src={wallet} alt="Profile Icon" />
              </div>
            </div>
            <div className="topMenu">
              <div className="content-div">
                <p>Today's Users</p>
                <div className="h-div">
                  <h6>2,300</h6>
                  <p>+5%</p>
                </div>
              </div>
              <div className="icon-div">
                <img src={glob} alt="Profile Icon" />
              </div>
            </div>
            <div className="topMenu">
              <div className="content-div">
                <p>New Clients</p>
                <div className="h-div">
                  <h6>+3,052</h6>
                  <p>-14%</p>
                </div>
              </div>
              <div className="icon-div">
                <img src={text} alt="Profile Icon" />
              </div>
            </div>
            <div className="topMenu">
              <div className="content-div">
                <p>Total Sales</p>
                <div className="h-div">
                  <h6>$173,000</h6>
                  <p>+8%</p>
                </div>
              </div>
              <div className="icon-div">
                <img src={cart} alt="Profile Icon" />
              </div>
            </div>
          </div>

          <div className="top3">
            <div className="first-box">
              <div className="top3-content">
                <span>Welcome back,</span>
                <h2>Mark Johnson</h2>
                <p>
                  Glad to see you again! <br /> Ask me anything.
                </p>
              </div>
            </div>

            {/* First Progress Bar (Blue) */}
            <div className="second-box">
              <div className="top-left-label">Progress</div>
              <svg width={circleSize} height={circleSize}>
                <defs>
                  <linearGradient
                    id="gradientProgressBlue"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="23.84%" stopColor="#0075FF" stopOpacity="1" />
                    <stop
                      offset="81.07%"
                      stopColor="rgba(0, 117, 255, 0)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  fill="none"
                  strokeWidth={strokeWidth}
                />

                <circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  fill="none"
                  stroke="url(#gradientProgressBlue)"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset1}
                  strokeLinecap="round"
                  transform="rotate(-270, 75, 75)"
                  style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
              </svg>
              <div className="blue-progress-icon">
                <div className="icon-circle">
                  <img src={smile} alt="icon" />
                </div>
              </div>
              <div className="progress-rectangle">
                <p>{progress1}%</p>
              </div>
            </div>

            {/* Second Progress Bar (Green) */}
            <div className="third-box">
              <div className="third-box1">
                <p>Rafferal Tracking</p>
                <div className="third-div1">
                  <p>Invited</p>
                  <h4>145 People</h4>
                </div>
                <div className="third-div2">
                  <p>Bonus</p>
                  <h4>1,465</h4>
                </div>
              </div>
              <div className="third-box2">
                <div className="green-progress">
                  <svg width={circleSize} height={circleSize}>
                    <defs>
                      <linearGradient
                        id="gradientProgressGreen"
                        x1="0%"
                        y1="45%"
                        x2="70%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#05CD99" />
                        <stop offset="90%" stopColor="rgba(5, 205, 153, 0)" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={circleSize / 2}
                      cy={circleSize / 2}
                      r={radius}
                      fill="none"
                      strokeWidth={strokeWidth}
                    />
                    <circle
                      cx={circleSize / 2}
                      cy={circleSize / 2}
                      r={radius}
                      fill="none"
                      stroke="url(#gradientProgressGreen)"
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={offset2}
                      strokeLinecap="round"
                      transform="rotate(-270, 75, 75)"
                      style={{ transition: "stroke-dashoffset 0.5s ease" }}
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dy=".3em"
                      fontSize="50"
                      fill="#ffff"
                      fontWeight="bold"
                    >
                      {progress2}
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mid-box">
            <div className="mid-box1">
              <Chart />
            </div>
            <div className="mid-box2">
              <BarGraph />
            </div>
          </div>
          <div className="last-box">
            <div className="last-box1">
            <Projects/>
            </div>
            <div className="last-box2">
              <Orders/>
            </div>
          </div>
          <div className="footer">
          <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}
