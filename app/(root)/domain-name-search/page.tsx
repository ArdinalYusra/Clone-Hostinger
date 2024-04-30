"use client";

import Domain_List_Component from "@/components/shared/Domain_List_Component";
import FAQ_Domain from "@/components/shared/FAQ_Domain";
import Main_Section from "@/components/shared/Main_Section";
import Button from "@/components/ui/Button";
import {
  DOMAINS,
  DOMAIN_LIST,
  DOMAIN_NAME_LIST,
  THINGS_BUY_DOMAINS,
} from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { CgCreditCard } from "react-icons/cg";
import { IoIosArrowDown, IoIosRadioButtonOff } from "react-icons/io";
import { PiChatsBold, PiIdentificationBadgeBold } from "react-icons/pi";

const Domain_Name_Search_Page = () => {
  const [selectedDomain, setSelectedDomain] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [domainSlider, setDomainSLider] = useState(0);

  const handleClickDomain = () => {
    setSelectedDomain(!selectedDomain);
  };

  return (
    <>
      <div className="bg-blue-600">
        <Main_Section className="text-center font-medium text-white">
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
          <div className="hidden relative lg:flex-center text-sm w-[400px] mx-auto">
            <button
              onClick={handleClickDomain}
              disabled={selectedDomain === true ? false : true}
              className={`flex-1 bg-blue-600 text-start px-5 py-2.5 outline rounded-full ${!selectedDomain && "absolute -top-1 -left-1 py-3.5 bg-blue-950 outline-none"} `}
            >
              Find New Domain
            </button>
            <button
              onClick={handleClickDomain}
              disabled={selectedDomain === true}
              className={`flex gap-3 flex-1 bg-blue-600 justify-end px-5 py-2.5 outline rounded-full ${selectedDomain && "absolute -top-1 -right-1 py-3.5 bg-blue-950 outline-none"} `}
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
              <div className="lg:flex items-end gap-5 space-y-5 lg:px-20">
                <input
                  type="text"
                  placeholder="Enter your desired domain name"
                  className="w-full lg:w-4/5 px-3 py-2.5 text-black rounded-md"
                />
                <Button className="w-full lg:w-1/5 bg-pink-500">Search</Button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 lg:px-40">
                {DOMAINS.map((domain, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-3 text-sm rounded-md cursor-pointer border"
                  >
                    <p className="font-bold">{domain.name}</p>
                    <p className="line-through">{domain.price}</p>
                    <p className="font-bold">{domain.discount}</p>
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
        </Main_Section>
      </div>
      <Main_Section className="text-blue-900">
        <h1 className="font-semibold text-2xl lg:text-4xl text-center">
          Choose From the Most Popular Domains
        </h1>
        <div className="lg:hidden flex justify-center gap-3">
          {DOMAIN_LIST.map((_, i) => (
            <button key={i} onClick={() => setDomainSLider(i)}>
              {domainSlider === i ? (
                <IoIosRadioButtonOff className="bg-blue-500 rounded-full" />
              ) : (
                <IoIosRadioButtonOff />
              )}
            </button>
          ))}
        </div>
        <div className="lg:hidden flex-center py-3 px-20 overflow-hidden">
          {DOMAIN_LIST.map((domain, i) => (
            <div
              key={i}
              className={`duration-500 transition-all ${domainSlider === i ? "visible" : "hidden"}`}
            >
              <Domain_List_Component
                image={domain.image}
                price={domain.price}
                percent={domain.percent}
                discount={domain.discount}
              >
                {domain.descrition}
              </Domain_List_Component>
            </div>
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-4 gap-5 p-5">
          {DOMAIN_LIST.map((domain, i) => (
            <Domain_List_Component
              key={i}
              image={domain.image}
              price={domain.price}
              percent={domain.percent}
              discount={domain.discount}
            >
              {domain.descrition}
            </Domain_List_Component>
          ))}
        </div>
      </Main_Section>
      <Main_Section className="bg-blue-50 text-blue-900">
        <h1 className="font-semibold text-2xl lg:text-4xl text-center">
          6 Things To Remember Before You Buy Domains
        </h1>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3">
          {THINGS_BUY_DOMAINS.map((domain, i) => (
            <div key={i} className="flex-center flex-col text-center gap-5">
              <div className="space-y-5">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  height={100}
                  width={100}
                />
              </div>
              <h1 className="font-bold text-lg">{domain.title}</h1>
              <p>{domain.description}</p>
            </div>
          ))}
        </div>
      </Main_Section>
      <Main_Section className="text-blue-900">
        <div className="flex flex-col lg:flex-row-reverse gap-5">
          <div className="flex-1 lg:p-10 space-y-5">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              Free Privacy Protection
            </h1>
            <div className="text-slate-700 space-y-5">
              <p>
                When you register a domain, your personal information is usually
                available on public databases such as WHOIS.
              </p>
              <p>
                As a reputable register, Hostinger will protect your domain
                registration data.
              </p>
              <p>
                Our domain privacy protect service will keep your domain name
                registration information hidden from third parties for maximum
                security.
              </p>
            </div>
            <button className="font-semibold text-blue-600">
              Domain Name Search
            </button>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/images/hostinger-domain-section-1.png"}
              alt=""
              height={1000}
              width={1000}
              className="image-cover"
            />
          </div>
        </div>
        <div className="space-y-10 lg:grid grid-cols-2 gap-5">
          <div className="flex-1 lg:p-10 space-y-5">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              Purchase a Domain Already? Transfer It to Hostinger Today
            </h1>
            <p className="text-slate-700">
              Manage your website domain at Hostinger by quickly transferring it
              from your current register - it only takes a few clicks.
            </p>
            <button className="font-semibold text-blue-600">
              Domain Name Search
            </button>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/images/hostinger-domain-section-2.png"}
              alt=""
              height={1000}
              width={1000}
              className="image-cover"
            />
          </div>
        </div>
        <div className="space-y-10 lg:grid grid-cols-2 gap-5">
          <div className="flex-1 lg:p-10 space-y-5">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              Register a Domain Name For Free
            </h1>
            <p className="text-slate-700">
              Most of Hostingers web hosting packages come with free domains.
              You can get popular generic top-level domain names like .com,
              .net, .org, and other extensions for free.
            </p>
            <button className="font-semibold text-blue-600">
              Domain Name Search
            </button>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/images/hostinger-domain-section-3.png"}
              alt=""
              height={1000}
              width={1000}
              className="image-cover"
            />
          </div>
        </div>
        <div className="text-center space-y-5">
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Why Buy Domain Names at Hostinger?
          </h1>
          <p>
            Hostinger offers reliable domain registration service with instant
            activation, dedicated live support, and full DNS management.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-3">
            <div>
              <PiChatsBold className="text-3xl" />
            </div>
            <h1 className="font-semibold text-xl">
              24/7 Live technical Support
            </h1>
            <p>
              Our Customer Success team is here for you any time of the day. We
              have made our domain name registration process as easy as
              possible, but everyone needs a helping hand sometimes. Just
              contact us - we will be happy to assits.
            </p>
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <PiIdentificationBadgeBold className="text-3xl" />
            </div>
            <h1 className="font-semibold text-xl">Trusted Domain Registrar</h1>
            <p>
              Hostinger is an ICANN-accredited registrar and web host trusted by
              milions of people worldwide. We offer a comprehensive registration
              service with no more than 100 domain extensions so that you can
              have plenty of choises.
            </p>
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <CgCreditCard className="text-3xl" />
            </div>
            <h1 className="font-semibold text-xl">
              Instant Setup and Easy Control
            </h1>
            <p>
              Once you complete your domain search, we will guide you through
              the website domain registration process. It only takes a few
              clicks, and no technical knowledge is required.
            </p>
          </div>
        </div>
      </Main_Section>
      <div className="bg-[#3a52da]">
        <Main_Section className="text-white text-center lg:text-start lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-5">
              <h1 className="font-semibold text-3xl lg:text-4xl">
                The Future Is .online
              </h1>
              <p>
                Buy a domain name that lets the world know you are always online
              </p>
              <h1 className="font-semibold text-xl lg:text-2xl">
                Build an Online Brand
              </h1>
              <p>
                Your domain makes your brand stand out and also captures the
                essence of your website. Use the domain finder to register a
                .online web address and let people know that you are creating a
                modern site or next-generation tech-driven company.
              </p>
              <h1 className="font-semibold text-xl lg:text-2xl">
                Affordable, Available, Unique
              </h1>
              <p>
                A{" "}
                <span className="font-semibold underline">
                  .online domain name
                </span>
                is a new TLD for your site that communicates that your brand is
                not tied to a specific region but is ready for a global
                audience. Since it is a new extensions, you are much more likely
                to find an available domain name or a specific name that would
                otherwise be too expensive.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src={"/assets/images/hostinger-domain-section-4.png"}
                alt=""
                height={1000}
                width={1000}
                className="image-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-10">
            <div className="flex-1 space-y-5">
              <h1 className="font-semibold text-3xl lg:text-4xl">
                .xyz Domain Names Are Always Available
              </h1>
              <p>
                This unique extnesions can help you successfully pass the domain
                name available check.
              </p>
              <h1 className="font-semibold text-xl lg:text-2xl">
                Stand Out From the Crowd
              </h1>
              <p>
                The right domains are not always the most expensive or popular.
                The main concern when searching for a domain is to mkae sure
                that it will stand out online. A{" "}
                <span className="font-semibold underline">.xyz domain</span> is
                almost always available - and it is memorable too.
              </p>
              <h1 className="font-semibold text-xl lg:text-2xl">
                Dream Domains at a Great Price
              </h1>
              <p>
                Use our domain checker tool to find out if your dream website
                name is available. You could become the registered owner of that
                domain for a great price today.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src={"/assets/images/hostinger-domain-section-5.png"}
                alt=""
                height={1000}
                width={1000}
                className="image-cover"
              />
            </div>
          </div>
        </Main_Section>
      </div>
      <Main_Section>
        <div className="text-blue-900 space-y-5">
          <h1 className="font-semibold text-center text-2xl lg:text-4xl">
            Explore the Possibilities from Our TLD List
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center md:justify-start gap-3">
            {DOMAIN_NAME_LIST.slice(
              0,
              viewMore ? 12 : DOMAIN_NAME_LIST.length
            ).map((item, i) => (
              <li
                key={i}
                className="font-bold mx-auto md:mx-0 underline cursor-pointer"
              >
                .{item}
              </li>
            ))}
          </div>
          <div className="flex-center">
            <button
              onClick={() => setViewMore(!viewMore)}
              className="flex-center gap-2 font-semibold text-blue-700"
            >
              View More{" "}
              <IoIosArrowDown
                className={`${viewMore ? "rotate-180" : ""} duration-500 transition-transform`}
              />
            </button>
          </div>
        </div>
        <div className="text-center space-y-10">
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Domain Name Search FAQs
          </h1>
          <p>
            Find answers to frequently asked questions about our domain checker
            tool.
          </p>
          <FAQ_Domain />
        </div>
      </Main_Section>
    </>
  );
};

export default Domain_Name_Search_Page;
