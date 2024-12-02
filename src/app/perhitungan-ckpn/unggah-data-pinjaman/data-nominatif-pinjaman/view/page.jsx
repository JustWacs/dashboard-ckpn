"use client";
import { useSearchParams } from "next/navigation";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import { ConfigProvider, DatePicker, Table } from "antd";
import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import MenuContent from "@/Components/utilities/MenuContent";
import Link from "next/link";
import CustomButton from "@/Components/utilities/CustomButton";

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
          <EditOutlined style={{ color: "blue", cursor: "pointer" }} />
        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
      </div>
    ),
    fixed: "right",
    width: 100, // Reduced width
  },
];

const ViewPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const tanggal = searchParams.get("tanggal") || "";

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Unggah Data Pinjaman" />
        <div className="m-5 h-auto bg-white">
          <HeaderContent title="Unggah Data Pinjaman | Data Nominatif Pinjaman" />
          <div className="flex justify-between p-5">
            <div className="flex items-center justify-center gap-4">
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <h2>Periode : </h2>
                <DatePicker className="w-44" />
              </ConfigProvider>
            </div>
          </div>
          <div className="px-5 flex mx-5 pt-10 border-b">
            <MenuContent title="Unggah" subTitle="Data Nominatif Pinjaman" href="/perhitungan-ckpn/unggah-data-pinjaman/data-nominatif-pinjaman" />
            <MenuContent title="Unggah" subTitle="Data Hapus Buku Pinjaman" href="/perhitungan-ckpn/unggah-data-pinjaman/data-hapus-buku-pinjaman" />
            <MenuContent title="Unggah" subTitle="Data Realisasi Eksekusi Agunan" href="/perhitungan-ckpn/unggah-data-pinjaman/data-realisasi-eksekusi-agunan" />
          </div>
          <div className="flex flex-col gap-4 p-7">
            <div className="flex items-center gap-4">
              <h2 className="w-[15%]">Nama File : </h2>
              <h2 className="text-orange bg-slate-100 p-2 rounded border border-slate-200">{title}</h2>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="w-[15%]">Tanggal Unggah : </h2>
              <h2 className="text-orange bg-slate-100 p-2 rounded border border-slate-200">{tanggal}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-7">
            <div className="overflow-auto mx-auto w-full max-w-screen-lg">
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
          <div className="flex justify-end">
            <div className="flex flex-col gap-4 p-7 ">
              <div className="flex justify-between items-center gap-4">
                <h2>Jumlah Rekening Aktif : </h2>
                <h2 className="text-orange bg-slate-100 p-2 rounded border border-slate-200 w-56">3</h2>
              </div>
              <div className="flex justify-between items-center gap-4">
                <h2>Total Baki Debet : </h2>
                <h2 className="text-orange bg-slate-100 p-2 rounded border border-slate-200 w-56">Rp 5.250.000.000,00</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 p-5 border-t">
            <CustomButton href="/perhitungan-ckpn/unggah-data-pinjaman/data-nominatif-pinjaman" iconButton={<ArrowLeftOutlined />} text="Kembali" shape="rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPage;
