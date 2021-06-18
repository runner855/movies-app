import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="img-logo">
          <img
            className="app-logo"
            src="http://filmstarfacts.com/wp-content/uploads/2017/04/635909140777574051-183397971_the-movies-logo-11.gif"
            alt="logo"
          ></img>
        </div>
        {/* <div className="title">
          <h1>IS IT MOVIE NIGHT?</h1>
        </div> */}
      </div>
    </>
  );
};

export default Header;
