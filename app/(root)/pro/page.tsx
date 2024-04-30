import {
  Coment_List_Rating,
  List,
  Review_Component,
} from "@/components/shared/Comment_Component";
import FAQ_Pro from "@/components/shared/FAQ_Pro";
import Hero_Section_List from "@/components/shared/Hero_Section_List";
import Hostinger_List from "@/components/shared/Hostinger_List";
import Hostinger_Review from "@/components/shared/Hostinger_Review";
import Main_Section from "@/components/shared/Main_Section";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FaWordpress } from "react-icons/fa6";

const Pro_Page = () => {
  return (
    <>
      <div className="bg-black text-white">
        <Main_Section>
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
                className="image-cover"
              />
            </div>
          </div>
        </Main_Section>
        <div className="bg-[#163333]">
          <Main_Section>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1 p-10 space-y-5">
                <h1 className="font-semibold text-2xl lg:text-4xl">
                  Our Team Is Here You 24/7
                </h1>
                <List>Our team works 24/7 - get help anytime</List>
                <List>
                  Choose from 10+ languages for seemless communication
                </List>
                <List>Senior team to get need answers fast</List>
              </div>
              <div className="flex-1">
                <Image
                  src={"/assets/images/hostinger-pro-section-3.png"}
                  alt=""
                  height={1000}
                  width={1000}
                  className="image-cover"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 px-3 md:px-10 rounded-md">
              <Coment_List_Rating variant="black">
                One of the customer service you can find. Instant support.
                Patient, detailed and very hands-on support. I am a fan!
              </Coment_List_Rating>
              <Coment_List_Rating variant="black">
                The best support in the industry. Amazing. Never fails to
                impress. Keep it up.
              </Coment_List_Rating>
              <Coment_List_Rating variant="black">
                Support is fast and good. A company that still puts the customer
                first!
              </Coment_List_Rating>
            </div>
          </Main_Section>
        </div>
        <Main_Section>
          <h1 className="font-bold text-2xl lg:text-4xl">
            Web Hosting for Professionals and Agencies
          </h1>
          <div>
            <Hostinger_List
              variant="white"
              outline="outlineWhite"
              bgPopular="bgPink"
            />
          </div>
          <div className="flex-center">
            <button className="font-semibold text-lg text-blue-400 hover:text-blue-800">
              Payment terms
            </button>
          </div>
          <div className="flex flex-col lg:flex-row space-y-5">
            <div className="flex-1 space-y-5 p-10">
              <h1 className="font-semibold text-2xl lg:text-4xl">
                Unbeatable Security and Speed
              </h1>
              <List>
                Up to 12 times better WordPress performance with LiteSpeed Web
                Servers
              </List>
              <List>
                Free Hostinger CDN - 10 servers in four continents for up to 40%
                faster loading times
              </List>
              <List>Keep your files secure with automatic backups</List>
              <List>99.9% uptime guarantee</List>
              <List>
                Enhance website security with Cloudflare Protected Nameservers
              </List>
            </div>
            <div className="flex-1">
              <Image
                src={"/assets/images/hostinger-pro-section-4.png"}
                alt=""
                height={1000}
                width={1000}
                className="image-cover"
              />
            </div>
          </div>
        </Main_Section>
        <div className="bg-[#3647e2]">
          <Main_Section>
            <div className="flex flex-col lg:flex-row-reverse gap-5">
              <div className="flex-1 space-y-5 p-10">
                <h1 className="font-semibold text-2xl lg:text-4xl">
                  Unlimited Free Website Migrations
                </h1>
                <List>Move as many websites as you want free of charge</List>
                <List>
                  Our dedicated team will assist you every step of the way
                </List>
                <List>Your websites will be transferred within 24 hours</List>
              </div>
              <div className="flex-1">
                <Image
                  src={"/assets/images/hostinger-pro-section-5.png"}
                  alt=""
                  height={1000}
                  width={1000}
                  className="image-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Review_Component
                name="Chris W.Balmer"
                job="CWB Consultancy"
                variant="blue"
              >
                When I was with the previous provider, I felt their problems
                began affecting my day job. I was getting calls from furious
                clients during the daytime, and I needed to jump in and try to
                understand what was happening. Now, I dont hear a thing because
                everything is running smoothly.
              </Review_Component>
              <Review_Component
                name="David Shaw"
                job="Creative Graphics UK"
                variant="blue"
              >
                The migration to Hostinger was really smooth because I was able
                to ask your Customer Success team to do it for me. They simply
                brought all of the websites over from different platforms and
                set them up. That was really helpful for someone like me who is
                working with lots of clients on my own
              </Review_Component>
              <Review_Component
                name="Ocsar Franco"
                job="Milla Computer"
                variant="blue"
              >
                There has been no issue with moving websites so far, and I have
                zero complaints. I usually have a contract ready for clients to
                reassure them that nothing will happen to their website so they
                had feel confident about me handling the transfer.
              </Review_Component>
            </div>
            <div className="flex-center">
              <Button variant="outlineWhite">Browse more client stories</Button>
            </div>
          </Main_Section>
        </div>
        <Main_Section>
          <div className="space-y-5">
            <div className="text-center space-y-10">
              <h1 className="font-semibold text-2xl lg:text-4xl">
                Profesional Web Hosting FAQs
              </h1>
              <p>
                Find answers to frequently asked questions about Hostinger Pro
                services.
              </p>
              <FAQ_Pro />
            </div>
          </div>
        </Main_Section>
      </div>
    </>
  );
};

export default Pro_Page;
