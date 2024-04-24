import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Name Search - Check and Buy a Domain in a Minutes",
  description: "Made by Ardinal Yusra",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
