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
      No: "1",
      "Posisi Tanggal": "2024-06-30",
      Kategori: "Kolektif",
      "Kode Kantor": "0010 KC Sudirman",
      "Nomor Rekening": "3010000001",
      "Nama Nasabah": "Anita No CIF: 1000000123",
      Klasifikasi: "Kredit Modal Kerja Modal Kerja Peternakan",
      "Tanggal Pinjaman": "Tgl Cair:  2023-12-01 Tgl JT: 2024-12-01 Jk Wkt (Bln): 12 Tgl Macet:",
      "Suku Bunga": "Efektif 24%",
      "Plafon / Baki Debet": "Plafon: Rp 600.000.000,00 Baki Debet: Rp 300.000.000,00 CKPN: Rp ",
      "Nominal Provisi": "Rp 0,00",
      "Biaya Transaksi": "Rp 0",
      "Hari Tunggakan": "P: 0 hari B: 0 hari Kualitas: 1",
      "Nominal Tunggakan": "P: Rp 0 B: Rp 0",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "No",
      key: "No",
      fixed: "left",
      width: 100, // Reduced width
    },
    {
      title: "Posisi Tanggal",
      dataIndex: "Posisi Tanggal",
      key: "Posisi Tanggal",
      fixed: "left",
      width: 120, // Reduced width
    },
    {
      title: "Kategori",
      dataIndex: "Kategori",
      key: "Kategori",
      width: 100, // Reduced width
    },
    {
      title: "Kode Kantor",
      dataIndex: "Kode Kantor",
      key: "Kode Kantor",
      width: 120, // Reduced width
    },
    {
      title: "Nomor Rekening",
      dataIndex: "Nomor Rekening",
      key: "Nomor Rekening",
      width: 150, // Reduced width
    },
    {
      title: "Nama Nasabah",
      dataIndex: "Nama Nasabah",
      key: "Nama Nasabah",
      width: 200, // Reduced width
    },
    {
      title: "Klasifikasi",
      dataIndex: "Klasifikasi",
      key: "Klasifikasi",
      width: 200, // Reduced width
    },
    {
      title: "Tanggal Pinjaman",
      dataIndex: "Tanggal Pinjaman",
      key: "Tanggal Pinjaman",
      width: 200, // Reduced width
    },
    {
      title: "Suku Bunga",
      dataIndex: "Suku Bunga",
      key: "Suku Bunga",
      width: 100, // Reduced width
    },
    {
      title: "Plafon / Baki Debet",
      dataIndex: "Plafon / Baki Debet",
      key: "Plafon / Baki Debet",
      width: 200, // Reduced width
    },
    {
      title: "Nominal Provisi",
      dataIndex: "Nominal Provisi",
      key: "Nominal Provisi",
      width: 100, // Reduced width
    },
    {
      title: "Biaya Transaksi",
      dataIndex: "Biaya Transaksi",
      key: "Biaya Transaksi",
      width: 100, // Reduced width
    },
    {
      title: "Hari Tunggakan",
      dataIndex: "Hari Tunggakan",
      key: "Hari Tunggakan",
      width: 120, // Reduced width
    },
    {
      title: "Nominal Tunggakan",
      dataIndex: "Nominal Tunggakan",
      key: "Nominal Tunggakan",
      width: 120, // Reduced width
    },
    {
      title: "Aksi",
      key: "Aksi",
      render: (_, record) => (
        <div className="flex gap-2">
          <EditOutlined style={{ color: "blue", cursor: "pointer" }} onClick={() => showEditModal(record)} />
          <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
        </div>
      ),
      fixed: "right",
      width: 100, // Reduced width
    },
  ];

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
        <HeaderPage title="Pengkategorian CKPN Pinjaman" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Pengkategorian CKPN Pinjaman" />
          <div className="py-10 px-5">
            <div className="flex gap-2 items-center">
              <h2>Periode</h2>
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <DatePicker className="w-64" />
              </ConfigProvider>
              <CustomButton href="" type="primary" text="Cari" size="small" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
          <div className="flex gap-5 items-center p-5 w-full">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
            <div>
              <h2>Kode Kantor</h2>
              <Input size="large" placeholder="Kode Kantor" />
            </div>
            <div>
              <h2>Kategori CKPN</h2>
              <Input size="large" placeholder="Kategori CKPN" />
            </div>
            <div>
              <h2>Nomor Rekening Pinjaman</h2>
              <Input size="large" placeholder="Nomor Rekening Pinjaman" />
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
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  scroll={{
                    x: "max-content",
                  }}
                  pagination={false}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
      <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
        <Modal title="Edit Data" open={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
          <Space direction="vertical" size="middle" className="w-full">
            <div className="flex">
              <h2 className="w-1/2">Kode Kantor</h2>
              <Input defaultValue={selectedRecord?.["Kode Kantor"]} />
            </div>
            <div className="flex">
              <h2 className="w-1/2">Nomor Rekening Pinjaman</h2>
              <Input defaultValue={selectedRecord?.["Nomor Rekening"]} />
            </div>
            <div className="flex">
              <h2 className="w-1/2">Nama Nasabah</h2>
              <Input defaultValue={selectedRecord?.["Nama Nasabah"]} />
            </div>
            <div className="flex">
              <h2 className="w-1/2">No CIF</h2>
              <Input defaultValue={selectedRecord?.["Nama Nasabah"]} />
            </div>
            <div className="flex">
              <h2 className="w-1/2">Kategori</h2>
              <Select className="w-1/2" defaultValue={selectedRecord?.["Kategori"]} />
            </div>
          </Space>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default Page;
