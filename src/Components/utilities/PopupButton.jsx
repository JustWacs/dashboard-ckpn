import React, { useState } from "react";
import { Button, ConfigProvider, DatePicker, Flex, Input, Modal, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import CustomButton from "./CustomButton";

const PopupButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
        <Button size="large" type="primary" shape="round" icon={<PlusOutlined />} onClick={showModal}>
          Tambah
        </Button>
        <Modal
          title="Buat CKPN Baru"
          open={isModalOpen}
          footer={[
            <>
              <Button key="submit" onClick={handleCancel}>
                Batal
              </Button>
              <Button type="primary" key="back" onClick={handleOk}>
                Proses
              </Button>
            </>,
          ]}
        >
          <br />
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
        </Modal>
      </ConfigProvider>
    </>
  );
};
export default PopupButton;
