import React from "react";
import data from "../data/data.json";

const Card = () => {
  return (
    <>
      <div className="Container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.Title +
                " , " +
                data.Year +
                " ," +
                <img src={data.Poster}></img> +
                ", " +
                data.Images}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
