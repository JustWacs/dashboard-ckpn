"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider, Input, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import CustomButton from "@/Components/utilities/CustomButton";
import Popup from "@/Components/utilities/PopupButton";

const items = [
  {
    key: "1",
    label: "1st item",
  },
  {
    key: "2",
    label: "2nd item",
  },
  {
    key: "3",
    label: "3rd item",
  },
];

const dataSource = [
  {
    key: "1",
    "Jenis Produk CBS": "301 - Kredit Modal Kerja",
    "Mapping Kelompok Klasifikasi Jenis Produk CKPN": "301 - Kredit Modal Kerja",
    "Keterangan": "Kredit Modal Kerja",
  },
  {
    key: "2",
    "Jenis Produk CBS": "302 - Kredit Investasi",
    "Mapping Kelompok Klasifikasi Jenis Produk CKPN": "302 - Kredit Investasi",
    "Keterangan": "Kredit Investasi",
  },
];

const columns = [
  {
    title: "Jenis Produk CBS",
    dataIndex: "Jenis Produk CBS",
    key: "Jenis Produk CBS",
  },
  {
    title: "Mapping Kelompok Klasifikasi Jenis Produk CKPN",
    dataIndex: "Mapping Kelompok Klasifikasi Jenis Produk CKPN",
    key: "Mapping Kelompok Klasifikasi Jenis Produk CKPN",
  },
  {
    title: "Keterangan",
    dataIndex: "Keterangan",
    key: "Keterangan",
  },
  {
    title: "Aksi",
    key: "Aksi",
    render: () => (
      <div className="flex gap-2">
        <EditOutlined style={{ color: "blue", cursor: "pointer" }} />
        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(record.key)} />
      </div>
    ),
  },
];
const Page = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Daftar CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Daftar CKPN" />
          <div className="flex justify-end p-5">
            <Popup/>
          </div>
          <div className="px-5 pb-5">
            <h2>Pencarian</h2>
            <div className="flex gap-2">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <Input className="w-24" type="text" placeholder="Cari . . ." />
            </ConfigProvider>
            <CustomButton href="" type="primary" text="Cari" />
            <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
          <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
            <Table className="text-sm" dataSource={dataSource} columns={columns} />
          </ConfigProvider>
        </div>
      </div>
    </>
  );
};

export default Page;