import { Inter } from "next/font/google";
import "../globals.css";
import MainSection from "@/components/Dashboard_components/MainSection";
import SideMenu from "@/components/Dashboard_components/SideMenu_component/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export default function DashBoardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen grid grid-cols-[250px_1fr] bg-white">
          <SideMenu />
          <MainSection>
            <main className="flex-1 p-10 overflow-y-scroll">{children}</main>
          </MainSection>
        </div>
      </body>
    </html>
  );
}