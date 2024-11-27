"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider, DatePicker, Flex, Input, Modal, Select, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";
import Popup from "@/Components/utilities/PopupButton";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

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
                <DatePicker className="w-64" />
              </ConfigProvider>
              <CustomButton href="" type="primary" text="Cari" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
          <div className="p-5 flex w-full mx-5">
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
