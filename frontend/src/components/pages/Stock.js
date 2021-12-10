import React, { useState } from "react";
import FutuTable from "../FutuTable";
import StockBarChart from "../StockBarChart";
import StockPieChart from "../StockPieChart";
import "./Stock.css" ;


function Stock() {

  return (
    <div className="stock">
           <h2 className="ranking">Stock Ranking</h2>
      <div className="table-container">
        <FutuTable />
      </div>
      <div className="">
        <h2 className="analysis">Anaylsis - Top 5 Stocks</h2>
      </div>
      <div className="graphs">
        <StockPieChart />
        <StockBarChart />
      </div>

          







      {/* <div className="details">
      <div className="graphs">
      <div className="numofposts">
      
      </div>
      <div className="attitude">
        <StockBarChart />
      </div>
        
      </div>
      </div> */}
    </div>
  );
}

export default Stock;
