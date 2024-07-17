import { Inter, Playfair_Display, Outfit, Open_Sans, Bebas_Neue, Montserrat, Domine} from "next/font/google";
import "./globals.css";

import Footer from "@/app/component/Footer";

import Navbar from "@/app/component/Navbar"

const inter = Inter({ subsets: ["latin"] });

const Playfair_Display_init=Playfair_Display({
  subsets: ['latin'],
  weight: '500' ,
  variable: '--font-playfair_display',
});
const Bebas_Neue_init=Bebas_Neue({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-Bebas_Neue',
});
const Domine_init=Domine({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-Domine',
});
const Montserrat_init=Montserrat({
  subsets: ['latin'],
  weight: '300' ,
  variable: '--font-Montserrat',
});
const Playfair_Display_inits=Playfair_Display({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-playfair_displays',
});
const outfit_init=Outfit({
  subsets: ['latin'],
  weight: '500' ,
  variable: '--font-outfit',
});
const outfit_inits=Outfit({
  subsets: ['latin'],
  weight: '400' ,
  variable: '--font-outfits',
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

export default function RootLayout({   children }) {

  
  return (
    <html lang="en">
      
      <body className={`${inter.className} ${open_sans_init.variable} ${Playfair_Display_init.variable} ${Playfair_Display_inits.variable} ${outfit_init.variable} ${outfit_inits.variable} ${Bebas_Neue_init.variable} ${Montserrat_init.variable} ${Domine_init.variable}`}>
      

       <Navbar/>
              {children}
       
        
        <Footer/>
</body>

    </html>
  );
}
