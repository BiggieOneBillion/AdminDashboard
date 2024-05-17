// react-icons
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersLight } from "react-icons/pi";
import { BiDevices } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { ImInsertTemplate } from "react-icons/im";

export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard size={19} />,
  },
  {
    id: "clients",
    label: "Clients",
    path: "/clients",
    icon: <PiUsersLight size={19} />,
  },
  {
    id: "devices",
    label: "Devices",
    path: "/devices",
    icon: <BiDevices size={19} />,
  },
  {
    id: "templates",
    label: "Templates",
    path: "/templates",
    icon: <ImInsertTemplate size={19} />,
  },
  {
    id: "payments",
    label: "Payments",
    path: "/payments",
    icon: <AiOutlineDollarCircle size={19} />,
  },
  {
    id: "invoices",
    label: "Invoices",
    path: "/invoices",
    icon: <LiaFileInvoiceDollarSolid size={19} />,
  },
];
