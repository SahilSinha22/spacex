import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space To Tech",
  description: "Space To Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
<Footer/>
    </html>
  );
}
