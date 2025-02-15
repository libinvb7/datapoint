import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import { NavbarDemo } from "@/components/common/NavbarDemo";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Balance Scorecard",
  description: "Generated by create next app",
};
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden bg-industry-home ${openSans.className}`}
      >
        <NavbarDemo />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
