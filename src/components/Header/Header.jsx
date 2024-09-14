import React from "react";
import "../Header/Header.css"
const Header = () => {
  return (
    <div className="header">
      <h1>Anonime</h1>
      <p>Home</p>
      <p>List Online</p>

      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          aria-describedby="passwordHelpInline"
          placeholder="Search anime or movie"
        />
      </div>
    </div>
  );
};

export default Header;
