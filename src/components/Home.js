import React from "react";
import './Home.css';
import HomeMenu from "./HomeMenu";
import Inputfields from "./Inputfields";

const Home = () => {
  return (
    <div className="main-page">
      <div className="homeMenu"> <HomeMenu /></div>
      <div className="inputfields"> <Inputfields /></div>
    </div>
  );
}

export default Home;
