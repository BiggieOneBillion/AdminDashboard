import { analyticsStore } from "@/store/clients";
import { BiDevices } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { PiUsersLight } from "react-icons/pi";
import { v4 } from "uuid";

const Board = () => {
  const analyticsData = analyticsStore((state) => state.analyticsData);

  const boardData = [
    {
      title: "clients",
      number: analyticsData.clientCount,
      icon: <PiUsersLight size={35} className="mr-4" />,
    },
    {
      title: "devices",
      number: analyticsData.allDeviceCount,
      icon: <BiDevices size={35} className="mr-4" />,
    },
    {
      title: "Active Devices",
      number: analyticsData.activeDeviceCount,
      icon: <BsCheckLg size={35} className="mr-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-0 bg-[#FDF6DE] border-4 border-white rounded-2xl">
      {boardData.map((datum, i) => (
        <div key={v4()} className=" flex  justify-between items-center py-4">
          <div
            className={`w-24y h-18 flex flex-col pl-3 ${
              i !== 0 && "border-l border-[#181619]"
            } justify-center text-[#181619]`}
          >
            <span className="font-bold text-[32px]">{datum.number}</span>
            <p className="text-sm uppercase">{datum.title}</p>
          </div>
          <div className="w-24 h-18 flex items-center justify-end">
            {datum.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
