import React from "react";
import "./Home.css";

import sample from "../../util/pexels-cottonbro-studio-6328202-4096x2160-25fps.mp4";

const Home = () => {
  return (
    <div className="home-container">
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Placedisc</h1>
        <p>
          Welcome to PlaceDisc, the ultimate platform for creating and exploring
          new places around the world. With PlaceDisc, you can unleash your
          wanderlust and discover hidden gems, breathtaking landscapes, and
          vibrant cities like never before.
        </p>
      </div>
    </div>
  );
};

export default Home;
