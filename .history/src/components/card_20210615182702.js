import React from "react";
import "../styles/card.css";
import data from "../data/data.json";

const Card = () => {
  return (
    <>
      
        {data.map((data, key) => {
          return (
            <div key={key}>
            <div className="CardWrapper">
            <div className="ColImg">
            <img src={data.Poster} alt="poster-img"></img>
            </div>
            <div className="ColDetail">
              <div className="Header">
                <div className="MovieTitle">{data.Title}</div>
              </div>
              <div className="Description">{data.Director}</div>
            </div>
            </div>
            </div>

            
            );
            
        }
        
              
              
          
     

export default Card;
