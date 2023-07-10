import React, { useEffect } from "react";
import "./Home.css";

import { gsap } from "gsap";

import Img from "./IMG_6974.jpg";

import transition from "../../../transition";

import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    gsap.from(".item h1", 2, {
      y: 50,
      opacity: 0,
      ease: "power4.inOut",
      delay: 1.5,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(".play-wrapper, .pattern, .copy", 2, {
      scaleY: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.3,
      },
      delay: 2.5,
    });

    gsap.from(".hr", 2, {
      width: "0%",
      ease: "power4.inOut",
      delay: 3,
    });

    gsap.from(".btns", 2, {
      x: 50,
      opacity: 0,
      ease: "power4.inOut",
      delay: 3,
    });

    gsap.from(".play-btn", 2, {
      scale: 0,
      ease: "power4.inOut",
      delay: 3,
    });
    gsap.from(".hero-wrapper", 2, {
      width: "100%",
      ease: "power4.inOut",
      delay: 3,
    });
    gsap.from(".arrow", 2, {
      scale: 0,
      ease: "power4.inOut",
      delay: 3,
    });
    gsap.from(".marquee", 2, {
      bottom: "-10rem",
      ease: "power4.inOut",
      delay: 4,
    });
  }, []);

  return (
    <div className="content-wrapper">
      <div className="header">
        <div className="header-left col">
          <div className="item">
            <h1>Explore your</h1>
            <h1>
              <i>wanderlust</i>
            </h1>
          </div>
        </div>
        <div className="header-right col">
          <div className="play-wrapper">
            <div className="play-btn">
              <Link to="/users">find places</Link>
            </div>
          </div>
          <div className="copy">
            <p>
              Discover and share your favorite places with ease using our online
              application designed to explore and connect people through
              locations.
            </p>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <div className="btns col">
          <div className="btn">
            <span>Portfolio Application</span>
          </div>
          <div className="btn">
            <span>Fatih Sahin</span>
          </div>
        </div>
        <div className="divider col">
          <div className="hr"></div>
        </div>
      </div>
      <div className="hero">
        <img src={Img} alt="" />
        <div className="hero-wrapper"></div>
        <div className="arrow">
          <Link to="/auth">get started</Link>
        </div>
      </div>
      <div className="marquee">
        <span>
          Explore and Share - Discover and Connect - Find and Share - Explore
          Together - Discover New Places - Share Your Adventures - Uncover
          Hidden Gems - Share Local Finds - Inspired by CodeGrid
        </span>
      </div>
    </div>
  );
};

export default transition(Home);
