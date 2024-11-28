"use client";
import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import { ConfigProvider, DatePicker, Flex, Input, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";
import TextArea from "antd/es/input/TextArea";
import PopupButton from "@/Components/utilities/PopupButton";

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
    "Periode CKPN": "2024-06-30",
    "CKPN Kolektif": "PD: Klasifikasi Pinjaman:  1 - Jenis Produk Metode Perhitungan PD:  2 - Migration Rentang Waktu PD (Bulan): 12 Interval Rata-Rata PD:  2 - Triwulanan 103 Rekening Pinjaman 2 Rekening Hapus Buku 1  Realisasi Eksekusi Agunan LGD: Metode Perhitungan LGD: 2 - Collateral Shortfall Rentang Waktu LGD (Tahun): 5",
    "CKPN Individual": "Batasan Nominal Baki Debet (One Obligor) Mulai CKPN Individual: Rp 1.000.000.000,00 Kolektibilitas Mulai CKPN Individual: 5 - Macet 1 Rekening Pinjaman 3010000001 - Abdul Samat",
    "Hasil Perhitungan CKPN": "CKPN Kolektif: Rp. PD: 301: 0,00% 0,00% 0,00% 0,00% 0,00% 302: 0,00% 0,00% 0,00% 0,00% 0,00% 303: 0,00% 0,00% 0,00% 0,00% 0,00% 304: 0,00% 0,00% 0,00% 0,00% 0,00% 305: 0,00% 0,00% 0,00% 0,00% 0,00% LGD: 0,00% Total Baki Debet: Rp CKPN Individual: Rp Total CKPN: Rp",
    "PPKA": "Rp",
    "Status": "Disetujui Tanggal: 2024-06-30",
  },
];

const columns = [
  {
    title: "Periode CKPN",
    dataIndex: "Periode CKPN",
    key: "Periode CKPN",
    fixed: "left",
    width: 150,
  },
  {
    title: "CKPN Kolektif",
    dataIndex: "CKPN Kolektif",
    key: "CKPN Kolektif",
    width: 250,
  },
  {
    title: "CKPN Individual",
    dataIndex: "CKPN Individual",
    key: "CKPN Individual",
    width: 200,
  },
  {
    title: "Hasil Perhitungan CKPN",
    dataIndex: "Hasil Perhitungan CKPN",
    key: "Hasil Perhitungan CKPN",
    width: 250,
  },
  {
    title: "PPKA",
    dataIndex: "PPKA",
    key: "PPKA",
    width: 150,
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
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
  const modalContent = (
    <Space className="w-full" direction="vertical" size="large">
            {/* Section 1 */}
            <Space className="w-full" direction="vertical" size="small">
              <Flex>
                <p className="w-1/2">Periode : </p>
                <DatePicker className="w-1/2" />
              </Flex>
              <Flex>
                <p className="w-1/2">Klasifikasi Pinjaman PD : </p>
                <p className="w-1/2">1 - Jenis Produk</p>
              </Flex>
              <Flex>
                <p className="w-1/2">Metode Perhitungan PD : </p>
                <p className="w-1/2">2 - Migration</p>
              </Flex>
              <Flex>
                <p className="w-1/2">Rentang Waktu PD (Bulan) : </p>
                <p className="w-1/2">12</p>
              </Flex>
              <Flex>
                <p className="w-1/2">Interval Rata-Rata PD : </p>
                <p className="w-1/2">2 - Triwulanan</p>
              </Flex>
            </Space>

            {/* Section 2 */}
            <Space className="w-full" direction="vertical" size="small">
              <Flex>
                <p className="w-1/2">Metode Perhitungan LGD : </p>
                <p className="w-1/2">2 - Collateral Shortfall</p>
              </Flex>
              <Flex>
                <p className="w-1/2">Rentang Waktu LGD (Tahun) : </p>
                <p className="w-1/2">5</p>
              </Flex>
            </Space>

            {/* Section 3 */}
            <Space className="w-full" direction="vertical" size="small">
              <Flex>
                <p className="w-1/2">Batasan Nominal Baki Debet</p>
              </Flex>
              <Flex>
                <p className="w-1/2">(One Obligor) mulai CKPN Individual : </p>
                <p className="w-1/2">Rp 1.000.000.000,00</p>
              </Flex>
              <Flex>
                <p className="w-1/2">Kolektibilitas mulai CKPN Individual :</p>
                <p className="w-1/2">5 - Macet</p>
              </Flex>
              <Flex>
                <p className="w-1/2">PPKA : </p>
                <Input placeholder="Rp" className="w-1/2" />
              </Flex>
              <Flex>
                <p className="w-1/2">Catatan : </p>
                <TextArea className="w-1/2" />
              </Flex>
            </Space>
            {/* End Section */}
          </Space>
  );

  const total = dataSource.length;

  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Daftar CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Daftar CKPN" />
          <div className="flex justify-end p-5">
          <PopupButton
            buttonText="Tambah Data"
            modalTitle="Tambah Data Baru"
            modalContent={modalContent}
            onOk={() => console.log("OK clicked")}
            onCancel={() => console.log("Cancel clicked")}
         />
          </div>
          <div className="px-10 pb-5">
            <h2>Periode</h2>
            <div className="flex gap-2">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <DatePicker className="w-1/3" />
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
