import React from "react";
import "./Profile.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Top-Bar/Topbar";
import Second_col from "../../components/Profile/Second_col";
import Third_col from "../../components/Profile/Third_col";
import Last_col1 from "../../components/Profile/Last_col1";
import Last_col2 from "../../components/Profile/Last_col2";
import Navmenu from "../../components/Profile/Navmenu";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-background"></div>
      <div className="sidebar-col">
        <Sidebar />
      </div>
      <div className="profile-col">
        <div className="topbar">
          <Topbar page="Pages" title="/ Profile" subtitle="Profile" />
        </div>
        <div className="navmanu">
          <Navmenu/>
          <div className="userName"></div>
        </div>
        <div className="top-dives">
          <div className="first-col">
            <div className="top-class">
              <h2>Welcome Back!</h2>
              <p>Nice to see you, Mark Johnson!</p>
            </div>
            <div className="bottom-class">
              <p>Turn on your car</p>
            </div>
          </div>
          <div className="second-col">
            <div className="content">
              <h4>Car Informations</h4>
              <p>Hello, Mark Johnson! Your Car is ready.</p>
            </div>
            <div className="progress-div">
              <div className="left-side1">
                <div className="lofi">
                <Second_col />
                </div>
                <div className="content">
                  <h4>0h 58min</h4>
                  <p>Time to full charge</p>
                </div>
              </div>
           

            <div className="right-side1">
              <div className="top-2">
                <div className="fst-col">
                  <div className="s400">
                    <p>Battery Health</p>
                    <h6>76%</h6>
                  </div>
                </div>
                <div className="scd-col">
                <div className="s400">
                    <p>Efficiency</p>
                    <h6>+20%</h6>
                  </div>
                </div>
              </div>
              <div className="bottom-2">
                <div className="botom-l">
                <div className="s400">
                    <p>Consumption</p>
                    <h6>163W/km</h6>
                  </div>
                </div>
                <div className="botom-r">
                <div className="s400">
                    <p>This Week</p>
                    <h6>1.342Km</h6>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="third-col">
            <Third_col/>
          </div>
        </div>
        <div className="last-col">
          <div className="last-col1">
            <Last_col1 />
          </div>
          <div className="last-col2">
            <Last_col2 />
          </div>
        </div>
      </div>
    </div>
  );
}
