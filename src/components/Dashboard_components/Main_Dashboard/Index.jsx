import React from "react";
import Board from "./Board";
import ChartContainer from "./ChartContainer";
import Chart from "./charts";
import RecentPayment from "./RecentPayment";
import { boardData1, boardData2 } from "./BoardData";
import TableSection from "./TableSection";

const Index = () => {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-bold">Dashboard</h1>
      <Board boardData={boardData1} />
      {/* sales overview and recent payments */}
      <div className="w-full  gap-6 flex">
        {/* Sales Overview */}
        <ChartContainer>
          <Chart />
        </ChartContainer>
        {/* Recent Payment */}
        <RecentPayment />
      </div>
      <Board boardData={boardData2} />
      <TableSection />
    </main>
  );
};

export default Index;
