"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MenuContent = ({ title, subTitle, href }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col hover:text-orange active:text-orange active:font-bold px-5 border-b transition-all ">
      <Link className={` ${pathname === `${href}` ? "text-orange font-bold" : ""}`} href={`${href}`}>
        <h1>{title}</h1>
        <h1 className={` ${pathname === `${href}` ? "underline underline-offset-4 active:underline " : "hover:underline hover:underline-offset-4 active:underline"}`}>{subTitle}</h1>
      </Link>
    </div>
  );
};

export default MenuContent;
