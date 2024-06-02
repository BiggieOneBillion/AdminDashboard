import { v4 } from "uuid";

const Board = ({boardData, data}) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-0 bg-[#FDF6DE] border-4 border-white rounded-2xl">
      {/* {boardData.map((datum, i) => ( */}
        <div key={v4()} className=" flex  justify-between items-center py-4">
          <div className={`w-24y h-18 flex flex-col pl-3  justify-center text-[#181619]`}>
            <span className="font-bold text-[32px]">{data.clientCount}</span>
            <p className="text-sm uppercase">{boardData[0].title}</p>
          </div>
          <div className="w-24 h-18 flex items-center  justify-end">
            {boardData[0].icon}
          </div>
        </div>
        <div key={v4()} className=" flex  justify-between items-center py-4">
          <div className={`w-24y h-18 flex flex-col pl-3 border-l border-[#181619] justify-center text-[#181619]`}>
            <span className="font-bold text-[32px]">{data.deviceCount}</span>
            <p className="text-sm uppercase">{boardData[1].title}</p>
          </div>
          <div className="w-24 h-18 flex items-center  justify-end">
            {boardData[1].icon}
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};

export default Board