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
  // Table data
  const dataSource = [
    {
      key: "1",
      kodeKantor: "0010",
      jenisProduk: "301 - Kredit Modal Kerja",
      kualitas: "1",
      bakiDebet: 0,
      probabilityDefault: "2,36%",
      lossGivenDefault: "30,10%",
      penurunanNilai: 0,
    },
    {
      key: "2",
      kodeKantor: "0010",
      jenisProduk: "301 - Kredit Modal Kerja",
      kualitas: "2",
      bakiDebet: 0,
      probabilityDefault: "7,62%",
      lossGivenDefault: "30,10%",
      penurunanNilai: 0,
    },
    {
      key: "3",
      kodeKantor: "0010",
      jenisProduk: "301 - Kredit Modal Kerja",
      kualitas: "3",
      bakiDebet: 0,
      probabilityDefault: "10,89%",
      lossGivenDefault: "30,10%",
      penurunanNilai: 0,
    },
    {
      key: "4",
      kodeKantor: "0010",
      jenisProduk: "302 - Kredit Investasi",
      kualitas: "1",
      bakiDebet: 0,
      probabilityDefault: "0,00%",
      lossGivenDefault: "30,10%",
      penurunanNilai: 0,
    },
    {
      key: "5",
      kodeKantor: "0010",
      jenisProduk: "303 - Kredit Konsumsi",
      kualitas: "2",
      bakiDebet: 0,
      probabilityDefault: "32,16%",
      lossGivenDefault: "30,10%",
      penurunanNilai: 0,
    },
    // Add more rows as needed...
  ];

  // Table columns
  const columns = [
    {
      title: "Kode Kantor",
      dataIndex: "kodeKantor",
      key: "kodeKantor",
      fixed: "left",
      width: 150,
    },
    {
      title: "Jenis Produk",
      dataIndex: "jenisProduk",
      key: "jenisProduk",
      width: 200,
    },
    {
      title: "Kualitas",
      dataIndex: "kualitas",
      key: "kualitas",
      width: 150,
    },
    {
      title: "Baki Debet (EAD)",
      dataIndex: "bakiDebet",
      key: "bakiDebet",
      align: "right",
      width: 150,
    },
    {
      title: "Probability of Default (PD)",
      dataIndex: "probabilityDefault",
      key: "probabilityDefault",
      width: 200,
    },
    {
      title: "Loss Given Default (LGD)",
      dataIndex: "lossGivenDefault",
      key: "lossGivenDefault",
      width: 200,
    },
    {
      title: "Penurunan Nilai",
      dataIndex: "penurunanNilai",
      key: "penurunanNilai",
      align: "right",
      width: 150,
    },
    {
      title: "Aksi",
      key: "aksi",
      render: () => <a className="text-orange" href="#">Detail</a>,
      fixed: "right",
      width: 100,
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
          <HeaderContent title="Perhitungan CKPN | CKPN Kolektif" />
          <div className="py-10 px-5">
            <div className="flex gap-2 items-center">
              <h2>Periode</h2>
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <DatePicker className="w-64" size="large" />
              </ConfigProvider>

            </div>
          </div>
          <div className="px-5 flex mx-5 mb-10 pt-5 border-b">
            <MenuContent subTitle="Probability of Default (PD)" href="/perhitungan-ckpn/perhitungan-ckpn-kolektif/pd" />
            <MenuContent subTitle="Loss Given Default (LGD)" href="/perhitungan-ckpn/perhitungan-ckpn-kolektif/lgd" />
            <MenuContent subTitle="CKPN Kolektif" href="/perhitungan-ckpn/perhitungan-ckpn-kolektif/ckpn-kolektif" />
          </div>
          <div className="flex gap-4 p-5 border mx-4 justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <h1 className="text-xs">Metode Probability of Default (PD) : </h1>
                <h1 className="text-xs">Klasifikasi Pinjaman PD : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs text-orange">2 - PD Migration</h1>
                <h1 className="text-xs text-orange">2 - Jenis Produk</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <h1 className="text-xs">Metode Loss Given Default (LGD) : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs text-orange">2 - LGD Collateral Shortfall</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <h1 className="text-xs">Metode Probability of Default (PD) : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs text-orange">2 - PD Migration</h1>
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
              dataSource={[...dataSource, totalRow]}
              columns={columns}
              pagination={false}
              bordered
              scroll={{ x: 1500 }}
              summary={() => (
                <Table.Summary.Row>
                  <Table.Summary.Cell fixed="left" index={0}>
                    Total
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1} />
                  <Table.Summary.Cell index={2} />
                  <Table.Summary.Cell index={3} align="right">
                    {totalRow.bakiDebet.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={4} />
                  <Table.Summary.Cell index={5} />
                  <Table.Summary.Cell index={6} align="right">
                    {totalRow.penurunanNilai.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
                  </Table.Summary.Cell>
                  <Table.Summary.Cell fixed="right" index={7} />
                </Table.Summary.Row>
              )}
            />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
