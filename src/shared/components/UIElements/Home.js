import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source
          src={require("../../util/pexels-cottonbro-studio-6328202-4096x2160-25fps.mp4")}
          type="video/mp4"
        />
      </video>
      <header>
        <div className="section__container header__container">
          <div className="header__image">
            <img src={img1} alt="header" />
            <img src={img2} alt="header" />
          </div>
          <div className="header__content">
            <div>
              <h1>
                Unleash your <strong>wanderlust</strong>
              </h1>
              <p className="section__subtitle">
                With our interacting platform, explore hidden treasures, promote
                your favorite places, and set off on extraordinary excursions.
              </p>
              <div className="action__btns">
                <Link to="/users" className="btn">
                  Start your adventure
                </Link>
                <Link to="/auth" className="btn">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
