import {
  Coment_List_Rating,
  List,
} from "@/components/shared/Comment_Component";
import FAQ_Component from "@/components/shared/FAQ_Component";
import FAQ_Webhosting from "@/components/shared/FAQ_Webhosting";
import Hero_Section_List from "@/components/shared/Hero_Section_List";
import Hostinger_List from "@/components/shared/Hostinger_List";
import Hostinger_Review from "@/components/shared/Hostinger_Review";
import Main_Section from "@/components/shared/Main_Section";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FaWordpress } from "react-icons/fa";

const Web_Hosting_Page = () => {
  return (
    <>
      <Main_Section>
        <Hero_Section_List
          image="/assets/images/hostinger-webhosting-section-1.png"
          variant="blue"
          text="blue"
          price="2.99"
        >
          <p className="font-bold lg:text-lg">
            Up to <span className="text-blue-500">75%</span> off Web Hosting
            <p className="font-semibold text-2xl lg:text-3xl">
              Secure. Speedy. The Way Your Website Should Be
            </p>
          </p>
        </Hero_Section_List>
        <h1 className="flex-center gap-2 font-semibold">
          <FaWordpress className="text-xl" />
          Recommended by <span className="font-bold">WordPress.org</span>
        </h1>
        <Hostinger_Review textColor="black" />
        <Hostinger_List />
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-5 lg:p-10">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              24/7 Support for Your Success
            </h1>
            <List>
              Need help with your website? Get expert assistance via live chat
              or email.
            </List>
            <List>
              Say goodbye to long waits - we will resolve any issues in under 3
              minutes.
            </List>
            <List>
              Eliminate communication barriers - our agents are fluent in 10+
              languages.
            </List>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/images/hostinger-webhosting-section-2.png"}
              alt=""
              width={500}
              height={500}
              className="image-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:grid grid-cols-3">
          <Coment_List_Rating>
            They are the best when it comes to ease of use and definitely the
            best immediate support you receive compared to others.
          </Coment_List_Rating>
          <Coment_List_Rating>
            Hostinger has been the best web hosting provider I have used. What
            sets it apart it is exceptional customer support.
          </Coment_List_Rating>
          <Coment_List_Rating>
            Hostingers customer support has been absolutely phenomenal every
            step of the way.
          </Coment_List_Rating>
        </div>
      </Main_Section>
      <div className="bg-[#2e1a72]">
        <Main_Section>
          <div className="flex flex-col text-white lg:flex-row-reverse gap-10">
            <div className="flex-1 space-y-5 lg:p-10">
              <h1 className="font-semibold text-2xl lg:text-4xl">
                Launching a Website Is Easier With AI
              </h1>
              <List>
                Get a ready-to-launch website with our AI-integrated Hostinger
                Blog Theme.
              </List>
              <List>
                Generate unique and SEO-friendly content using the AI Assistant
                plugin.
              </List>
              <List>
                Save time - let AI select relevant images for you content.
              </List>
            </div>
            <div className="flex-1">
              <Image
                src={"/assets/images/hostinger-webhosting-section-3.png"}
                alt=""
                width={500}
                height={500}
                className="image-cover"
              />
            </div>
          </div>
        </Main_Section>
      </div>
      <Main_Section className="text-blue-900">
        <div className="flex-center flex-col gap-5">
          <h1 className="font-semibold text-center text-2xl lg:text-4xl">
            Unlock the Power of Managed Web Hosting
          </h1>
          <Button>Get Started</Button>
          <List className="text-sm">30-Day-Money-Back Guarantee</List>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-5 lg:p-10">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              Security Is Our Top Priority
            </h1>
            <List>
              Free SSL certificates installed automatically to secure your
              clients information.
            </List>
            <List>
              Malware scanner to proactively detect and remove harmful files
            </List>
            <List>
              Privacy protection to keep your personal information safe.
            </List>
            <List>
              Defend against unwanted access by employing IP and country
              blocking. Included with Hostinger CDN.
            </List>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/images/hostinger-webhosting-section-4.png"}
              alt=""
              width={500}
              height={500}
              className="image-cover"
            />
          </div>
        </div>
      </Main_Section>
      <div className="bg-[#6332be]">
        <Main_Section>
          <div className="flex flex-col lg:flex-row-reverse text-white gap-10">
            <div className="flex-1 space-y-5 lg:p-10">
              <h1 className="font-semibold text-2xl lg:text-4xl">
                Unmatched Website Performance
              </h1>
              <List>
                Experience minimal latency and maximum speed with NVMe storage.
              </List>
              <List>
                Deliver a lighting-fast browsing experience with our in-house
                CDN, ObjectCache and LiteSpeed Web Server technology.
              </List>
              <List>
                Handle peak traffic like a pro, thanks to unlimited bandwidth.
              </List>
            </div>
            <div className="flex-1">
              <Image
                src={"/assets/images/hostinger-webhosting-section-5.png"}
                alt=""
                width={500}
                height={500}
                className="image-cover"
              />
            </div>
          </div>
        </Main_Section>
      </div>
      <Main_Section className="text-blue-900">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="px-5 py-8 border rounded-md space-y-3">
            <h1 className="font-bold text-3xl">techradar</h1>
            <p>
              Hostinger is our number one pick for several reasons. When
              testting its service compared to others, our site performed the
              while being hosted on Hostinger.
            </p>
          </div>
          <div className="px-5 py-8 border rounded-md space-y-3">
            <h1 className="font-bold text-3xl">digital</h1>
            <p>
              After running multiple tests on the Hostinger side, the average
              response time was between 450ms and 625ms, which very good. Simply
              put, speed should be an issue when using Hostinger.
            </p>
          </div>
          <div className="px-5 py-8 border rounded-md space-y-3">
            <h1 className="font-bold text-3xl">cybernews</h1>
            <p>
              For companies with a small or non-existent IT staff, expert
              customer service is a huge perk. It is the best option if you are
              searching specifically for a shared hosting service that is
              affordable and reliable.
            </p>
          </div>
        </div>
        <div className="flex-center flex-col gap-5 text-center">
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Get Started With High-Speed Hosting
          </h1>
          <Button>See Pricing</Button>
          <List>30-Day Money-Back Guarantee</List>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-5 lg:p-10">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              Scale Your Business - We Got Your Back
            </h1>
            <List>
              Prepare for traffic surges - try a higher-tier plan with the free
              24-hour plan boost option
            </List>
            <List>
              Adjust your websites resources up or down with our scalable web
              hosting plans.
            </List>
            <List>
              Boost online visiblity with a free domain name, including .com,
              .net, and 20+ more extensions.
            </List>
            <List>
              Enjoy high uptime and speedy content delivery with a global data
              center network.
            </List>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/images/hostinger-webhosting-section-6.png"}
              alt=""
              width={500}
              height={500}
              className="image-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <div className="flex-1 space-y-5 lg:p-10">
            <h1 className="font-semibold text-2xl lg:text-4xl">
              Migrate to Hostinger Effortlessly
            </h1>
            <List>
              Move as many websites as you want for free with our Automatic
              Website Migration tool.
            </List>
            <List>
              Sit back and relax - our dedicated migration team will ensure a
              smooth transfer.
            </List>
            <List>
              No disruption - your website will stay online during the entire
              migration process.
            </List>
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/images/hostinger-webhosting-section-7.png"}
              alt=""
              width={500}
              height={500}
              className="image-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <Coment_List_Rating star="gold">
            Mostly of the time if there is soomething I am not sure how to do, I
            can find an article all about it in their support section. If I can
            not find a solution I just hop on the live chat and someone is there
            to help.
          </Coment_List_Rating>
          <Coment_List_Rating star="gold">
            I work with almost every hosting company every day, and none of them
            is as simple as Hostinger when managing hosting, SSL, email, file
            management, domain management and client management.
          </Coment_List_Rating>
          <Coment_List_Rating star="gold">
            The most helpful thing about Hostinger is the ease of setting up and
            getting everything up and running. The quick turnaround is what
            makes this platform different from the others. Plus, the pricing is
            super competitive, if not the best, currently.
          </Coment_List_Rating>
        </div>
        <div className="flex-center flex-col gap-5 text-center">
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Get Started With High-Speed Hosting
          </h1>
          <Button>Get Started</Button>
          <List>30-Day Money-Back Guarantee</List>
        </div>
        <div className="text-center space-y-10">
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Website Builder FAQs
          </h1>
          <p>
            Find answers to frequently asked questions about creating your own
            website.
          </p>
          <FAQ_Webhosting />
        </div>
      </Main_Section>
    </>
  );
};

export default Web_Hosting_Page;
