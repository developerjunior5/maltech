import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMain from "./components/HeaderMain";
import Home from "./components/Home";
import ProductsPage from "./components/products/page";
import Combobox from "./components/Combobox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maltec",
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
        <HeaderMain/>
        <Home/>
        <ProductsPage/>
        
        {children}
        </body>
    </html>
  );
}
