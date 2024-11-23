import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <Link href="/" className="mt-4 text-white underline underline-offset-8 hover:text-light-brown transition-all">
        Back to Home
      </Link>
    </div>
  );
};
export default Page;
