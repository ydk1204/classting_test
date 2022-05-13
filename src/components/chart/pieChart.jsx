import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const ScorePieChart = ({ answer, wrong }) => {
  const data = [
    { name: "정답", value: answer },
    { name: "오답", value: wrong },
  ];
  const COLORS = ["#1976d2", "#ff1744"];
  return (
    <div style={{ width: 400, height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={80}
            outerRadius={150}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScorePieChart;
