import { Button, ConfigProvider } from "antd";
import Link from "next/link";

const CustomButton = ({ href, iconButton, text, shape, type}) => {
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
        <Link href={`${href}`}>
          <Button
            type= {type || null}
            shape={shape}
            size="large"
            icon={iconButton || null}>
            {text}
          </Button>
        </Link>
      </ConfigProvider>
    </>
  );
};

export default CustomButton;
