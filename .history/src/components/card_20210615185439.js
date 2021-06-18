import React from "react";
import data from "../data/data.json";

const Card = () => {
  return (
    <>
      <div className="Container">
        {data.map((data, key) => {
          return <div key={key}></div>;
        })}
      </div>
    </>
  );
};

export default Card;
