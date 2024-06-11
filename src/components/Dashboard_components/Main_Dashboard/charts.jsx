"use client";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// "January": 0,
//     "February": 0,
//     "March": 0,
//     "April": 1,
//     "May": 1,
//     "June": 0,
//     "July": 0,
//     "August": 0,
//     "September": 0,
//     "October": 0,
//     "November": 0,
//     "December": 0

// const thisYear = [
//   { name: "JAN", Total: 10 },
//   { name: "FEB", Total: 20 },
//   { name: "MAR", Total: 30 },
//   { name: "APR", Total: 40 },
//   { name: "MAY", Total: 80 },
//   { name: "JUN", Total: 90 },
//   { name: "JUL", Total: 100 },
//   { name: "AUG", Total: 40 },
//   { name: "SEP", Total: 60 },
//   { name: "OCT", Total: 100 },
//   { name: "NOV", Total: 80 },
//   { name: "DEC", Total: 60 },
// ];

// const lastYear = [
//   { name: "JAN", Total: 20 },
//   { name: "FEB", Total: 20 },
//   { name: "MAR", Total: 20 },
//   { name: "APR", Total: 50 },
//   { name: "MAY", Total: 50 },
//   { name: "JUN", Total: 100 },
//   { name: "JUL", Total: 100 },
//   { name: "AUG", Total: 60 },
//   { name: "SEP", Total: 50 },
//   { name: "OCT", Total: 40 },
//   { name: "NOV", Total: 40 },
//   { name: "DEC", Total: 40 },
// ];

const Chart = () => {
  const [data, setData] = useState([]);
  const token_id = userStore((state) => state.token_id);
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["chart_info"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/sales-overview?year=current",
        {
          headers: {
            Authorization: `Bearer ${token_id}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 flex justify-center items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
      </div>
    );
  }

  if (!chartData || Object.keys(chartData?.entity).length == 0) {
    return (
      <div>
        <p className="font-bold text-3xl text-[rgba(0,0,0,0.1)]">No Data</p>
      </div>
    );
  }

  const thisYear = [
    { name: "JAN", Total: chartData.entity.January },
    { name: "FEB", Total: chartData.entity.February },
    { name: "MAR", Total: chartData.entity.March },
    { name: "APR", Total: chartData.entity.April },
    { name: "MAY", Total: chartData.entity.May },
    { name: "JUN", Total: chartData.entity.June },
    { name: "JUL", Total: chartData.entity.July },
    { name: "AUG", Total: chartData.entity.August },
    { name: "SEP", Total: chartData.entity.September },
    { name: "OCT", Total: chartData.entity.October },
    { name: "NOV", Total: chartData.entity.November },
    { name: "DEC", Total: chartData.entity.December },
  ];

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
          {/* <button
            onClick={() => setData(lastYear)}
            className={
              data === lastYear
                ? "rounded-full p-2 border border-[#2020C2] bg-[#2020C2] text-white"
                : "rounded-full p-2 border-2 border-[#2020C2]"
            }
          >
            Last Year
          </button> */}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          width={730}
          height={250}
          data={thisYear}
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
