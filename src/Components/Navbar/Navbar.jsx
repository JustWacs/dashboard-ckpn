import { ConfigProvider, Menu } from "antd";
import Link from "next/link";
import { DatabaseOutlined, FormOutlined, HomeOutlined, LikeOutlined, PieChartOutlined, SlidersOutlined, SnippetsOutlined } from "@ant-design/icons";

const items = [
  {
    label: <Link href="/">Dashboard</Link>,
    key: "dashboard",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/parameter-ckpn">Parameter CKPN</Link>,
    key: "parameter-ckpn",
    icon: <SlidersOutlined />,
  },
  {
    label: <Link href="/daftar-ckpn">Daftar CKPN</Link>,
    key: "daftar-ckpn",
    icon: <FormOutlined />,
  },
  {
    label: "Perhitungan CKPN",
    key: "perhitungan-ckpn",
    icon: <PieChartOutlined />,
    children: [
      {
        key: "unggah-data-pinjaman",
        label: <Link href="/perhitungan-ckpn/unggah-data-pinjaman">Unggah Data Pinjaman</Link>,
      },
      {
        KeyboardEvent: "pengkategorian-ckpn-pinjaman",
        label: <Link href="/perhitungan-ckpn/pengkategorian-ckpn-pinjaman">Pengkategorian CKPN Pinjaman</Link>,
      },
      {
        key: "perhitungan-ckpn-kolektif",
        label: <Link href="/perhitungan-ckpn/perhitungan-ckpn-kolektif">Perhitungan CKPN Kolektif</Link>,
      },
      {
        key: "perhitungan-cpkn-individual",
        label: <Link href="/perhitungan-ckpn/perhitungan-ckpn-individual">Perhitungan CKPN Individual</Link>,
      },
      {
        key: "perhitungan-total-ckpn",
        label: <Link href="/perhitungan-ckpn/perhitungan-total-ckpn">Perhitungan Total CKPN</Link>,
      },
    ],
  },
  {
    label: <Link href="/persetujuan-hasil-ckpn">Persetujuan Hasil Perhitungan CKPN</Link>,
    key: "persetujuan-hasil-ckpn",
    icon: <LikeOutlined />,
  },
  {
    label: <Link href="/laporan-ckpn">Laporan CKPN</Link>,
    key: "laporan-ckpn",
    icon: <SnippetsOutlined />,
  },
  {
    label: <Link href="/master-data">Master Data</Link>,
    key: "master-data",
    icon: <DatabaseOutlined />,
  },
];
const Navbar = () => {
  return (
    <div className="flex flex-col w-[20%]">
      <h1 className="text-xl font-bold text-center bg-light-brown py-3">Sistem Informasi CKPN Digital</h1>
      <ConfigProvider theme={{ token: { colorPrimary: "#C65911" } }}>
        <Menu className="h-screen" mode="inline" items={items} />
      </ConfigProvider>
    </div>
  );
};

export default Navbar;
