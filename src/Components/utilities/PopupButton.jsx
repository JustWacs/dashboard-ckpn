import React, { useState } from "react";
import { Button, ConfigProvider, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const PopupButton = ({
  buttonText = "Tambah", 
  buttonIcon = <PlusOutlined />, 
  buttonType = "primary", 
  modalTitle = "Modal Title", 
  modalContent, 
  onOk, 
  onCancel, 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (onOk) onOk();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
      <Button size="large" type={buttonType}  icon={buttonIcon} shape="round" onClick={showModal}>
        {buttonText}
      </Button>
      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Batal
          </Button>,
          <Button type="primary" key="ok" onClick={handleOk}>
            Proses
          </Button>,
        ]}
      >
        {modalContent}
      </Modal>
    </ConfigProvider>
  );
};

export default PopupButton;
