"use client";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAVLINKS } from "@/constants";
import Button from "../ui/Button";
import { IoMdClose } from "react-icons/io";
import Login_Button from "../auth/Login_Button";
import { useSession } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = ({ bgColor }: { bgColor?: "black" | "blue" | "white" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navMobile]);

  const handleClickNavMobile = () => {
    setNavMobile(!navMobile);
  };

  return (
    <div
      className={`sticky top-0 left-0 z-50 ${isScrolled || navMobile ? "bg-white text-black shadow-md" : { bgColor }} ${bgColor === "black" && !isScrolled && !navMobile ? "bg-black text-white" : bgColor === "blue" && !isScrolled && !navMobile ? "bg-blue-600 text-white" : "text-black"} p-3 lg:px-10 lg:py-5`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-5">
          <Link href={"/"}>
            <Image
              src={
                isScrolled || bgColor === "white" || navMobile
                  ? "/assets/images/hostinger.png"
                  : "/assets/images/hostinger-logo-white.png"
              }
              alt="Hostinger Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="hidden lg:block">🏁 English</div>
        </div>
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-8">
            {NAVLINKS.map((link, i) => (
              <Link
                href={link.path}
                key={i}
                className={`${bgColor === "black" ? "hover:text-pink-600" : bgColor === "blue" ? "hover:text-blue-300" : "hover:text-slate-500"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {session && (
            <div className="flex-center gap-2">
              <FaRegUserCircle className="text-3xl" />
              <span className="font-semibold">{session?.user?.name}</span>
            </div>
          )}
          <div
            className={`ring-2 ${bgColor === "black" || bgColor === "blue" ? "ring-white" : "ring-black"} px-3 py-2 font-semibold rounded-md`}
          >
            <Login_Button />
          </div>
        </div>
        <div className="flex lg:hidden text-xl">
          <button onClick={handleClickNavMobile}>
            {navMobile ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
          <div
            className={`${navMobile ? "block" : "hidden"} absolute top-10 left-0 flex flex-col justify-between min-h-screen min-w-full py-10 px-5 bg-white`}
          >
            <div className="space-y-10">
              {session && (
                <div className="flex-center gap-2">
                  <FaRegUserCircle className="text-3xl" />
                  <span className="font-semibold">{session?.user?.name}</span>
                </div>
              )}
              <div className="flex flex-col gap-5">
                {NAVLINKS.map((link, i) => (
                  <Link
                    href={link.path}
                    key={i}
                    className="font-semibold text-blue-900"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="font-semibold">🏁 English</div>
            </div>
            <div className="mb-16">
              <Link href={"/login"}>
                <Button variant="outline" className="flex w-full">
                  {session ? "Logout" : "Login"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
