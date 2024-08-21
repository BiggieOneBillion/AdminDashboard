import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ReactQueryProvider } from "../ReactQueryProvider";
import Layout from "@/components/Dashboard_components/Layout";
import ResponsiveWarning from "@/components/responsiveness/Responsiveness";

export const metadata = {
  title: "Prestige Dashboard",
  description: "Prestige",
};

export default function RootLayout({ children }) {
  return (
    <section>
      <ReactQueryProvider>
        <Theme>
          <ResponsiveWarning>
            <Layout>{children}</Layout>
          </ResponsiveWarning>
        </Theme>
      </ReactQueryProvider>
    </section>
  );
}
