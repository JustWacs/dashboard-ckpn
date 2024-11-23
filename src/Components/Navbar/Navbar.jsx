import { Menu } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col w-[15%]">
      <h1 className="text-xl font-bold text-center bg-light-brown py-3">Sistem Informasi CKPN Digital</h1>
      <Menu className="h-screen"
        items={[
          {
            label: <Link href="/">Dashboard</Link>,
            key: "dashboard",
          },
          {
            label: <Link href="/parameter-ckpn">Parameter CKPN</Link>,
            key: "parameter-ckpn",
          },
          {
            label: <Link href="/daftar-ckpn">Daftar CKPN</Link>,
            key: "daftar-ckpn",
          },
          {
            label: <Link href="/perhitungan-ckpn">Perhitungan CKPN</Link>,
            key: "perhitungan-ckpn",
          },
          {
            label: <Link href="/persetujuan-hasil-ckpn">Persetujuan Hasil Perhitungan CKPN</Link>,
            key: "persetujuan-hasil-ckpn",
          },
          {
            label: <Link href="/laporan-ckpn">Laporan CKPN</Link>,
            key: "laporan-ckpn",
          },
          {
            label: <Link href="/master-data">Master Data</Link>,
            key: "master-data",
          },
        ]}
      />
    </div>
  );
};

export default Navbar;
