"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import { ConfigProvider, DatePicker, Menu} from "antd";
import { DeleteOutlined, EditOutlined} from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";
import { useState } from "react";
const items = [
    {
      label: 'Navigation One',
      key: 'mail',
    },
    {
      label: 'Navigation Two',
      key: 'mail',
    },
];

const Page = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        setCurrent(e.key);
      };
  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Perhitungan CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Perhitungan CKPN" />
          <div className="flex justify-between p-5">
            <div className="flex items-center justify-center gap-4">
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <h2>Periode : </h2>
                <DatePicker className="w-44" />
              </ConfigProvider>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h2>Integrasi Data Dari CBS : </h2>
              <CustomButton href="" type="primary" text="Proses" />
            </div>
          </div>
          <div className="px-5 pb-5">
            <Menu mode="horizontal" onClick={onClick} selectedKeys={[current]} items={items} />
            <div className="flex gap-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
