import React from "react";
import "./HomeMenu.css";
import img1 from "../images/HoneyBite.png";
import twitter from "../images/Group 37.png";
import linkdin from "../images/Group 38.png";
import telegram from "../images/Group 39.png";
import facebook from "../images/Group 40.png";
import master from "../images/Group 41.png";
import etherium from "../images/etherium.png";
import profile from "../images/Vector.png";
import arrow from "../images/down-arrow.png"

const HomeMenu = () => {


  // let currentDate = new Date().toJSON().slice(0, 10);
  let date = new Date();
  let dateAndTime = date.toLocaleString();



  return (
    <div className="home-menu">
      <div className="honey-bite">
        <img src={img1} alt="Loading" className="logo" />
      </div>

      <div className="account-info">
        <div className="account">
          <div><img src={profile} className="profile-menu"/></div>
          <div className="text">0x8F0...DA117</div>
          <div><img src={etherium} className="profile-menu"/></div>
        </div>
        <div className="date">{dateAndTime}</div>
      </div>

      <div className="side-bar">
        <div className="dashboard">Dashboard</div>
        
          <div>
            <span className="menu">Resources</span>
            <img src={arrow} className="icon"/>
            </div>
            <div>
            <span className="menu">General</span>
            <img src={arrow} className="icon"/>
            </div>
          <ul type="none">
          <li className="menu2" id="apply">Apply to Launch</li>
          <li className="menu2">Privacy Policy</li>
          <li className="menu2">Terms of Use</li>
        </ul>
      </div>

      <div className="social-media">
        <span>
          <img src={twitter} alt="" />
        </span>
        <span>
          <img src={linkdin} alt="" />
        </span>
        <span>
          <img src={telegram} alt="" />
        </span>
        <span>
          <img src={facebook} alt="" />
        </span>
        <span>
          <img src={master} alt="" />
        </span>
      </div>

      <div className="copyright">
        <p>Copyright © 2022. All Rights Reserved by Honey-Bite</p>
      </div>
    </div>
  );
};

export default HomeMenu;
