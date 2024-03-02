import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Mulish, Roboto } from "next/font/google";
import "./global.css";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "nextJsMovie",
  description: "This is my next js first project",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en" className={mulish.className}>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Rootlayout;
