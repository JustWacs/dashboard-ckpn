import { ConfigProvider, Spin } from "antd";

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

const loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
          <Spin tip="Loading" size="large">
            {content}
          </Spin>
        </ConfigProvider>
      </div>
    </>
  );
};

export default loading;
