import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Button, ConfigProvider, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
const Page = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-white-accent">
        <HeaderPage title="Parameter CKPN" />
        <div className="m-5 h-screen bg-white">
          <HeaderContent title="Parameter CKPN | Kolektif & Individual" />
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
