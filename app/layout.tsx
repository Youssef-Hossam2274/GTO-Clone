import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/NavBar"
import Footer from "@/component/Footer"
import YellowBar from "@/component/YellowBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copy-GTO",
  description: "Generated by create next app",
  icons:"../images/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <YellowBar/>
        <NavBar/>

        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
