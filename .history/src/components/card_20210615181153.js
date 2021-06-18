import React from "react";
import "../styles/card.css";
import data from "../data/data.json";

const Card = () => {
  return (
    <div className="CardWrapper">
      <div className="ColImg">
        <img className="Img" src={data.Poster} alt="poster-img" />
      </div>
      <div className="ColDetail">
        <div className="Header">
          <div className="BookTitle">{data.Title}</div>
        </div>
        <div className="Description">{data.Year}</div>
      </div>
    </div>
  );
};

export default Card;
