import React from "react";
import TableSection from "./TableSection";
import { clientBoardData } from "./data";
import NewDeviceModal from "./NewDeviceModal";
import Board from "./Board";
import BoardContainer from "@/components/BoardContainer";

const Index = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Devices</h1>
        </div>
        {/* add new client */}
        {/* <NewDeviceModal /> */}
      </div>
      <BoardContainer>
        <Board boardData={clientBoardData} />
      </BoardContainer>
      <TableSection />
    </main>
  );
};

export default Index;
