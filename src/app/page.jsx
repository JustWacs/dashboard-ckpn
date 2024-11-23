import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import MenuItems from "../Components/Navbar/Navbar";
import HeaderPage from "@/Components/utilities/HeaderPage";
import HeaderContent from "@/Components/utilities/HeaderContent";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Dashboard" />
        <div className="m-5 h-screen bg-white shadow-lg">
        <HeaderContent title ="Dashboard"/>
        </div>
      </div>
    </>
  );
}
