import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import NaveBar from "../components/NaveBar";

export default function DashboaredLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-1/6 md:w-1/7 lg:2/6  xl:2/6 p-4">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src={"/logo.png"} height={32} width={32} alt="logo" />
          <span className="hidden lg:block">School</span>
        </Link>
        <Menu />
      </div>
      <div className="w-5/6 md:w-5/6 lg:4/6 xl:4/6 bg-gray-100 overflow-scroll flex flex-col">
        <NaveBar />

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
