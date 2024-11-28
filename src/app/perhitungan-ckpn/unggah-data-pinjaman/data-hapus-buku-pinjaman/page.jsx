"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import { Button, ConfigProvider, DatePicker, Menu, Table, Upload } from "antd";
import { DeleteOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";
import { useState } from "react";
import MenuContent from "@/Components/utilities/MenuContent";
import Link from "next/link";

const dataSource = [
    {
      key: "1",
      "Tanggal Unggah": "2024-06-30  19:37:01",
      "Nama File": "20240930_data_hapus_buku_pinjaman.xlsx",
      "Jumlah Record": "3",
      Status: "Berhasil",
      "Pesan Kesalahan": "",
    },
    {
      key: "2",
      "Tanggal Unggah": "2024/06/30  19:01:23",
      "Nama File": "20240930_data_hapus_buku_pinjaman.xlsx",
      "Jumlah Record": "3",
      Status: "Tidak Berhasil",
      "Pesan Kesalahan": "Format File Tidak Sesuai",
    },
  ];

const columns = [
  {
    title: "Tanggal Unggah",
    dataIndex: "Tanggal Unggah",
    key: "Tanggal Unggah",
  },
  {
    title: "Nama File",
    dataIndex: "Nama File",
    key: "Nama File",
  },
  {
    title: "Jumlah Record",
    dataIndex: "Jumlah Record",
    key: "Jumlah Record",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
  {
    title: "Pesan Kesalahan",
    dataIndex: "Pesan Kesalahan",
    key: "Pesan Kesalahan",
  },
  {
    title: "Aksi",
    key: "Aksi",
    render: (_, record) => (
      <div className="flex gap-2">
        <Link href={`/perhitungan-ckpn/unggah-data-pinjaman/data-hapus-buku-pinjaman/view?title=${encodeURIComponent(record["Nama File"])}&tanggal=${encodeURIComponent(record["Tanggal Unggah"])}`}>
          <EditOutlined style={{ color: "blue", cursor: "pointer" }} />
        </Link>
        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
      </div>
    ),
  },
];

const props = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Page = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("Selected row keys:", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };

      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          {
            key: "clear",
            text: "Clear Selection",
            onSelect: () => setSelectedRowKeys([]),
          },
        ],
      };

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Unggah Data Pinjaman" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Unggah Data Pinjaman | Data Hapus Buku Pinjaman" />
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
          <div className="px-5 flex mx-5 pt-10 border-b">
            <MenuContent title="Unggah" subTitle="Data Nominatif Pinjaman" href="/perhitungan-ckpn/unggah-data-pinjaman/data-nominatif-pinjaman" />
            <MenuContent title="Unggah" subTitle="Data Hapus Buku Pinjaman" href="/perhitungan-ckpn/unggah-data-pinjaman/data-hapus-buku-pinjaman" />
            <MenuContent title="Unggah" subTitle="Data Realisasi Eksekusi Agunan" href="/perhitungan-ckpn/unggah-data-pinjaman/data-realisasi-eksekusi-agunan" />
          </div>
          <div className="flex justify-between p-5 mx-5 my-10 border">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <Upload {...props}>
                <div className="flex items-center border border-gray-400 hover:border-orange rounded">
                  <button className="p-3 bg-transparent border-r rounded-l">Unggah File Disini</button>
                  <p className="px-4">Maks. 1MB</p>
                </div>
              </Upload>
              <CustomButton href="" type="primary" text="Unduh Template" />
            </ConfigProvider>
          </div>
          <div className="p-5">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <Table className="text-sm" dataSource={dataSource} columns={columns} rowSelection={rowSelection} />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
