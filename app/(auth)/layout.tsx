import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="hidden md:flex absolute top-8 left-10">
        <Link href={"/"}>
          <Image
            src={"/assets/images/hostinger.png"}
            alt="Hostinger Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      {children}
    </div>
  );
}
