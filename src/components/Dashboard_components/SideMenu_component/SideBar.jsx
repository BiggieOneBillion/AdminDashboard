"use client";

import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersLight } from "react-icons/pi";
import { BiDevices } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { ImInsertTemplate } from "react-icons/im";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
import Navigation from "./Navigation";
import Header from "./Header";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "clients",
    label: "Clients",
    path: "/clients",
    icon: <PiUsersLight size={25} />,
  },
  {
    id: "devices",
    label: "Devices",
    path: "/devices",
    icon: <BiDevices size={25} />,
  },
  {
    id: "templates",
    label: "Templates",
    path: "/templates",
    icon: <ImInsertTemplate size={25} />,
  },
  {
    id: "payments",
    label: "Payments",
    path: "/payments",
    icon: <AiOutlineDollarCircle size={25} />,
  },
  {
    id: "invoices",
    label: "Invoices",
    path: "/invoices",
    icon: <LiaFileInvoiceDollarSolid size={25} />,
  },
];

const Sidebar = () => {
  // const pathName = usePathname();
  // const router = useRouter();

  // const handlenavigate = (getMenuItem) => {
  //   router.push(getMenuItem.path);
  // };

  return (
    <aside>
       <Header />
       <Navigation />
    </aside>
  );
};

export default Sidebar;
