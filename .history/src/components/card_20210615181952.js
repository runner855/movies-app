import React from "react";
import "../styles/card.css";
import data from "../data/data.json";

const Card = () => {
  return (
    <>
      <div className="stock-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.Title + " , " + data.Year + " ,"}
              <img src={data.Poster} alt="poster-img"></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
