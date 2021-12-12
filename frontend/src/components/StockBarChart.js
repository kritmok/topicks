import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./StockBarChart.css"
let data = require("./data/Futu_final_output.json");

const Bardata = []

for(var i = 0 ; i < 5 ; i ++){
  var newObj = {
    name: data[i].name.slice(0,9),
    posts: data[i].posts_sum,
    engagement_100x: Math.floor((data[i].total_engagement_rate*100))
  }
  Bardata.push(newObj);
};


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <div className="stockbar">
      <h3>Popularity</h3>
         <BarChart
          width={500}
          height={400}
          data={Bardata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="posts" fill="#8884d8" />
          <Bar dataKey="engagement_100x" fill="#82ca9d" />
        </BarChart>
      </div>
       
    );
  }
}
