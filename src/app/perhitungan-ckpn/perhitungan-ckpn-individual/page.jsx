"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider, DatePicker, Flex, Input, Modal, Select, Space, Table } from "antd";
import CustomButton from "@/Components/utilities/CustomButton";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";

const Page = () => {
  // Table data
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
          <Link className="text-orange" href="/perhitungan-ckpn/perhitungan-ckpn-individual/detail">Perhitungan CKPN Individual</Link>
        </div>
      ),
      fixed: "right",
      width: 100, // Reduced width
    },
  ];

  // Total row calculation
  const totalRow = {
    key: "total",
    kodeKantor: "Total",
    jenisProduk: "",
    kualitas: "",
    bakiDebet: dataSource.reduce((sum, record) => sum + record.bakiDebet, 0),
    probabilityDefault: "",
    lossGivenDefault: "",
    penurunanNilai: dataSource.reduce((sum, record) => sum + record.penurunanNilai, 0),
    aksi: "",
  };

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Perhitungan CKPN" />
        <div className="m-5 h-auto bg-white pb-5">
          <HeaderContent title="Perhitungan CKPN | Perhitungan CKPN Individual" />
          <div className="py-10 px-5">
            <div className="flex gap-2 items-center">
              <h2>Periode</h2>
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <DatePicker className="w-64" size="large" />
              </ConfigProvider>
              <CustomButton href="" type="default" text="Cari" size="normal" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
          <div className="flex gap-4 p-5 border mx-4 justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <h1 className="text-xs">Batasan Nominal Baki Debet (One Obligor) Mulai : </h1>
                <h1 className="text-xs">Kolektibilitas Mulai : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs text-orange">Rp 1.000.000.000,00</h1>
                <h1 className="text-xs text-orange">5 - Macet</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <h1 className="text-xs">Periode : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs text-orange">2024-06-30</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center p-5 w-full">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <div>
                <h2>Kode Kantor</h2>
                <Input size="large" placeholder="Kode Kantor" />
              </div>
              <div>
                <h2>Jenis Produk</h2>
                <Input size="large" placeholder="Jenis Produk" />
              </div>
              <div>
                <h2>Kualitas</h2>
                <Input size="large" placeholder="Kualitas" />
              </div>
            </ConfigProvider>
            <div>
              <br />
              <CustomButton href="#" type="primary" text="CARI" />
            </div>
          </div>
          <div className="pt-10 overflow-auto mx-auto w-full max-w-screen-lg">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <Table
                columns={columns}
                dataSource={dataSource}
                scroll={{
                  x: "max-content", // Allow table content to scroll horizontally
                }}
                pagination={false}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
