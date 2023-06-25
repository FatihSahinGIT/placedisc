import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

import sample from "../../util/pexels-cottonbro-studio-6328202-4096x2160-25fps.mp4";

const Home = () => {
  return (
    <div className="home-container">
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <div className="content_container">
        <div className="content_content">
          <h1 className="primary-heading">
            Your place to <i>find</i>, <i>create</i> and <i>explore</i> new
            places.
          </h1>
          <button className="secondary-button">
            {" "}
            <Link to="/users">
              find places
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
