import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Cash",
    amount: 2400,
  },
  {
    name: "Card",
    amount: 210,
  },
  {
    name: "Wallet",
    amount: 2290,
  },
  {
    name: "Due",
    amount: 0,
  },
  {
    name: "Other",
    amount: 1810,
  },
  {
    name: "Online",
    amount: 500,
  },
  {
    name: "COD",
    amount: 1050,
  },
];

export default class BarCharts extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="amount" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
