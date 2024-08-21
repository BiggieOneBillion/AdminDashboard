// import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ReactQueryProvider } from "./ReactQueryProvider";
import ResponsiveWarning from "@/components/responsiveness/Responsiveness";

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
            <ResponsiveWarning>{children}</ResponsiveWarning>
          </ReactQueryProvider>
        </Theme>
      </body>
    </html>
  );
}
