import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Sora} from "next/font/google"
import { Responsive } from "@tsparticles/engine";
import ResponsiveNav from "@/Navbar/ResponsiveNav";
import  About from "@/About/About";
import Services from "@/Services/Services";
import Projects from "@/Projects/Projects";
import Skills from "@/Skills/Skills";
import Contact from "@/Contact/Contact";
import Footer from "@/Footer/Footer"



const sora = Sora({
  weight:['100','200','300','400','500','600','700','800'],
  subsets: ['latin'],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "Portfolio with nextjs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveNav/>
        
        {children}
        <About/>
        <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      </body>
    </html>
  );
}
