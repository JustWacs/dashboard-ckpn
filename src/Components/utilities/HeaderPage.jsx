import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const HeaderPage = ({ title }) => {
  return (
    <div className="flex bg-dark-brown w-full p-2">
      <h1 className="text-xl font-bold text-white w-full">{title}</h1>
      <span className="flex items-center gap-2 px-2">
        <Avatar icon={<UserOutlined />} />
        <h2 className="text-xl text-white">Admin</h2>
      </span>
    </div>
  );
};

export default HeaderPage;
