import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer , Tooltip , Legend} from "recharts";

// Example data for the past 7 days
const data = [
  { day: "Day 1", dineIn: 200, online: 300, takeaway: 150, others: 50 },
  { day: "Day 2", dineIn: 180, online: 250, takeaway: 170, others: 60 },
  { day: "Day 3", dineIn: 210, online: 280, takeaway: 160, others: 70 },
  { day: "Day 4", dineIn: 220, online: 350, takeaway: 140, others: 80 },
  { day: "Day 5", dineIn: 230, online: 320, takeaway: 180, others: 90 },
  { day: "Day 6", dineIn: 250, online: 340, takeaway: 190, others: 100 },
  { day: "Day 7", dineIn: 240, online: 330, takeaway: 200, others: 110 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class OrderTypeChart extends PureComponent {
  render() {
    return (
      <div className="p-5">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart width={400} height={280}>
            {data.map((entry, index) => (
              <Pie
                key={`pie-${index}`}
                data={[
                  { name: "Dine-In", value: entry.dineIn },
                  { name: "Online", value: entry.online },
                  { name: "Takeaway", value: entry.takeaway },
                  { name: "Others", value: entry.others },
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={140}
                fill="#8884d8"
                dataKey="value"
              >
                {[
                  { name: "Dine-In", value: entry.dineIn },
                  { name: "Online", value: entry.online },
                  { name: "Takeaway", value: entry.takeaway },
                  { name: "Others", value: entry.others },
                ].map((subEntry, subIndex) => (
                  <Cell
                    key={`cell-${subIndex}`}
                    fill={COLORS[subIndex % COLORS.length]}
                  />
                ))}
              </Pie>
            ))}
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
