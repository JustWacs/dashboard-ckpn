"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { ConfigProvider, Input, Table } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";

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
    "Jenis Produk CBS": "1100 - Rumah Tangga untuk Pemilikan Rumah Tinggal",
    "Mapping Kelompok Klasifikasi Sektor Ekonomi CKPN": "3 - Bukan Lapangan Usaha - Rumah Tangga",
    Keterangan: "1100 s.d. 4900",
  },
];

const columns = [
  {
    title: "Jenis Produk CBS",
    dataIndex: "Jenis Produk CBS",
    key: "Jenis Produk CBS",
    width: 200,
  },
  {
    title: "Mapping Kelompok Klasifikasi Sektor Ekonomi CKPN",
    dataIndex: "Mapping Kelompok Klasifikasi Sektor Ekonomi CKPN",
    key: "Mapping Kelompok Klasifikasi Sektor Ekonomi CKPN",
    width: 200,
  },
  {
    title: "Keterangan",
    dataIndex: "Keterangan",
    key: "Keterangan",
    width: 200,
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
          <HeaderContent title="Parameter CKPN | Klasifikasi Sektor Ekonomi" />
          <div className="px-5 flex mx-5 pt-10 border-b">
            <MenuContent title="Parameter CKPN" subTitle="Kolektif & Individual" href="/parameter-ckpn" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Produk" href="/parameter-ckpn/klasifikasi-jenis-produk" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Penggunaan" href="/parameter-ckpn/klasifikasi-jenis-penggunaan" />
            <MenuContent title="Klasifikasi" subTitle="Sektor Ekonomi" href="/parameter-ckpn/klasifikasi-sektor-ekonomi" />
          </div>
          <div className="flex justify-end p-5">
            <CustomButton href="/parameter-ckpn/add-data" type="primary" shape="round" iconButton={<PlusOutlined />} text="Tambah" />
          </div>
          <div className="px-10 pb-5">
            <h2>Pencarian</h2>
            <div className="flex gap-2 w-1/2">
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <Input type="text" placeholder="Cari . . ." />
              </ConfigProvider>
              <CustomButton href="" type="primary" text="Cari" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
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
