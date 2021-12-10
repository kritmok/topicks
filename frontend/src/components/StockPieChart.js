import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import "./StockPieChart.css"
let data = require("./data/Futu_final_output.json");


const Piedata = []

for(var i = 0 ; i < 5 ; i ++){
  var newObj = {
    name: data[i].name,
    value: data[i].market_attitude
  }
  Piedata.push(newObj);
};

const data01 = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];


export default class StockPieChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

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
            label
          />
          <Tooltip />
        </PieChart>
      </div>
        
        
    );
  }
}
