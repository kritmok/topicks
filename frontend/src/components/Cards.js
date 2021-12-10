import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
let data = require("./data/Discord_final_output.json");

function Cards() {
  
  console.log(data);
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
        <h2 className="click">Click for Details!</h2>
          <ul className="cards__items">
          
            <CardItem
              src={data[0].nft_pic}
              text={data[0].project_name}
              path="/project-0"
            />
            <CardItem
              src={data[1].nft_pic}
              text={data[1].project_name}
              path="/project-1"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src={data[2].nft_pic}
              text={data[2].project_name}
              path="/project-2"
            />
          <CardItem
              src={data[3].nft_pic}
              text={data[3].project_name}
              path="/project-3"
            />
          <CardItem
              src={data[4].nft_pic}
              text={data[4].project_name}
              path="/project-4"
            />
      
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
