import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/NavBar"
import Footer from "@/component/Footer"
import YellowBar from "@/component/YellowBar"
import ProviderApp from "@/redux/ProviderApp";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copy-GTO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ProviderApp>
            <YellowBar/>
            <NavBar/>

            {children}
            
            <Footer/>
          </ProviderApp>

      </body>
    </html>
  );
}
