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
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "clients",
    label: "Clients",
    path: "/dashboard/clients",
    icon: <PiUsersLight size={25} />,
  },
  {
    id: "devices",
    label: "Devices",
    path: "/dashboard/devices",
    icon: <BiDevices size={25} />,
  },
  {
    id: "templates",
    label: "Templates",
    path: "/dashboard/templates",
    icon: <ImInsertTemplate size={25} />,
  },
  {
    id: "payments",
    label: "Payments",
    path: "/dashboard/payments",
    icon: <AiOutlineDollarCircle size={25} />,
  },
  {
    id: "invoices",
    label: "Invoices",
    path: "/dashboard/invoices",
    icon: <LiaFileInvoiceDollarSolid size={25} />,
  },
];
