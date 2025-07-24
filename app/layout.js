// import localFont from "next/font/local";
import "./globals.css";
import "animate.css";
import { Suspense } from "react";
import Navbar from "@/includes/Navbar";
import Footer from "@/includes/Footer";

import { BiLogoWhatsapp } from "react-icons/bi";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Rich System Solution",
  description: " Digital Marketing Company",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={` antialiased relative  `}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />

          <div className="pulse-container fixed bottom-5 right-5 z-40 ">
            <a
              href="https://wa.me/919595902006?text=Hi"
              target="_blank"
              className="btn-whatsapp-pulse btn-whatsapp-pulse-border"
            >
              <BiLogoWhatsapp className=" fixed z-50" />
            </a>
          </div>
          {children}

          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
