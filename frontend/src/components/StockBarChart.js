import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

console.log(Bardata);

const data01 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
