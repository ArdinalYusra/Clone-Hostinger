import {
  Coment_List,
  Coment_List_Rating,
  List,
  Review_Component,
} from "@/components/shared/Comment_Component";
import Hero_Section_List from "@/components/shared/Hero_Section_List";
import Hostinger_List from "@/components/shared/Hostinger_List";
import Hostinger_Review from "@/components/shared/Hostinger_Review";
import Main_Section from "@/components/shared/Main_Section";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <Main_Section>
      <Hero_Section_List
        image="/assets/images/hostinger-hero-section.png"
        variant="blue"
        text="blue"
        price="2.99"
      >
        <p className="font-semibold text-2xl lg:text-3xl">
          Everything You Need to Create a Website
        </p>
        <p className="font-bold lg:text-lg">
          Up to <span className="text-blue-500">75%</span> off Hosting + Website
          Builder
        </p>
      </Hero_Section_List>
      <Hostinger_Review textColor="black" />
      <div className="flex flex-col gap-10">
        <h1 className="text-blue-950 font-semibold text-center text-2xl lg:text-4xl">
          Pick Your Perfect Plan
        </h1>
        <Hostinger_List />
      </div>
      <div className="flex-center flex-col text-center pt-20 bg-slate-50 space-y-10">
        <h1 className="text-3xl font-semibold text-blue-900">
          DATA Centers All Round the World
        </h1>
        <p className="text-sm px-20">
          Our web hosting, WordPress hosting, and cloud hosting plans offer
          server locations in: USA, United Kingdom, France, India, Singapore,
          Brazil, Lithuania, and the Netherlands
        </p>
        <Image
          src={"/assets/images/maps.png"}
          alt="Maps"
          height={300}
          width={300}
          className="image-cover"
        />
      </div>
      <div className="lg:grid grid-cols-2 gap-5">
        <div className="flex-center flex-col text-blue-950 gap-5">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            All-In-One Website Solution
          </h1>
          <div className="space-y-5">
            <List>Managed up to 100 websites</List>
            <List>Register a domain name for free</List>
            <List>set up profesional business email address</List>
            <List>Optimize your workflow with managed WordPress hosting</List>
            <List>Launch websites quickly with our Website Builder</List>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/hostinger-hero-section-2.png"}
            alt=""
            height={300}
            width={300}
            className="image-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-3 md:px-10 rounded-md">
        <Coment_List_Rating>
          Easy to use, intuitive and fluid interface, support always willing to
          assist in problem that may appear
        </Coment_List_Rating>
        <Coment_List_Rating>
          Easy to use platform, very good and fast support. Highly recommended
        </Coment_List_Rating>
        <Coment_List_Rating>
          Even thought I am a newbie in this world it has been very easy for me
          to understand and managed my site.
        </Coment_List_Rating>
      </div>
      <div className="bg-slate-50 py-10 space-y-10 lg:grid grid-cols-2 gap-5">
        <div className="flex-center flex-col gap-5 text-blue-900 px-10">
          <h1 className="font-semibold text-3xl">Maximize Website Speed</h1>
          <List>
            Maximize website loading speed with LiteSpeed Web Server technology.
          </List>
          <List>
            Enjoy optimized performance with advanced cache solutions.
          </List>
          <List>
            Reduce website response times up to 3 times with Object Cache for
            WordPress.
          </List>
        </div>
        <div className="p-5">
          <Image
            src={"/assets/images/hostinger-hero-section-3.png"}
            alt=""
            height={300}
            width={300}
            className="image-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-3 md:px-10 rounded-md">
        <Coment_List>
          <h1 className="font-semibold text-xl">bitcatchat</h1>
          <p>
            Speed test results of our Hostinger US test site came back with a
            worldwide average of a blazing fast 143 ms, which ranks them as one
            of our A+ top tier hosts!
          </p>
        </Coment_List>
        <Coment_List>
          <h1 className="font-semibold text-xl">wpbeginner</h1>
          <p>
            If you have a small business website, an online store, or a growing
            blog, your website can easily handle sudden traffic spikes.
          </p>
        </Coment_List>
        <Coment_List>
          <h1 className="font-semibold text-xl">WEBSITE PLANET</h1>
          <p>
            The average loading time of my fully-fledged landing page was a
            phenomenal 1.56s, and uptime over a few months of testing was
            upwards of 99.99%, exactly as promised.
          </p>
        </Coment_List>
      </div>
      <div className="space-y-10 lg:grid grid-cols-2 gap-5">
        <div className="flex-center flex-col gap-5 text-blue-900 px-10">
          <h1 className="font-semibold text-3xl">
            Our Team is Here to Help You 24/7
          </h1>
          <List>
            Receive help from our agents anytime via live chat support
          </List>
          <List>Follow step-by-step video walkthroughs and guides.</List>
          <List>Access a vast knowledgebase of in-depth tutorials</List>
        </div>
        <div className="p-5">
          <Image
            src={"/assets/images/hostinger-hero-section-4.png"}
            alt=""
            height={300}
            width={300}
            className="image-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-3 md:px-10 rounded-md">
        <Coment_List>
          One of the best customer service you can find. Instant support.
          Patient, detailed and very hands-on support. I am a fan!
        </Coment_List>
        <Coment_List>
          The best support in the industry. Amazing. Never fails to impress.
          Keep it up.
        </Coment_List>
        <Coment_List>
          Support is fast and good. A company that still puts the customer
          first!
        </Coment_List>
      </div>
      <div className="flex-center flex-col gap-5 text-center">
        <h1 className="font-semibold text-3xl text-blue-900">
          Join 2,002,312 Website Owners
        </h1>
        <Button>Get Started</Button>
        <List>30-Day Money-Back Guarantee</List>
      </div>
      <div className="flex flex-col gap-5 px-5 py-10 bg-blue-600 text-white">
        <div className="lg:grid grid-cols-2 gap-5">
          <div className="p-5 md:p-10 space-y-5">
            <h1 className="font-semibold text-2xl">
              Advanced Security Features
            </h1>
            <List>
              Get unlimited SSL security certificates to encrypt your websites
              traffic.
            </List>
            <List>
              Protect your website from DDoS attack with Cloudflare protected
              nameserver
            </List>
            <List>Secure your files with automatic backups</List>
            <List>
              Ensure your website is up and running with our 99.9% uptime
              guarantee
            </List>
          </div>
          <div>
            <Image
              src={"/assets/images/hostinger-hero-section-5.png"}
              alt=""
              height={300}
              width={300}
              className="image-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 text-white">
          <div className="flex-1 bg-blue-700 py-5 px-10 space-y-3">
            <h1 className="font-bold text-xl">PCMAG.COM</h1>
            <p>
              Hostinger proved itself a reliable web hosting service. In fact,
              our test site didnt go down once during the 14-day observation
              period.
            </p>
          </div>
          <div className="flex-1 bg-blue-700 py-5 px-10 space-y-3">
            <h1 className="font-semibold">CNET.com</h1>
            <p>
              Plans include SSL certificates and all servers have an advanced
              security module to protect your data.
            </p>
          </div>
          <div className="flex-1 bg-blue-700 py-5 px-10 space-y-3">
            <h1 className="font-bold text-xl">SFGATE</h1>
            <p>
              With DDoS protection, auto-updates, automatic website backups, and
              other security measures, you can rest assured that your website is
              secured.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-2 gap-5 lg:p-10">
        <div className="px-10 space-y-5">
          <h1 className="font-semibold text-2xl text-blue-900">
            Free Migration
          </h1>
          <List>
            Transfer your website using our free automatic website migration
            tool
          </List>
          <List>Our agents will guide you in every step of the way</List>
          <List>Your website will be transferred within 24 hours.</List>
        </div>
        <div>
          <Image
            src={"/assets/images/hostinger-hero-section-6.png"}
            alt=""
            height={300}
            width={300}
            className="image-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 px-3 md:px-10 rounded-md">
        <Coment_List>
          I have migrated to Hostinger few months ago. I am extremely satisfied
          with the hosting, and with their support.
        </Coment_List>
        <Coment_List>
          Migrated over a website and email from another provider. Hostinger UI
          is easy to use and the support was quick, friendly, and very helpful.
        </Coment_List>
        <Coment_List>
          Very positive experience as a new customer. I migrated my website
          hosting and the support was amazing and very responsive.
        </Coment_List>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-4xl text-center text-blue-900">
          Featured Client Stories
        </h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <Review_Component name="Charlie Low" job="Co-founder of Climbingvan">
            Ever since weve been with Hostinger, its been amazing. Weve not
            really had any issues at all and if we ever do have a question,
            their customer service is incredible.
          </Review_Component>
          <Review_Component name="David Shaw" job="Senior Web Designer">
            When I looked at Hostinger hPanel, I realized it was going to be the
            easiest to manage. Many developers may prefer other options, but for
            me personally, I like hPanel.
          </Review_Component>
          <Review_Component
            name="Owen Phillips"
            job="Founder of Gate Foot Forge"
          >
            With Hostinger I can manage the hosting, domain name, and SSL
            certificate in one place, which is really refreshing. And setting up
            a website was easy - I didnt need to talk to customer support once!
          </Review_Component>
        </div>
      </div>
      <div className="flex-center flex-col gap-20">
        <Button variant="outline">Browse more client stories</Button>
        <div className="flex-center flex-col gap-5">
          <h1 className="font-bold text-4xl text-center text-blue-900">
            Join 2,002,312 Website Owners
          </h1>
          <Button>Get Started</Button>
          <List>30-Day Money-Back Guarantee</List>
        </div>
      </div>
    </Main_Section>
  );
}
