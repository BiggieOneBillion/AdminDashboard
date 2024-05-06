"use client";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const thisYear = [
  { name: "JAN", Total: 10 },
  { name: "FEB", Total: 20 },
  { name: "MAR", Total: 30 },
  { name: "APR", Total: 40 },
  { name: "MAY", Total: 80 },
  { name: "JUN", Total: 90 },
  { name: "JUL", Total: 100 },
  { name: "AUG", Total: 40 },
  { name: "SEP", Total: 60 },
  { name: "OCT", Total: 100 },
  { name: "NOV", Total: 80 },
  { name: "DEC", Total: 60 },
];

const lastYear = [
  { name: "JAN", Total: 20 },
  { name: "FEB", Total: 20 },
  { name: "MAR", Total: 20 },
  { name: "APR", Total: 50 },
  { name: "MAY", Total: 50 },
  { name: "JUN", Total: 100 },
  { name: "JUL", Total: 100 },
  { name: "AUG", Total: 60 },
  { name: "SEP", Total: 50 },
  { name: "OCT", Total: 40 },
  { name: "NOV", Total: 40 },
  { name: "DEC", Total: 40 },
];

const Chart = () => {
  const [data, setData] = useState(thisYear);
  return (
    <div className="chart">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl font-bold">Sales Overview</h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setData(thisYear)}
            className={
              data === thisYear
                ? "rounded-full p-2 border border-[#2020C2] bg-[#2020C2] text-white"
                : "rounded-full p-2 border-2 border-[#2020C2]"
            }
          >
            This Year
          </button>
          <button
            onClick={() => setData(lastYear)}
            className={
              data === lastYear
                ? "rounded-full p-2 border border-[#2020C2] bg-[#2020C2] text-white"
                : "rounded-full p-2 border-2 border-[#2020C2]"
            }
          >
            Last Year
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 60, right: 30, left: 10, bottom: 10 }}
          padding={{ top: 40, right: 40 }}
        >
          <defs>
            <linearGradient
              id="colorUv"
              x1="340.891"
              y1="0.860352"
              x2="340.891"
              y2="221.002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2020C2" />
              <stop offset="0.333333" stopColor="#2020C2" stopOpacity="0.72" />
              <stop offset="0.65625" stopColor="#2020C2" stopOpacity="0.38" />
              <stop offset="1" stopColor="#2020C2" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="#D9D9D9"
            tickLine={false}
            tickMargin={20}
            tick={{
              stroke: "#181619",
              strokeLinecap: 1,
              strokeWidth: 1,
              fontSize: 10,
            }}
          />
          <YAxis
            stroke="#D9D9D9"
            tickMargin={40}
            tick={{
              stroke: "black",
              strokeWidth: 1,
              fontSize: 10,
            }}
            tickLine={false}
          />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#2020C2"
            width={400}
            fillOpacity={8}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#2020C2"
            fillOpacity={8}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
