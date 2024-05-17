import { Inter } from "next/font/google";
import "../globals.css";
import MainSection from "@/components/Dashboard_components/MainSection";
import SideMenu from "@/components/Dashboard_components/SideMenu_component/SideMenu";
import DesktopView from "@/components/DesktopView";
import Layout from "@/components/Dashboard_components/Layout";
import { ReactQueryProvider } from "../ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export default function DashBoardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {/* <DesktopView> */}
          <Layout>{children}</Layout>
          {/* </DesktopView> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
