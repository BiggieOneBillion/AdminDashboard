import { AiOutlineCheck } from "react-icons/ai";
import { BiDevices } from "react-icons/bi";
import { PiUsersLight } from "react-icons/pi";
import { GrCurrency } from "react-icons/gr";
import { PiMoney } from "react-icons/pi";

export const boardData1 = [
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
      title: "Active devices",
      number: 110,
      icon: <AiOutlineCheck size={35} className="mr-4" />,
    },
  ];

  export const boardData2 = [
    {
      title: "paid invoice",
      number: 100,
      icon: <PiMoney  size={35} className="mr-4" />,
    },
    {
      title: "unpaid invoice",
      number: 120,
      icon: <PiMoney  size={35} className="mr-4" />,
    },
    {
      title: "total payment",
      number: 110,
      icon: <PiMoney  size={35} className="mr-4" />,
    },
  ];