import React from "react";
import data from "../data/data.json";

const Card = () => {
  return (
    <>
      <div className="Container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
              <img src={data.Poster}></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
