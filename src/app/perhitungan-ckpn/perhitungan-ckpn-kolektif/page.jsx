"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { ConfigProvider, DatePicker } from "antd";
import CustomButton from "@/Components/utilities/CustomButton";

const Page = () => {

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Perhitungan CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Perhitungan CKPN | Perhitungan CKPN Kolektif" />
          <div className="py-10 px-5">
            <div className="flex gap-2 items-center">
              <h2>Periode</h2>
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <DatePicker className="w-64" size="large"/>
              </ConfigProvider>
              <CustomButton href="" type="primary" text="Cari" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
          <div className="px-5 flex mx-5 pt-5 border-b">
            <MenuContent subTitle="Probability of Default (PD)" href="/perhitungan-ckpn/perhitungan-ckpn-kolektif/pd" />
            <MenuContent subTitle="Loss Given Default (LGD)" href="/perhitungan-ckpn/perhitungan-ckpn-kolektif/lgd" />
            <MenuContent subTitle="CKPN Kolektif" href="/perhitungan-ckpn/perhitungan-ckpn-kolektif/ckpn-kolektif" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
