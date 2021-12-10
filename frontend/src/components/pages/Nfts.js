import React from "react";
import DiscordTable from "../DiscordTable";
import Cards from "../Cards" ;
import "./Nfts.css"

export default function nfts() {
  return (
    <div className="nfts">
    <div>
    <h2 className="ranking">High Potential Projects</h2>
     <DiscordTable />
     <Cards />
    </div>
    </div>
    
  );
}
