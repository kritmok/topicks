import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from "recharts";

const Test = () => {
    const data = [
        {name: "FaceBook", value: 100},
        {name: "Instagram", value: 200},
        {name: "Twitter", value: 500},
        {name: "Telegram", value: 600}
    ];
    return(
        <div className="test">
            <h1>Social Media users</h1>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default Test;

