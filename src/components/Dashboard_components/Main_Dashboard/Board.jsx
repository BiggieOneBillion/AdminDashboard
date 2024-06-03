"use client";
import { v4 } from "uuid";

const Board = ({ boardData, first, second, third }) => {
  const data = [first, second, third];
  // // console.log(data);
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-0 bg-[#F8F8FF] border-4 border-white rounded-2xl">
      {boardData.map((datum, i) => (
        <div key={v4()} className=" flex  justify-between items-center py-4">
          <div
            className={`w-24y h-18 flex flex-col pl-3 ${
              i !== 0 && "border-l border-[#181619]"
            } justify-center text-[#181619]`}
          >
            <span className="font-bold text-[32px]">{data[i]}</span>
            <p className="text-sm uppercase">{datum.title}</p>
          </div>
          <div className="w-24 h-18 flex items-center  justify-end">
            {datum.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
