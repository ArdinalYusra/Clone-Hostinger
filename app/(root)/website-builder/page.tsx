import { List } from "@/components/shared/Comment_Component";
import FAQ_Website_Builder from "@/components/shared/FAQ_Website_Builder";
import Hero_Section_List from "@/components/shared/Hero_Section_List";
import Hostinger_List from "@/components/shared/Hostinger_List";
import Hostinger_Review from "@/components/shared/Hostinger_Review";
import Main_Section from "@/components/shared/Main_Section";
import Button from "@/components/ui/Button";
import { CREATE_WEBSITE_STEPS, CUSTOMIZATION_TOOLS } from "@/constants";
import Image from "next/image";
import React from "react";

const Website_Builder_Page = () => {
  return (
    <Main_Section>
      <Hero_Section_List
        image="/assets/images/online-website-builder-1.jpg"
        variant="black"
        text="black"
        price="2.99"
      >
        <p className="font-bold lg:text-xl">
          Up to <span className="text-blue-500">75%</span> off Website Builder
        </p>
        <p className="font-semibold text-3xl lg:text-5xl">
          <span className="text-blue-600">Create a Website</span> in Minutes
          with AI
        </p>
      </Hero_Section_List>
      <Hostinger_Review textColor="black" />
      <div className="flex flex-col gap-10">
        <h1 className="text-blue-950 font-semibold text-center text-2xl lg:text-4xl">
          Pick Your Perfect Plan
        </h1>
        <div className="flex-center gap-3">
          <button className="p-2 border border-slate-700 rounded-full"></button>
          <button className="p-2 bg-blue-700 rounded-full"></button>
          <button className="p-2 border border-slate-700 rounded-full"></button>
        </div>
        <Hostinger_List bgPopular="bgOrange" />
      </div>
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div>
          <Image
            src={"/assets/images/online-website-builder-2.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="image-cover"
          />
        </div>
        <div className="flex flex-col gap-7 px-10 text-blue-900">
          <h1 className="text-2xl font-semibold">
            Create a Website in 3 Easy Steps
          </h1>
          <div className="space-y-5">
            {CREATE_WEBSITE_STEPS.map((step, i) => (
              <div key={i} className="space-y-2">
                <h1 className="font-semibold text-xl">{step.title}</h1>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <Button variant="black">Get Started</Button>
        </div>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2">
        <div className="bg-black p-10 text-white space-y-10">
          <h1 className="font-semibold text-2xl">Let AI Do the Hard Work</h1>
          <p>
            Choose the type of website you want and simply describe what you
            need. Let AI craft a unique website for you with relevant images and
            bespoke content. Use our powerful AI tools to fine-tune your website
            until you are ready to hit `Go Live`
          </p>
          <div className="flex-center">
            <Button variant="white">Get Started</Button>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/online-website-builder-3.jpg"}
            alt=""
            height={1000}
            width={1000}
            className="image-cover"
          />
        </div>
      </div>
      <div className="flex-center flex-col text-center text-blue-900 space-y-10">
        <h1 className="font-semibold text-2xl">
          Choose a Website Template That Inspires You
        </h1>
        <p>
          Take advantage of 150 responsive designer-made templates, suitable for
          businesses, eCommerce stores, portofolios, landing page, blogs, and
          more.
        </p>
        <Button variant="black">Get Started</Button>
      </div>
      <div className="flex-center flex-col text-center space-y-10 text-blue-900">
        <h1 className="font-semibold text-2xl">Build A Website Your Way</h1>
        <p>
          Effortlessly perfect your website with user-friendly, intuitive
          customization tools.
        </p>
        <div className="text-blue-900 space-y-10 px-10">
          {CUSTOMIZATION_TOOLS.map((tool, i) => (
            <div key={i} className="flex-center flex-col space-y-3">
              <div>
                <Image
                  src={tool.image}
                  alt={tool.title}
                  height={100}
                  width={100}
                />
              </div>
              <h1 className="font-semibold text-xl">{tool.title}</h1>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
        <Button variant="black">Get Started</Button>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 text-white">
        <div className="bg-black p-10 space-y-10">
          <h1 className="font-semibold text-2xl">
            Earn More With eCommerce Feature
          </h1>
          <p>
            Everything you need to launch and grow an eCommerce business, all in
            one place. Sell up to 500 products with no hidden transaction fees.
            Pick from 20+ payment methods to provide your customers with a
            completely seemless shopping experience
          </p>
          <div className="flex-center">
            <Button variant="white">Get Started</Button>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/online-website-builder-4.jpg"}
            alt=""
            height={1000}
            width={1000}
            className="image-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:grid grid-cols-2">
        <div className="space-y-10 px-10 text-blue-900">
          <h1 className="font-semibold text-2xl">
            Drive Traffic That Converts
          </h1>
          <div className="space-y-5">
            <List>
              Monetize your website with ease by displaying targeted ads.
            </List>
            <List>
              Chat directly with your customers without switching between apps.
            </List>
            <List>
              Track website data and make business decisions with cofindence.
            </List>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/online-website-builder-5.jpg"}
            alt=""
            height={1000}
            width={1000}
            className="image-cover"
          />
        </div>
      </div>
      <div className="flex-center flex-col space-y-10 py-10 px-5 lg:py-20 lg:px-40 bg-[#3b60c4] font-semibold text-white text-center">
        <p className="text-lg">All-in-One Solutions</p>
        <h1 className="text-4xl">
          Start creating your website today.{" "}
          <span className="text-yellow-300">It is easier than you think</span>{" "}
          with Hostinger AI Website Builder.
        </h1>
        <Button variant="white">Get started</Button>
      </div>
      <div className="text-center space-y-10">
        <h1 className="font-semibold text-2xl lg:text-4xl">Web Hosting FAQs</h1>
        <p>
          Find answers to frequently asked questions about website hosting
          services.
        </p>
        <FAQ_Website_Builder />
      </div>
    </Main_Section>
  );
};

export default Website_Builder_Page;
