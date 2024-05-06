import { BiDevices } from "react-icons/bi";
import { PiUsersLight } from "react-icons/pi";
import { BsCheckLg } from "react-icons/bs";

export const clientBoardData = [
  {
    title: "clients",
    number: 100,
    icon: <PiUsersLight size={35} className="mr-4" />,
  },
  {
    title: "devices",
    number: 120,
    icon: <BiDevices size={35} className="mr-4" />,
  },
  {
    title: "Active Devices",
    number: 80,
    icon: <BsCheckLg size={35} className="mr-4" />,
  },
];
