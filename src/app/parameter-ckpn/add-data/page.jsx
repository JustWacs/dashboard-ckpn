import HeaderContent from "@/Components/utilities/HeaderContent";
import HeaderPage from "@/Components/utilities/HeaderPage";
import MenuContent from "@/Components/utilities/MenuContent";
import { Form, Select } from "antd";

const Page = () => {
  return (
    <div className="flex flex-col w-full bg-white-accent">
      <HeaderPage title="Parameter CKPN" />
      <div className="m-5 h-screen bg-white">
        <HeaderContent title="Parameter CKPN | Kolektif & Individual" />
        <div className="p-5">
          <Form>
            <label className="font-bold">Pengelompokan Pinjaman</label>
              <Select
                placeholder="Pilih Pengelompokan Pinjaman"
                options={[
                  { value: '1', label: 'Jenis Produk' },
                  { value: '2', label: 'Jenis Penggunaan' },
                  { value: '3', label: 'Sektor Ekonomi' },
                ]}
              />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
