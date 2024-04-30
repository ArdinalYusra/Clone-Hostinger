"use client";

import { FOOTER_ITEMS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer_Mobile = ({ textColor }: { textColor: "white" | "blue" }) => {
  const [submenu, setSubmenu] = useState(null);

  const handleClick = (index: any) => {
    setSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div
        className={`flex md:hidden flex-col gap-3 ${textColor === "white" ? "text-white" : "text-blue-900"}`}
      >
        {FOOTER_ITEMS.map((item, i) => (
          <div key={i}>
            <li
              onClick={() => handleClick(i)}
              className="flex-between font-semibold text-lg"
            >
              {item.title}
              <IoIosArrowDown
                className={`${submenu === i && "rotate-180"} duration-500 transition-transform ease-in-out`}
              />
            </li>
            <div
              className={`flex flex-col gap-2 py-3 ${submenu === i ? "visible" : "hidden"}`}
            >
              {item.subMenuItems?.map((subItem, i) => (
                <Link href={subItem.path} key={i} className="text-sm px-1">
                  {subItem.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer_Mobile;
