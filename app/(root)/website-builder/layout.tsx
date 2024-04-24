import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Builder | Create Your Website in Minutes With Ease",
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
