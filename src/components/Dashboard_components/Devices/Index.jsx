import React from "react";
import TableSection from "./TableSection";
import { clientBoardData } from "./data";
import NewDeviceModal from "./NewDeviceModal";
import Board from "./Board";

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
      <Board boardData={clientBoardData} />
      <TableSection />
    </main>
  );
};

export default Index;
