import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Parameter CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Parameter CKPN | Klasifikasi Jenis Produk" />
          <div className="p-5 flex">
            <MenuContent title="Parameter CKPN" subTitle="Kolektif & Individual" href="/parameter-ckpn" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Produk" href="/parameter-ckpn/klasifikasi-jenis-produk" />
            <MenuContent title="Klasifikasi" subTitle="Jenis Penggunaan" href="/parameter-ckpn/klasifikasi-jenis-penggunaan" />
            <MenuContent title="Klasifikasi" subTitle="Sektor Ekonomi" href="/parameter-ckpn/klasifikasi-sektor-ekonomi" />
          </div>
          <div className="flex justify-end p-5">
            <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
              <Button type="primary" shape="round" size="large" icon={<PlusOutlined />}>
                Tambah
              </Button>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
