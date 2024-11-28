"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import { ConfigProvider, DatePicker, Input, Table, Upload } from "antd";
import CustomButton from "@/Components/utilities/CustomButton";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const Page = () => {
  const dataSource = Array.from({ length: 13 }, (_, i) => ({
    key: i,
    angsuranKe: i,
    bakiDebet: "",
    pokok: "",
    bungaKontraktual: "",
    angsuran: "",
    bungaEIR: "",
    amortisasi: "",
    nilaiBelumDiamortisasi: "",
    nilaiBersih: "",
    cashFlow: "",
  }));

  // Table columns
  const columns = [
    {
      title: "Angsuran Ke-",
      dataIndex: "angsuranKe",
      key: "angsuranKe",
      align: "center",
      width: 120,
      fixed: "left",
    },
    {
      title: "Baki Debet",
      dataIndex: "bakiDebet",
      key: "bakiDebet",
      align: "center",
      width: 150,
    },
    {
      title: "Pokok",
      dataIndex: "pokok",
      key: "pokok",
      align: "center",
      width: 150,
    },
    {
      title: "Bunga Kontraktual",
      dataIndex: "bungaKontraktual",
      key: "bungaKontraktual",
      align: "center",
      width: 200,
    },
    {
      title: "Angsuran",
      dataIndex: "angsuran",
      key: "angsuran",
      align: "center",
      width: 150,
    },
    {
      title: "Bunga EIR",
      dataIndex: "bungaEIR",
      key: "bungaEIR",
      align: "center",
      width: 150,
    },
    {
      title: "Amortisasi",
      dataIndex: "amortisasi",
      key: "amortisasi",
      align: "center",
      width: 150,
    },
    {
      title: "Nilai Belum Diamortisasi",
      dataIndex: "nilaiBelumDiamortisasi",
      key: "nilaiBelumDiamortisasi",
      align: "center",
      width: 200,
    },
    {
      title: "Nilai Bersih",
      dataIndex: "nilaiBersih",
      key: "nilaiBersih",
      align: "center",
      width: 150,
    },
    {
      title: "Cash Flow",
      dataIndex: "cashFlow",
      key: "cashFlow",
      align: "center",
      width: 150,
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

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Perhitungan CKPN" />
        <div className="m-5 h-auto bg-white ">
          <HeaderContent title="Perhitungan CKPN | Perhitungan CKPN Individual" />
          <div className="py-10 px-5">
            <div className="flex gap-2 items-center">
              <h2>Periode</h2>
              <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                <DatePicker className="w-64" size="large"/>
              </ConfigProvider>
              <CustomButton href="" type="default" text="Cari" size="normal" />
              <CustomButton href="" type="default" text="Reset" />
            </div>
          </div>
          <div className="flex gap-4 p-5 border-t mx-4 justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <h1 className="text-base"> Nomor Rekening : </h1>
                <h1 className="text-base">Plafon Pinjaman : </h1>
                <h1 className="text-base">Baki Debet Pinjaman : </h1>
                <h1 className="text-base">Provisi : </h1>
                <h1 className="text-base">Biaya Transaksi : </h1>
                <h1 className="text-base">Jangka Waktu (Bulan) : </h1>
                <h1 className="text-base">Jenis Suku Bunga : </h1>
                <h1 className="text-base">Suku Bunga (p.a.) : </h1>
                <h1 className="text-base">Suku Bunga EIR (p.a.) : </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-base text-orange">3010000001</h1>
                <h1 className="text-base text-orange">Rp 200.000.000,00</h1>
                <h1 className="text-base text-orange">Rp 200.000.000,00</h1>
                <h1 className="text-base text-orange">Rp 2.000.000,00</h1>
                <h1 className="text-base text-orange">Rp 0</h1>
                <h1 className="text-base text-orange">12</h1>
                <h1 className="text-base text-orange">Anuitas</h1>
                <h1 className="text-base text-orange">15%</h1>
                <h1 className="text-base text-orange">15,34%</h1>
              </div>
            </div>
          </div>

          <HeaderContent title="1.  JADWAL ANGSURAN AWAL DAN ESTIMASI ARUS KAS AWAL" hideSubtitle={true} />
          <div className="flex justify-between p-5 m-5 border">
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
          <div className="overflow-auto mx-auto w-full max-w-screen-lg pb-10">
            <Table dataSource={dataSource} columns={columns} pagination={false} bordered scroll={{ x: 1500 }} />
          </div>

          <HeaderContent title="2.  BUKTI OBYEKTIF PENURUNAN NILAI" hideSubtitle={true} />
          <div className="flex gap-4 p-5 border mx-4 my-10">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <div className="flex flex-col gap-6 w-full">
                {/* Row 1: Tanggal Obyektif */}
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-medium w-1/3">Tanggal Obyektif Penurunan Nilai:</h1>
                  <DatePicker className="w-2/3" />
                </div>

                {/* Row 2: Lampiran Bukti */}
                <div className="flex justify-between items-start">
                  <h1 className="text-base font-medium w-1/2 pt-1">Lampiran Bukti Obyektif Penurunan Nilai:</h1>
                  <TextArea placeholder="Penjelasan Bukti Obyektif Penurunan Nilai" className="w-2/3" rows={4} />
                </div>

                {/* Row 3: Penjelasan Bukti */}
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-medium w-1/3">Penjelasan Bukti Obyektif Penurunan Nilai:</h1>
                  <Upload {...props} className="w-2/3">
                    <div className="flex items-center border border-gray-400 hover:border-orange rounded">
                      <button className="p-2 bg-transparent border-r rounded-l">Unggah File Disini</button>
                      <p className="px-3">Maks. 1MB</p>
                    </div>
                  </Upload>
                </div>
              </div>
            </ConfigProvider>
          </div>

          <HeaderContent title="3.  JADWAL ANGSURAN BARU" hideSubtitle={true} />
          <div className="flex justify-between p-5 m-5 border">
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
          <div className="overflow-auto mx-auto w-full max-w-screen-lg pb-10">
            <Table dataSource={dataSource} columns={columns} pagination={false} bordered scroll={{ x: 1500 }} />
          </div>

          <HeaderContent title="2.  BUKTI OBYEKTIF PENURUNAN NILAI" hideSubtitle={true} />
          <div className="flex gap-4 p-5 border mx-4 my-10">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <div className="flex flex-col gap-6 w-full">
                {/* Row 1: Tanggal Obyektif */}
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-medium w-1/2">Angsuran Ke- Terjadinya Penurunan Nilai : </h1>
                  <Input className="w-1/2" />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-medium w-1/2">Suku Bunga EIR : </h1>
                  <Input className="w-1/2" />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-medium w-1/2">Nilai Tercatat Sebelum Penurunan Nilai : </h1>
                  <Input className="w-1/2" />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-medium w-1/2">Nilai Kini Estimasi Arus Kas Masa Datang : </h1>
                  <Input className="w-1/2" />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-medium w-1/2">Cadangan Kerugian Penurunan Nilai : </h1>
                  <Input className="w-1/2" />
                </div>
              </div>
            </ConfigProvider>
          </div>
          <div className="flex justify-end gap-4 p-5 border-t">
          <CustomButton href="/perhitungan-ckpn/perhitungan-ckpn-individual" iconButton={<ArrowLeftOutlined />} text="Kembali" shape="rounded" />
          <CustomButton href="/perhitungan-ckpn/perhitungan-ckpn-individual" iconButton={<SaveOutlined />} text="Simpan" shape="rounded" type="primary" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Page;
