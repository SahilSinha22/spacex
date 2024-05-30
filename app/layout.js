import { Inter, Playfair_Display, Outfit, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

const Playfair_Display_init=Playfair_Display({
  subsets: ['latin'],
  weight: '500' ,
  variable: '--font-playfair_display',
});
const outfit_init=Outfit({
  subsets: ['latin'],
  weight: '500' ,
  variable: '--font-outfit',
});
const open_sans_init=Open_Sans({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-open_sans',
});
export const metadata = {
  title: "Space To Tech",
  description: "Space To Tech",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={`${inter.className} ${open_sans_init.variable} ${Playfair_Display_init.variable} ${outfit_init.variable}`}>
      <Script  src='../public/vendor.js'/>

        <Navbar/>
        {children}</body>
<Footer/>
    </html>
  );
}
