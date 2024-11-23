import localFont from "next/font/local";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Menu } from "antd";
import Navbar from "@/Components/Navbar/Navbar";

export const metadata = {
  title: "CKPN Digital",
  description: "CKPN Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="arial antialiased">
        <div className="flex">
          <Navbar />
          <AntdRegistry>{children}</AntdRegistry>
        </div>
      </body>
    </html>
  );
}
