"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { ConfigProvider, Table } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";


const dataSource = [
  {
    key: "1",
    "Klasifikasi Pinjaman PD": "1 - Jenis Produk",
    "Metode Perhitungan PD": "2 - PD Migration",
    "Rentang Waktu PD (Bulan)": 60,
    "Interval Rata-Rata PD": "2 - Triwulanan",
    "Metode Perhitungan LGD": "2 - LGD Collateral Shortfall",
    "Rentang Waktu LGD (Tahun)": 5,
    "Batasan Nominal Baki Debet (One Obligor) CKPN Individual": 1000000000,
    "Kolektibilitas Mulai CKPN Individual": "5 - Macet 3",
  },
  {
    key: "2",
    "Klasifikasi Pinjaman PD": "2 - Jenis Produk",
    "Metode Perhitungan PD": "1 - PD Flat",
    "Rentang Waktu PD (Bulan)": 30,
    "Interval Rata-Rata PD": "1 - Bulanan",
    "Metode Perhitungan LGD": "1 - LGD Fixed",
    "Rentang Waktu LGD (Tahun)": 3,
    "Batasan Nominal Baki Debet (One Obligor) CKPN Individual": 500000000,
    "Kolektibilitas Mulai CKPN Individual": "3 - Lancar",
  },
];

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

const columns = [
  {
    title: "Klasifikasi Pinjaman PD",
    dataIndex: "Klasifikasi Pinjaman PD",
    key: "klasifikasi-pinjaman-pd",
    fixed: "left",
    width: 150,
  },
  {
    title: "Metode Perhitungan PD",
    dataIndex: "Metode Perhitungan PD",
    key: "Metode Perhitungan PD",
    width: 150,
  },
  {
    title: "Rentang Waktu PD (Bulan)",
    dataIndex: "Rentang Waktu PD (Bulan)",
    key: "Rentang Waktu PD (Bulan)",
    width: 150,
  },
  {
    title: "Interval Rata-Rata PD",
    dataIndex: "Interval Rata-Rata PD",
    key: "Interval Rata-Rata PD",
    width: 150,
  },
  {
    title: "Metode Perhitungan LGD",
    dataIndex: "Metode Perhitungan LGD",
    key: "Metode Perhitungan LGD",
    width: 150,
  },
  {
    title: "Rentang Waktu LGD (Tahun)",
    dataIndex: "Rentang Waktu LGD (Tahun)",
    key: "Rentang Waktu LGD (Tahun)",
    width: 150,
  },
  {
    title: "Batasan Nominal Baki Debet (One Obligor) CKPN Individual",
    dataIndex: "Batasan Nominal Baki Debet (One Obligor) CKPN Individual",
    key: "Batasan Nominal Baki Debet (One Obligor) CKPN Individual",
    width: 150,
    render: (value) => formatCurrency(value),
  },
  {
    title: "Kolektibilitas Mulai CKPN Individual",
    dataIndex: "Kolektibilitas Mulai CKPN Individual",
    key: "Kolektibilitas Mulai CKPN Individual",
    width: 150,
  },
  {
    title: "Aksi",
    key: "Aksi",
    render: () => (
      <div className="flex gap-2">
        <EyeOutlined  style={{ color: "blue", cursor: "pointer" }} />
        <EditOutlined style={{ color: "blue", cursor: "pointer" }} />
        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
      </div>
    ),
    fixed: "right",
    width: 100,
  },
];

const Page = () => {

  const total = dataSource.length;

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Parameter CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Parameter CKPN | Kolektif & Individual" />
          <div className="px-5 flex mx-5 pt-10 border-b">
            <MenuContent title="Parameter CKPN" subTitle="Kolektif & Individual" href="/parameter-ckpn" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Produk" href="/parameter-ckpn/klasifikasi-jenis-produk" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Penggunaan" href="/parameter-ckpn/klasifikasi-jenis-penggunaan" />
            <MenuContent title="Klasifikasi" subTitle="Sektor Ekonomi" href="/parameter-ckpn/klasifikasi-sektor-ekonomi" />
          </div>
          <div className="flex justify-end px-5 py-10">
            <CustomButton href="/parameter-ckpn/add-data" type="primary" shape="round" iconButton={<PlusOutlined />} text="Tambah" />
          </div>
          <div className="overflow-auto mx-auto w-full max-w-screen-lg">
            <h1 className="flex justify-end ">Total: {total}</h1>
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <Table
                className="text-sm"
                dataSource={dataSource}
                columns={columns}
                scroll={{
                  x: "max-content",
                }}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
