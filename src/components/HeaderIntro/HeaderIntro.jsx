import React from "react";
import "../HeaderIntro/HeaderIntro.css";

const HeaderIntro = () => {
  return (
    <div className="header-intro">
      <h3>Explore</h3>
      <h5>What are you gonna watch today ?</h5>
      <div className="image">
        <div className="img-content"></div>
        <div className="row">
          <div className="col image-content">
            <h2>Weather with you</h2>
            <p>
              Corrupt politicians, frenzied nationalists, and other warmongering
              forces constantly jeopardize the thin veneer of peace between
              neighboring countries Ostania and Westalis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderIntro;
