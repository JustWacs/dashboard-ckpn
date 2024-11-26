import { Avatar, Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const items = [
  {
    label: <a href="">Profile</a>,
    key: "0",
  },
  {
    label: 'Settings',
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "Log Out",
    key: "3",
    danger: true,
  },
];

const HeaderPage = ({ title }) => {
  return (
    <div className="flex bg-dark-brown w-full p-2">
      <h1 className="text-xl font-bold text-white w-full">{title}</h1>
      <span className="flex items-center gap-2 px-4 text-white">
        <Dropdown
          menu={{items,}}
          trigger={["click"]}>
          <a className="cursor-pointer">
            <Space>
              <UserOutlined />
              Admin
            </Space>
          </a>
        </Dropdown>
      </span>
    </div>
  );
};

export default HeaderPage;
