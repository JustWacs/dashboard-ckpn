import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

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
    "Klasifikasi Pinjaman PD": "Kredit Konsumtif",
    "Metode Perhitungan PD": "Analisis Historis",
    "Interval Rata-Rata PD": "1% - 5%",
    "Metode Perhitungan LGD": "Proyeksi Kerugian",
    "Rentang Waktu LGD (Tahun)": "5",
    "Batasan Nominal Baki Debet (One Obligor) CKPN Individual": "Rp 1,000,000,000",
    "Kolektibilitas Mulai CKPN Individual": "Kolektibilitas 3",
    Aksi: "Edit | Delete",
  },
  {
    key: "2",
    "Klasifikasi Pinjaman PD": "Kredit Produktif",
    "Metode Perhitungan PD": "Model Statistik",
    "Interval Rata-Rata PD": "2% - 6%",
    "Metode Perhitungan LGD": "Analisis Sensitivitas",
    "Rentang Waktu LGD (Tahun)": "3",
    "Batasan Nominal Baki Debet (One Obligor) CKPN Individual": "Rp 2,000,000,000",
    "Kolektibilitas Mulai CKPN Individual": "Kolektibilitas 2",
    Aksi: "Edit | Delete",
  },
];

const columns = [
  {
    title: "Klasifikasi Pinjaman PD",
    dataIndex: "Klasifikasi Pinjaman PD",
    key: "klasifikasi-pinjaman-pd",
  },
  {
    title: "Metode Perhitungan PD",
    dataIndex: "Metode Perhitungan PD",
    key: "Metode Perhitungan PD",
  },
  {
    title: "Interval Rata-Rata PD",
    dataIndex: "Interval Rata-Rata PD",
    key: "Interval Rata-Rata PD",
  },
  {
    title: "Metode Perhitungan LGD",
    dataIndex: "Metode Perhitungan LGD",
    key: "Metode Perhitungan LGD",
  },
  {
    title: "Rentang Waktu LGD (Tahun)",
    dataIndex: "Rentang Waktu LGD (Tahun)",
    key: "Rentang Waktu LGD (Tahun)",
  },
  {
    title: "Batasan Nominal Baki Debet (One Obligor) CKPN Individual",
    dataIndex: "Batasan Nominal Baki Debet (One Obligor) CKPN Individual",
    key: "Batasan Nominal Baki Debet (One Obligor) CKPN Individual",
  },
  {
    title: "Kolektibilitas Mulai CKPN Individual",
    dataIndex: "Kolektibilitas Mulai CKPN Individual",
    key: "Kolektibilitas Mulai CKPN Individual",
  },
  {
    title: "Aksi",
    dataIndex: "Aksi",
    key: "Aksi",
  },
];
const Page = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Parameter CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Parameter CKPN | Kolektif & Individual" />
          <div className="p-5 flex w-full">
            <MenuContent title="Parameter CKPN" subTitle="Kolektif & Individual" href="/parameter-ckpn" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Produk" href="/parameter-ckpn/klasifikasi-jenis-produk" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Penggunaan" href="/parameter-ckpn/klasifikasi-jenis-penggunaan" />
            <MenuContent title="Klasifikasi" subTitle="Sektor Ekonomi" href="/parameter-ckpn/klasifikasi-sektor-ekonomi" />
          </div>
          <div className="flex justify-end p-5">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <Link href="/parameter-ckpn/add-data">
                <Button type="primary" shape="round" size="large" icon={<PlusOutlined />}>Tambah</Button>
              </Link>
            </ConfigProvider>
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
