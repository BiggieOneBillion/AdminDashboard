import { v4 } from "uuid";

const Board = ({boardData, analytics}) => {

//   {
//     "clientCount": 101,
//     "deviceCount": 101,
//     "activeDeviceCount": 101
// }

const analyticsData = [analytics.clientCount, analytics.deviceCount]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-0 bg-[#FDF6DE] border-4 border-white rounded-2xl">
      {boardData.map((datum, i) => (
        <div key={v4()} className=" flex  justify-between items-center py-4">
          <div className={`w-24y h-18 flex flex-col pl-3 ${i !== 0 && "border-l border-black-2"} justify-center text-[#181619]`}>
            <span className="font-bold text-[32px]">{analyticsData[i]}</span>
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

export default Board