"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider, DatePicker, Input, Select, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";
import Popup from "@/Components/utilities/PopupButton";

const dataSource = [
  {
    key: "1",
    "Periode CKPN": "2024-06-30",
    "CKPN Kolektif":
      "PD: Klasifikasi Pinjaman:  2 - Jenis Produk Metode Perhitungan PD:  2 - Migration Rentang Waktu PD (Bulan): 12 Interval Rata-Rata PD:  2 - Triwulanan 103 Rekening Pinjama 2 Rekening Hapus Buku 1  Realisasi Eksekusi Agunan LGD Metode Perhitungan LGD: 2 - Collateral Shortfall Rentang Waktu LGD (Tahun): 5",
    "CKPN Individual": "Batasan Nominal Baki Debet (One Obligor) Mulai CKPN Individual: Rp 1.000.000.000,00 Kolektibilitas Mulai CKPN Individual: 5 - Macet 1 Rekening Pinjaman 3010000001 - Abdul Samat",
    "Hasil Perhitungan CKPN":
      "CKPN Kolektif: Rp. PD: 301: 0,00% 0,00% 0,00% 0,00% 0,00% 302: 0,00% 0,00% 0,00% 0,00% 0,00% 303: 0,00% 0,00% 0,00% 0,00% 0,00% 304: 0,00% 0,00% 0,00% 0,00% 0,00% 305: 0,00% 0,00% 0,00% 0,00% 0,00% LGD: 0,00% Total Baki Debet: Rp CKPN Individual: Rp Total CKPN: Rp",
    PPKA: "Rp",
    Status: "Belum Disetujui",
  },
];

const columns = [
  {
    title: "Periode CKPN",
    dataIndex: "Periode CKPN",
    key: "Periode CKPN",
  },
  {
    title: "CKPN Kolektif",
    dataIndex: "CKPN Kolektif",
    key: "CKPN Kolektif",
  },
  {
    title: "CKPN Individual",
    dataIndex: "CKPN Individual",
    key: "CKPN Individual",
  },
  {
    title: "Hasil Perhitungan CKPN",
    dataIndex: "Hasil Perhitungan CKPN",
    key: "Hasil Perhitungan CKPN",
  },
  {
    title: "PPKA",
    dataIndex: "PPKA",
    key: "PPKA",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
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
        <HeaderPage title="Laporan CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Laporan CKPN" />
          <div className="flex justify-end p-5">
          </div>
          <div className="px-5 pb-5">
            <h2>Laporan CKPN</h2>
            <div className="flex gap-2">
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <Select
                  className="w-80"
                  placeholder="Pilih Laporan CKPN"
                  options={[
                    { value: "1", label: "Laporan Kertas Kerja Perhitungan CKPN" },
                    { value: "2", label: "Laporan Ringkasan Perhitungan CKPN" },
                  ]}
                />
                <DatePicker className="w-36"/>
              </ConfigProvider>
              <CustomButton href="" type="primary" text="Cari" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
