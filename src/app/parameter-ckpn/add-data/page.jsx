import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import RadioButton from "@/Components/utilities/RadioButton";
import { Button, ConfigProvider, Form, Input, Select } from "antd";
import Link from "next/link";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import CustomButton from "@/Components/utilities/CustomButton";

const Page = () => {
  return (
    <div className="flex flex-col w-full bg-white-accent">
      <HeaderPage title="Parameter CKPN" />
      <div className="m-5 h-screen bg-white">
        <HeaderContent title="Parameter CKPN | Kolektif & Individual" />
        <div className="py-10 px-5">
          <Form>
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                    <label className="font-bold pe-2">Klasifikasi Pinjaman PD</label>
                    <Select
                      className="w-80"
                      placeholder="Pilih Pengelompokan Pinjaman"
                      options={[
                        { value: "1", label: "1-Jenis Produk" },
                        { value: "2", label: "2-Jenis Penggunaan" },
                        { value: "3", label: "3-Sektor Ekonomi" },
                      ]}
                    />
                  </ConfigProvider>
                </div>
                <div className="flex justify-between">
                  <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                    <label className="font-bold pe-2">Metode Perhitungan PD</label>
                    <Select
                      className="w-80"
                      placeholder="Metode Perhitungan PD"
                      options={[
                        { value: "1", label: "1-Net Flow" },
                        { value: "2", label: "2-Jenis Penggunaan" },
                      ]}
                    />
                  </ConfigProvider>
                </div>
                <div className="flex justify-between">
                  <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                    <label className="font-bold pe-2">Rentang Waktu PD (Bulan)</label>
                    <Select
                      className="w-80"
                      placeholder="Rentang Waktu PD (Bulan)"
                      options={[
                        { value: "1", label: "12" },
                        { value: "2", label: "24" },
                        { value: "3", label: "36" },
                        { value: "4", label: "48" },
                        { value: "5", label: "60 (standar)" },
                      ]}
                    />
                  </ConfigProvider>
                </div>
                <div className="flex justify-between">
                  <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                    <label className="font-bold pe-2">Interval Rata-Rata PD</label>
                    <Select
                      className="w-80"
                      placeholder="Interval Rata-Rata PD"
                      options={[
                        { value: "1", label: "1-Bulanan" },
                        { value: "2", label: "2-Triwulanan" },
                      ]}
                    />
                  </ConfigProvider>
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-center">
                <div className="flex justify-between">
                  <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                    <label className="font-bold pe-2">Metode Perhitungan LGD</label>
                    <Select
                      className="w-80"
                      placeholder="Metode Perhitungan LGD"
                      options={[
                        { value: "1", label: "1-Expected Recoveries" },
                        { value: "2", label: "2-Collateral Shortfall" },
                        { value: "3", label: "3-Combine" },
                      ]}
                    />
                  </ConfigProvider>
                </div>
                <div className="flex justify-between">
                  <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                    <label className="font-bold pe-2">Rentang Waktu LGD (Tahun)</label>
                    <Select
                      className="w-80"
                      placeholder="Rentang Waktu LGD (Tahun)"
                      options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                        { value: "5", label: "5" },
                      ]}
                    />
                  </ConfigProvider>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-10 gap-10">
              <div className="flex justify-between">
                <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                  <label className="font-bold pe-2 text-xs">Batasan Nominal Baki Debet (One Obligor) Mulai CKPN Individual </label>
                  <Input placeholder="Batasan Nominal Baki Debet (One Obligor) Mulai CKPN Individual" />
                </ConfigProvider>
              </div>
              <div className="flex justify-between">
                <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
                  <label className="font-bold pe-2">Kolektibilitas Mulai CKPN Individual</label>
                  <Select
                    className="w-72"
                    placeholder="Kolektibilitas Mulai CKPN Individual"
                    options={[
                      { value: "1", label: "1-Expected Recoveries" },
                      { value: "2", label: "2-Collateral Shortfall" },
                      { value: "3", label: "3-Combine" },
                    ]}
                  />
                </ConfigProvider>
              </div>
            </div>
            <RadioButton />
          </Form>
        </div>
        <div className="flex justify-end gap-4 px-5">
          <CustomButton href="/parameter-ckpn" iconButton={<ArrowLeftOutlined />} text="Kembali" shape="rounded" />
          <CustomButton href="/parameter-ckpn" iconButton={<SaveOutlined />} text="Simpan" shape="rounded" type="primary" />
        </div>
      </div>
    </div>
  );
};

export default Page;
