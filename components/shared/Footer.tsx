import Image from "next/image";
import Link from "next/link";
import Footer_Mobile from "./Footer_Mobile";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialPinterest,
  TiSocialYoutube,
} from "react-icons/ti";
import { FOOTER_ITEMS } from "@/constants";

const Footer = ({ bgColor }: { bgColor?: "black" | "white" }) => {
  return (
    <footer
      className={`p-5 space-y-5 ${bgColor === "black" ? "bg-black text-white" : "bg-blue-50 text-blue-900"}`}
    >
      <div className="wrapper lg:flex lg:flex-row gap-5 space-y-5">
        <div className="space-y-5">
          <div>
            <Image
              src={
                bgColor === "black"
                  ? "/assets/images/hostinger-logo-white.png"
                  : "/assets/images/hostinger.png"
              }
              alt="Hostinger Logo"
              width={100}
              height={100}
            />
          </div>
          <p className="text-sm lg:max-w-lg">
            We are a web hosting provider on a mission to bring success to
            everyone online. We constantly improve our server technology,
            provide professional support, and simplify site creation with our AI
            Website Builder
          </p>
        </div>
        <div className="space-y-5">
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-5">
            {FOOTER_ITEMS.map((item, i) => (
              <div key={i} className="space-y-3">
                <h1 className="font-semibold text-lg">{item.title}</h1>
                <div className="flex flex-col gap-2">
                  {item.subMenuItems?.map((subItem, i) => (
                    <Link href={subItem.path} key={i} className="text-sm">
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer_Mobile textColor={bgColor === "black" ? "white" : "blue"} />
      <div className="flex flex-row md:px-10 lg:px-20 gap-3 text-3xl text-white">
        <Link href={"/"} className="p-1 bg-blue-500 rounded-md">
          <TiSocialLinkedin />
        </Link>
        <Link href={"/"} className="p-1 bg-blue-500 rounded-md">
          <TiSocialFacebook />
        </Link>
        <Link href={"/"} className="p-1 bg-blue-500 rounded-md">
          <TiSocialInstagram />
        </Link>
        <Link href={"/"} className="p-1 bg-blue-500 rounded-md">
          <TiSocialPinterest />
        </Link>
        <Link href={"/"} className="p-1 bg-blue-500 rounded-md">
          <TiSocialYoutube />
        </Link>
      </div>
      <div className="wrapper space-y-5">
        <hr className="border-b" />
        <div className="lg:flex-between">
          <p className="text-sm">
            © 2004-2024 hostinger.com - Premium Web Hosting, Cloud, VPS, AI
            Website Builder & Domain Registration Services.
          </p>
          <p className="text-sm">Prices are listed without VAT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
