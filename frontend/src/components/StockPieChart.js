import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import "./StockPieChart.css"
let data = require("./data/Futu_final_output.json");


const Piedata = []

var color = "" ;

for(var i = 0 ; i < 5 ; i ++){

  if(i % 2 === 0){
    color = "#8884d8"
  }
  else {
    color = "#82ca9d"
  }

  var newObj = {
    name: data[i].name,
    value: data[i].market_attitude,
    fill: color
  }


  Piedata.push(newObj);
};


export default class StockPieChart extends PureComponent {

  render() {
    return (
      <div className="stockpie">
        <h3>Market Attitude Score</h3>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={Piedata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#22577E"
            label ={(entry) => entry.name.slice(0,10)}
          />
          <Tooltip />
        </PieChart>
      </div>
        
        
    );
  }
}
