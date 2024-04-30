"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type FAQProps = {
  children: React.ReactNode;
  title: string;
  variant?: "black" | "white";
};

const FAQ_Component = ({ children, title, variant }: FAQProps) => {
  const [submenu, setSubmenu] = useState(null);

  const handleClick = (index: any) => {
    setSubmenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div>
        <button
          onClick={() => handleClick(!submenu)}
          className={`flex-between gap-3 w-full px-3 lg:px-5 py-5 lg:py-8 ${submenu ? "rounded-t" : "rounded"} font-semibold text-xl lg:text-2xl text-start ${variant === "black" ? "bg-[#1b2b2c] text-white border-none" : "bg-white text-blue-900 border"}`}
        >
          {title}
          <IoIosArrowDown
            className={`${submenu && "rotate-180"} duration-500 transition-transform ease-in-out`}
          />
        </button>
        <div
          className={`flex flex-col gap-5 p-5 text-start ${variant === "black" ? "bg-[#1b2b2a] text-white border-none" : "bg-white text-slate-600 border"} rounded-b ${submenu ? "visible" : "hidden"}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default FAQ_Component;

export function Semibold({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-blue-600">{children}</span>;
}

export function Semibold_Pink({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-pink-600">{children}</span>;
}
