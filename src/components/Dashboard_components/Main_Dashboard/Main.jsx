"use client";
import React from "react";
import Board from "./Board";
import ChartContainer from "./ChartContainer";
import Chart from "./charts";
import RecentPayment from "./RecentPayment";
import { boardData1, boardData2 } from "./BoardData";
import TableSection from "./TableSection";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { analyticsStore } from "@/store/clients";

const Main = () => {
  const token_id = userStore((state) => state.token_id);

  const updateAnalyticsData = analyticsStore(
    (state) => state.updateAnalyticsData
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard_info"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/dashboard",
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

  // update the client analytics in the analytics store
  data &&
    updateAnalyticsData({
      clientCount: data?.entity.clientCount,
      allDeviceCount: data?.entity.allDeviceCount,
      activeDeviceCount: data?.entity.activeDeviceCount,
    });
  // data && // console.log(data.entity);

  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-bold">Dashboard</h1>
      <Board
        boardData={boardData1}
        first={data?.entity.clientCount}
        second={data?.entity.allDeviceCount}
        third={data?.entity.activeDeviceCount}
      />
      {/* sales overview and recent payments */}
      <div className="w-full  gap-6 flex">
        {/* Sales Overview */}
        <ChartContainer>
          <Chart />
        </ChartContainer>
        {/* Recent Payment */}
        <RecentPayment info={data?.entity.recentPayments} />
      </div>
      <Board
        boardData={boardData2}
        first={data?.entity.paidInvoiceCount}
        second={data?.entity.unpaidInvoiceCount}
        third={data?.entity.sumOfCompletedTransactions}
      />
      <TableSection />
    </main>
  );
};

export default Main;

// {clientCount: 100, allDeviceCount: 2000, activeDeviceCount: 1293, paidInvoiceCount: 0, unpaidInvoiceCount: 0, …}

// activeDeviceCount
// :
// 1293
// allDeviceCount
// :
// 2000
// clientCount
// :
// 100
// paidInvoiceCount
// :
// 0
// recentPayments
// :
// []
// sumOfCompletedTransactions
// :
// 0
// unpaidInvoiceCount
// :
// 0
