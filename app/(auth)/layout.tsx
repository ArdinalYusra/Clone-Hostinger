import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="hidden md:flex absolute top-8 left-10">
        <Image
          src={"/assets/images/hostinger.png"}
          alt="Hostinger Logo"
          width={100}
          height={100}
        />
      </div>
      {children}
    </div>
  );
}
