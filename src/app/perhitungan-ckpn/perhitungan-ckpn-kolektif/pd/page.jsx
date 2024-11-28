"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider, DatePicker, Flex, Input, Modal, Select, Space, Table } from "antd";

const Page = () => {
  const dataSource = [
    {
      key: "1",
      kualitas: "1",
      saldoAwal: "43,059,118,852.99",
      posisi1: "20,387,288.99",
      posisi2: "1,126,912,193.00",
      posisi3: "1,282,618,700.00",
      posisi4: "1,869,373,765.00",
      posisi5: "2,383,173,796.00",
      hapusBuku: "0.00",
      pembayaran: "16,302,653,110.00",
      total: "43,059,118,852.99",
    },
    {
      key: "2",
      kualitas: "2",
      saldoAwal: "15,179,625,810.00",
      posisi1: "5,236,752.00",
      posisi2: "2,647,747,285.00",
      posisi3: "0.00",
      posisi4: "2,829,952,367.00",
      posisi5: "4,077,128,371.00",
      hapusBuku: "0.00",
      pembayaran: "3,108,561,035.00",
      total: "15,179,625,810.00",
    },
    {
      key: "3",
      kualitas: "3",
      saldoAwal: "779,696,046.00",
      posisi1: "90,510,649.00",
      posisi2: "319,197,466.00",
      posisi3: "89,614,635.00",
      posisi4: "153,920,449.00",
      posisi5: "36,392,982.00",
      hapusBuku: "0.00",
      pembayaran: "90,059,965.00",
      total: "779,696,046.00",
    },
    {
      key: "4",
      kualitas: "4",
      saldoAwal: "3,103,451,524.00",
      posisi1: "1,595,664.00",
      posisi2: "2,032,156,131.00",
      posisi3: "0.00",
      posisi4: "0.00",
      posisi5: "603,224,647.00",
      hapusBuku: "0.00",
      pembayaran: "283,475,082.00",
      total: "3,103,451,524.00",
    },
    {
      key: "5",
      kualitas: "5",
      saldoAwal: "6,542,331,561.00",
      posisi1: "1,174,052,576.00",
      posisi2: "0.00",
      posisi3: "0.00",
      posisi4: "0.00",
      posisi5: "4,654,425,095.00",
      hapusBuku: "0.00",
      pembayaran: "713,853,890.00",
      total: "6,542,331,561.00",
    },
  ];

  // Function to calculate percentage, ensuring no division by zero
  const calculatePercent = (value, total) => {
    if (total === 0 || isNaN(total)) {
      return "0.00%"; // Return 0% if total is 0 or invalid
    }
    return ((value / total) * 100).toFixed(2) + "%";
  };

  // Mapping dataSource to include percentages
  const percentageData = dataSource.map((item) => ({
    key: item.key,
    kualitas: item.kualitas,
    saldoAwal: item.saldoAwal.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    posisi1: calculatePercent(item.posisi1, item.saldoAwal),
    posisi2: calculatePercent(item.posisi2, item.saldoAwal),
    posisi3: calculatePercent(item.posisi3, item.saldoAwal),
    posisi4: calculatePercent(item.posisi4, item.saldoAwal),
    posisi5: calculatePercent(item.posisi5, item.saldoAwal),
    hapusBuku: calculatePercent(item.hapusBuku, item.saldoAwal),
    pembayaran: calculatePercent(item.pembayaran, item.saldoAwal),
    total: "100.00%", // Always 100% for total
  }));


  const columns = [
    {
      title: "301 - KMK Kualitas",
      dataIndex: "kualitas",
      key: "kualitas",
      fixed: "left",
      width: 100,
    },
    {
      title: "Saldo Awal 30 September 2022",
      dataIndex: "saldoAwal",
      key: "saldoAwal",
      fixed: "left",
      width: 200,
    },
    {
      title: "Posisi 30 September 2023",
      children: [
        { title: "1", dataIndex: "posisi1", key: "posisi1", width: 150 },
        { title: "2", dataIndex: "posisi2", key: "posisi2", width: 150 },
        { title: "3", dataIndex: "posisi3", key: "posisi3", width: 150 },
        { title: "4", dataIndex: "posisi4", key: "posisi4", width: 150 },
        { title: "5", dataIndex: "posisi5", key: "posisi5", width: 150 },
      ],
    },
    {
      title: "Hapus Buku",
      dataIndex: "hapusBuku",
      key: "hapusBuku",
      width: 150,
    },
    {
      title: "Pembayaran",
      dataIndex: "pembayaran",
      key: "pembayaran",
      width: 200,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: 200,
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Perhitungan CKPN" />
        <div className="m-5 h-auto bg-white pb-5">
          <HeaderContent title="Perhitungan CKPN | Probability of Default (PD)" />
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
                <h1 className="text-xs">Rentang Waktu PD (Bulan): </h1>
                <h1 className="text-xs">Interval Rata-Rata PD : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xs text-orange">12</h1>
                <h1 className="text-xs text-orange">2 - Triwulanan</h1>
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
          <div className="flex gap-4 px-10 pt-10">
            <h1 className="font-bold">Jenis Produk : </h1>
            <h1 className="font-bold text-orange">301 - Kredit Modal Kerja (KMK)</h1>
          </div>
          <div className="pt-10 overflow-auto mx-auto w-full max-w-screen-lg">
            <h2 className="font-bold">Posisi September 2022</h2>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              bordered
              scroll={{ x: 1500 }}
              summary={(pageData) => {
                let totalSaldoAwal = 0;
                let totalPembayaran = 0;
                let totalHapusBuku = 0;

                pageData.forEach(({ saldoAwal, pembayaran, hapusBuku }) => {
                  totalSaldoAwal += parseFloat(saldoAwal.replace(/,/g, ""));
                  totalPembayaran += parseFloat(pembayaran.replace(/,/g, ""));
                  totalHapusBuku += parseFloat(hapusBuku.replace(/,/g, ""));
                });

                return (
                  <>
                    <Table.Summary.Row>
                      {/* Cell kosong untuk kolom sebelum "Saldo Awal" */}
                      <Table.Summary.Cell index={0} />
                      {/* Total Saldo Awal */}
                      <Table.Summary.Cell index={1}>
                        <strong>
                          {totalSaldoAwal.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2} />
                      <Table.Summary.Cell index={3} />
                      <Table.Summary.Cell index={4} />
                      <Table.Summary.Cell index={5} />
                      <Table.Summary.Cell index={6} />
                      <Table.Summary.Cell index={7} />
                      <Table.Summary.Cell index={8} />
                      <Table.Summary.Cell index={9}>
                        <strong>
                          {totalSaldoAwal.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </div>
          <div className="pt-10 overflow-auto mx-auto w-full max-w-screen-lg">
            <Table dataSource={percentageData} columns={columns} pagination={false} bordered scroll={{ x: 1500 }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
