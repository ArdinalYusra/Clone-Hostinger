"use client";

import Main_Section from "@/components/shared/Main_Section";
import Button from "@/components/ui/Button";
import { DOMAINS } from "@/constants";
import { useState } from "react";
import { BsStars } from "react-icons/bs";

const Domain_Name_Search_Page = () => {
  const [selectedDomain, setSelectedDomain] = useState(false);

  const handleClickDomain = () => {
    setSelectedDomain(!selectedDomain);
  };
  return (
    <>
      <div className="bg-blue-600 ">
        <Main_Section className="text-center text-white space-y-10">
          <div className="font-medium space-y-10">
            <h1 className="font-bold text-3xl lg:text-4xl">
              Search and Buy a Domain In Minutes
            </h1>
            <p className="text-sm lg:text-base">
              Use our domain checker tool find the perfect name for your online
              project.
            </p>
            <div className="flex flex-col lg:hidden justify-start items-start space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={handleClickDomain}
                  className="relative p-3 rounded-full outline"
                  disabled={selectedDomain === true ? false : true}
                >
                  <span
                    className={` ${selectedDomain && "hidden"} absolute top-[25%] left-[25%] p-1.5 bg-white rounded-full`}
                  ></span>
                </button>
                <span>Find New Domain</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleClickDomain}
                  className="relative p-3 rounded-full outline"
                  disabled={selectedDomain === true}
                >
                  <span
                    className={` ${!selectedDomain && "hidden"} absolute top-[25%] left-[25%] p-1.5 bg-white rounded-full`}
                  ></span>
                </button>
                <span>Generate Domain Using AI</span>
              </div>
            </div>
            <div className="hidden relative lg:flex-center w-[500px] mx-auto">
              <button
                onClick={handleClickDomain}
                className={`flex-1 bg-blue-600 text-start px-10 py-2.5 outline rounded-full ${selectedDomain && "absolute -top-1 -left-1 py-3.5 bg-blue-950 outline-none"} `}
              >
                Find New Domain
              </button>
              <button
                onClick={handleClickDomain}
                className={`flex gap-3 flex-1 bg-blue-600 justify-end px-10 py-2.5 outline rounded-full ${!selectedDomain && "absolute -top-1 -right-1 py-3.5 bg-blue-950 outline-none"} `}
              >
                <BsStars className="text-xl" />
                Generate Domain Using AI
              </button>
            </div>
            {selectedDomain ? (
              <div className="flex-center flex-col space-y-5">
                <h1 className="font-bold text-xl">Generate Domain Using AI</h1>
                <p className="text-sm">
                  Find unique domain name ideas that reflect your brand identity
                </p>
                <p className="max-w-[680px] bg-white py-3 pl-5 pr-10 sm:pr-5 font-normal text-slate-600 text-start rounded-md">
                  Write a short description about your project, for example:
                  &quot;Non-profit organization that helps plant trees&quot;.
                </p>
                <Button className="flex-center gap-3 bg-pink-500 py-3 px-12 text-lg">
                  <BsStars className="text-xl" />
                  Generate
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Enter your desired domain name"
                    className="w-full px-3 py-2.5 rounded-md"
                  />
                  <Button className="w-full bg-pink-500">Search</Button>
                </div>
                <div className="grid grid-cols-4 gap-3 space-y-5 border p-5">
                  {DOMAINS.map((domain, i) => (
                    <div
                      key={i}
                      className="flex flex-col flex-1 border p-3 space-y-2 rounded-md"
                    >
                      <span className="font-bold">{domain.name}</span>
                      <span className="line-through">{domain.price}</span>
                      <span className="font-bold">{domain.discount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm">
                  *1st year with a 2 more years registration
                </p>
                <p>
                  Free WHOIS privacy protection is included with every eligable
                  domain registration.
                </p>
                <div className="flex-center gap-2">
                  <span>Already bought a domain</span>
                  <button className="font-bold underline">Transfer it</button>
                </div>
              </div>
            )}
          </div>
        </Main_Section>
      </div>
      <Main_Section>
        <h1 className="font-semibold text-2xl lg:text-4xl text-center"></h1>
      </Main_Section>
    </>
  );
};

export default Domain_Name_Search_Page;
