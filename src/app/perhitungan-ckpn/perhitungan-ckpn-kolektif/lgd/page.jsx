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
      nomorRekening: "1",
      bakiDebet: "100.000.000,00",
      nilaiAgunan: "90.000.000,00",
      tahunAgunan: "2018",
      tahunEksekusi: "2020",
      sukuBunga: "15%",
      nilaiAgunanSetelahBiaya: "80.000.000,00",
      npvNilaiAgunan: "78.036.884,62",
      shortfall: "21.963.115,00",
    },
    {
      key: "2",
      nomorRekening: "2",
      bakiDebet: "800.000.000,00",
      nilaiAgunan: "90.000.000,00",
      tahunAgunan: "2019",
      tahunEksekusi: "2021",
      sukuBunga: "20%",
      nilaiAgunanSetelahBiaya: "550.000.000,00",
      npvNilaiAgunan: "532.115.022,84",
      shortfall: "267.884.977,00",
    },
    {
      key: "3",
      nomorRekening: "3",
      bakiDebet: "500.000.000,00",
      nilaiAgunan: "500.000.000,00",
      tahunAgunan: "2017",
      tahunEksekusi: "2020",
      sukuBunga: "18%",
      nilaiAgunanSetelahBiaya: "550.000.000,00",
      npvNilaiAgunan: "525.974.346,56",
      shortfall: "0,00",
    },
    {
      key: "4",
      nomorRekening: "4",
      bakiDebet: "200.000.000,00",
      nilaiAgunan: "500.000.000,00",
      tahunAgunan: "2020",
      tahunEksekusi: "2020",
      sukuBunga: "18%",
      nilaiAgunanSetelahBiaya: "9.000.000,00",
      npvNilaiAgunan: "9.000.000,00",
      shortfall: "191.000.000,00",
    },
    {
      key: "5",
      nomorRekening: "5",
      bakiDebet: ".500.000.00",
      nilaiAgunan: "10.000.000,00",
      tahunAgunan: "2018",
      tahunEksekusi: "2020",
      sukuBunga: "20%",
      nilaiAgunanSetelahBiaya: "200.000,00",
      npvNilaiAgunan: "193.496,37",
      shortfall: "306.504,00",
    },
    {
      key: "6",
      nomorRekening: "6",
      bakiDebet: "300.000,00",
      nilaiAgunan: "300.000,00",
      tahunAgunan: "2019",
      tahunEksekusi: "2021",
      sukuBunga: "15%",
      nilaiAgunanSetelahBiaya: "300.000,00",
      npvNilaiAgunan: "292.638,32",
      shortfall: "7.362,00",
    },
    {
      key: "7",
      nomorRekening: "7",
      bakiDebet: "13.666.654,00",
      nilaiAgunan: "45.000.000,00",
      tahunAgunan: "2020",
      tahunEksekusi: "-",
      sukuBunga: "25,59%",
      nilaiAgunanSetelahBiaya: "25.000.000,00",
      npvNilaiAgunan: "25.000.000,00",
      shortfall: "0,00",
    },
  ];

  // Table columns
  const columns = [
    {
      title: "Nomor Rekening",
      dataIndex: "nomorRekening",
      key: "nomorRekening",
      fixed: "left",
      width: 150,
    },
    {
      title: "Baki Debet / Outstanding Pinjaman Yang Belum Lunas",
      dataIndex: "bakiDebet",
      key: "bakiDebet",
      width: 200,
    },
    {
      title: "Nilai Agunan Yang",
      dataIndex: "nilaiAgunan",
      key: "nilaiAgunan",
      width: 200,
    },
    {
      title: "Tahun Agunan Diserahkan Kepada Bank / Tahun Hapus",
      dataIndex: "tahunAgunan",
      key: "tahunAgunan",
      width: 200,
    },
    {
      title: "Tahun Eksekusi",
      dataIndex: "tahunEksekusi",
      key: "tahunEksekusi",
      width: 150,
    },
    {
      title: "Suku Bunga Efektif Pada Saat Dihapus Buku",
      dataIndex: "sukuBunga",
      key: "sukuBunga",
      width: 200,
    },
    {
      title: "Nilai Agunan Hasil Eksekusi Setelah Dikurangi Biaya",
      dataIndex: "nilaiAgunanSetelahBiaya",
      key: "nilaiAgunanSetelahBiaya",
      width: 250,
    },
    {
      title: "NPV Nilai Agunan Hasil Eksekusi",
      dataIndex: "npvNilaiAgunan",
      key: "npvNilaiAgunan",
      width: 200,
    },
    {
      title: "Shortfall (Kerugian)",
      dataIndex: "shortfall",
      key: "shortfall",
      width: 200,
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Perhitungan CKPN" />
        <div className="m-5 h-auto bg-white pb-5">
          <HeaderContent title="Perhitungan CKPN | Loss Given Default (LGD)" />
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
                <h1 className="text-xs">Metode Probability of Default (PD) : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs text-orange">2 - PD Migration</h1>
              </div>
            </div>
          </div>
          <div className="pt-10 overflow-auto mx-auto w-full max-w-screen-lg">
          <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        scroll={{ x: 1500 }}
      />
      <h1 className="flex justify-end font-bold p-10">LGD = 30,10%</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
