import React from "react";
import './Topbar.css'
import search from "../../../src/assets/Media/Icons/search.png";
import sin1 from "../../../src/assets/Media/Icons/sin1.png";
import setting from "../../../src/assets/Media/Icons/setting.png";
import bell from "../../../src/assets/Media/Icons/bell.png";

export default function Topbar(props) {
  console.log('props.......', props)
  return (
    <div className="topbar">
      <div className="top1">
        <div className="left">
          <div className="p-span">
            <p>{props.page}</p> <span>{props.title} </span>
          </div>
          <h4>{props.subtitle}</h4>
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
    </div>
  );
}
