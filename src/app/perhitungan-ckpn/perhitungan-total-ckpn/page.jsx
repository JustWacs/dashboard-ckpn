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
  const dataSource = [
    {
      key: "1",
      kodeKantor: "0010",
      kategoriCKPN: "Kolektif",
      penurunanNilai: 0,
    },
    {
      key: "2",
      kodeKantor: "0010",
      kategoriCKPN: "Individual",
      penurunanNilai: 0,
    },
    {
      key: "3",
      kodeKantor: "0020",
      kategoriCKPN: "Kolektif",
      penurunanNilai: 0,
    },
    {
      key: "4",
      kodeKantor: "0020",
      kategoriCKPN: "Individual",
      penurunanNilai: 0,
    },
  ];

  // Table columns
  const columns = [
    {
      title: "Kode Kantor",
      dataIndex: "kodeKantor",
      key: "kodeKantor",
      width: 150,
      align: "center",
    },
    {
      title: "Kategori CKPN",
      dataIndex: "kategoriCKPN",
      key: "kategoriCKPN",
      width: 200,
      align: "center",
    },
    {
      title: "Penurunan Nilai",
      dataIndex: "penurunanNilai",
      key: "penurunanNilai",
      align: "right",
      width: 150,
      render: (value) => value.toLocaleString("id-ID", { minimumFractionDigits: 2 }),
    },
    {
      title: "Aksi",
      key: "aksi",
      width: 100,
      align: "center",
      render: () => <a className="text-orange" href="#">Detail</a>,
    },
  ];

  // Add total row dynamically
  const totalRow = {
    key: "total",
    kodeKantor: "Total",
    kategoriCKPN: "",
    penurunanNilai: dataSource.reduce((sum, record) => sum + record.penurunanNilai, 0),
    aksi: "",
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showEditModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    // Add your logic to handle the OK action
    console.log("Edited data:", selectedRecord);
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };
  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Perhitungan CKPN" />
        <div className="m-5 h-auto bg-white">
          <HeaderContent title="Perhitungan CKPN | Perhitungan Total CKPN" />
          <div className="py-10 px-5">
            <div className="flex gap-2 items-center">
              <h2>Periode</h2>
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <DatePicker className="w-64" />
              </ConfigProvider>
              <CustomButton href="" type="primary" text="Proses" size="small" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
          <hr className="mx-4" />
          <div className="flex gap-5 items-center py-10 px-5 w-full">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <div>
                <h2>Kode Kantor</h2>
                <Input size="large" placeholder="Kode Kantor" />
              </div>
              <div>
                <h2>Kategori CKPN</h2>
                <Input size="large" placeholder="Kategori CKPN" />
              </div>
            </ConfigProvider>
            <div>
              <br />
              <CustomButton href="#" type="primary" text="Cari" />
            </div>
          </div>
          <div className="flex flex-col gap-4 p-7">
            <div className="overflow-auto mx-auto w-full max-w-screen-lg">
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <Table dataSource={[...dataSource, totalRow]} columns={columns} pagination={false} bordered />
              </ConfigProvider>
            </div>
            <div className="mt-5 flex flex-col gap-4 justify-start">
              <div className="flex justify-evenly">
                <span>PPKA:</span>
                <span>Rp</span>
              </div>
              <div className="flex justify-evenly">
                <span>CKPN:</span>
                <span>
                  <u>Rp</u>
                </span>
              </div>
              <div className="flex justify-evenly">
                <span>Selisih:</span>
                <span>
                  <u>Rp -/-</u>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
