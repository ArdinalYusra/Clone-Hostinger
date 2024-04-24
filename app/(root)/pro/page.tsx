import { List } from "@/components/shared/Coment_Component";
import Hero_Section_List from "@/components/shared/Hero_Section_List";
import Hostinger_Review from "@/components/shared/Hostinger_Review";
import Image from "next/image";
import { FaCheck, FaWordpress } from "react-icons/fa6";

const Pro_Page = () => {
  return (
    <>
      <div className="bg-black">
        <div className="wrapper flex-col p-5 text-white lg:py-10 lg:px-20 space-y-20 lg:space-y-32">
          <Hero_Section_List
            image="/assets/images/hostinger-pro-section-1.png"
            variant="blue"
            text="white"
            price="9.99"
            list1="Manage multiple website from one dahsboard"
            list2="Host customer website under a single plan"
            list3="Expert priority support 24/7"
          >
            <h1 className="font-semibold text-3xl lg:text-4xl">
              Hassle-Free Website Management With Hostinger Pro
            </h1>
          </Hero_Section_List>
          <h1 className="flex-center gap-2 font-semibold">
            <FaWordpress className="text-xl" />
            Recommended by <span className="font-bold">WordPress.org</span>
          </h1>
          <Hostinger_Review textColor="white" />
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-1 p-10 space-y-5">
              <h1 className="font-semibold text-2xl lg:text-4xl">
                All-in-One Dashboard for Maximum Efficiency
              </h1>
              <List>
                Monitor performance, security, and updates of all websites in
                one place
              </List>
              <List>Share access with your clients and get their insights</List>
              <List>Collaborate with team members in real time</List>
            </div>
            <div className="flex-1">
              <Image
                src={"/assets/images/hostinger-pro-section-2.png"}
                alt=""
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#163333]">
        <div className="wrapper flex-col p-5 text-white lg:py-10 lg:px-20 space-y-20 lg:space-y-32">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-1 p-10 space-y-5">
              <h1 className="font-semibold text-2xl lg:text-4xl">
                Our Team Is Here You 24/7
              </h1>
              <List>Our team works 24/7 - get help anytime</List>
              <List>Choose from 10+ languages for seemless communication</List>
              <List>Senior team to get need answers fast</List>
            </div>
            <div className="flex-1">
              <Image
                src={"/assets/images/hostinger-pro-section-3.png"}
                alt=""
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pro_Page;
