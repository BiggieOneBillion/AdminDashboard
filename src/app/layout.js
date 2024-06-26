// import { Inter } from "next/font/google";
// import "./globals.css";
// import '../globals.css'
import './globals.css'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
// import DesktopView from "@/components/DesktopView";
import { ReactQueryProvider } from "./ReactQueryProvider";
import Layout from "@/components/Dashboard_components/Layout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prestige Dashboard",
  description: "Prestige",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <ReactQueryProvider>
            {/* <DesktopView> */}
            <Layout>{children}</Layout>
            {/* </DesktopView> */}
          </ReactQueryProvider>
        </Theme>
      </body>
    </html>
  );
}
