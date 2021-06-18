import React from "react";
import data from "../data/data.json";

const Card = ({ Title, Year, Poster }) => {
  return (
    <div className="CardWrapper">
      <div className="ColImg">
        <img className="Img" src={data.Poster} alt={title} />
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
