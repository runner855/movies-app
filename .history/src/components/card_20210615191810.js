import React from "react";
import data from "../data/data.json";

const Card = ({ Poster, Title, Year }) => {
  return (
    <div className="CardWrapper">
      <div className="ColImg">
        <img className="Img" src={Poster} alt={Title} />
      </div>
      <div className="ColDetail">
        <div className="Header">
          <div className="BookTitle">{Title}</div>
        </div>
        <div className="Description">{Year}</div>
      </div>
    </div>
  );
};

export default Card;
