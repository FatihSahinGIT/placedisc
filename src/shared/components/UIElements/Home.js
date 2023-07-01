import React from "react";
import "./Home.css";

import transition from "../../../transition";

import ExploreImage from "./undraw_explore_re_8l4v.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content-wrapper">
      <img src={ExploreImage} alt="Explore Placedisc "></img>
      <div className="content-container">
        <h2 className="content-header">
          <span>Explore</span>
          <span>your</span>
          <span>
            <i>wanderlust</i>
          </span>
        </h2>
        <div className="btn_group">
          <Link to="/users">
            <button id="btn">find places</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default transition(Home);
