import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OrderChart = ({ filterType = "weekly", weekly, daily }) => {
  const data = filterType === "daily" ? daily : weekly;
  const xAxisKey = filterType === "daily" ? "hour" : "day";

  return (
    <div
      className="p-5 flex justify-center items-center"
      style={{ width: "100%" }}
    >
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          width={"100%"}
          height={320}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderChart;
