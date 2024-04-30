import Hostinger_Component from "./Hostinger_Items";
import List_Hosting, { Title } from "./List_Hosting";

const Hostinger_List = ({
  variant,
  outline,
  bgPopular,
}: {
  variant?: "white" | "blue";
  outline?: "outlineBlue" | "outlineWhite";
  bgPopular?: "bgOrange" | "bgPink";
}) => {
  return (
    <div className="flex flex-row gap-10 overflow-x-auto">
      <Hostinger_Component variant={variant === "white" ? "white" : "blue"}>
        <div>
          <p className="font-semibold text-lg">Premium</p>
          <p className="text-sm">Everything you need to create your website</p>
        </div>
        <div className="flex-center gap-2">
          <span className="line-through text-sm font-semibold">$11.99</span>
          <span className="bg-slate-200 px-2 py-1 font-bold text-sm rounded-full">
            SAVE 75%
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-xl font-semibold">
            $<span className="font-bold text-4xl lg:text-5xl">2.99</span>
            /mo
          </span>
          <p className="font-bold ">+ 2 Month Free</p>
        </div>
        <button className="bg-blue-600 px-20 py-3 text-nowrap text-white font-semibold rounded-md">
          Add to Cart
        </button>
        <p className="text-sm">$ 7.99 /mo when you renew</p>
        <hr className="border w-full" />
        <div
          className={`flex flex-col gap-5 ${variant === "white" ? "text-white" : "text-blue-950"}`}
        >
          <div className="flex flex-col gap-5">
            <Title>Top Features</Title>
            <List_Hosting>Standard Performances</List_Hosting>
            <List_Hosting>100 Websites</List_Hosting>
            <List_Hosting>100 GB SSD Storage</List_Hosting>
            <List_Hosting>Weekly Backups</List_Hosting>
            <List_Hosting>Unlimited Free SSL</List_Hosting>
            <List_Hosting>Unlimited Bandwidth</List_Hosting>
            <List_Hosting>Free Email</List_Hosting>
            <List_Hosting>Free Domain ($9.99 value)</List_Hosting>
            <List_Hosting>Free CDN</List_Hosting>
            <List_Hosting>Dedicated IP Address</List_Hosting>
          </div>
          <div className="flex flex-col gap-5">
            <Title>Managed WordPress</Title>
            <List_Hosting>WooCommerce</List_Hosting>
            <List_Hosting>Free Automatic Website Migration</List_Hosting>
            <List_Hosting>Free 1-click WordPress Instalation</List_Hosting>
            <List_Hosting>Free Pre-built Templates</List_Hosting>
            <List_Hosting>Free Amazon Affliate WordPress Plugin</List_Hosting>
            <List_Hosting>WordPress Acceleration (LiteSpeed)</List_Hosting>
            <List_Hosting>WordPress Auto Updates</List_Hosting>
            <List_Hosting>WordPress Vulnerabilities Scanner</List_Hosting>
            <List_Hosting>WordPress Compability Checker</List_Hosting>
            <List_Hosting>WordPress Multisite</List_Hosting>
            <List_Hosting>WP-CLI and SSH</List_Hosting>
            <List_Hosting>WordPress Staging Tool</List_Hosting>
            <List_Hosting>Object Cache for WordPress</List_Hosting>
            <List_Hosting>On-demand Backup</List_Hosting>
            <List_Hosting>WordPress AI Tools</List_Hosting>
          </div>
        </div>
      </Hostinger_Component>
      <Hostinger_Component
        variant={variant === "white" ? "white" : "blue"}
        outline={outline === "outlineWhite" ? "outlineWhite" : "outlineBlue"}
        popular
        bgPopular={
          bgPopular === "bgPink"
            ? "bgPink"
            : bgPopular === "bgOrange"
              ? "bgOrange"
              : "bgSlate"
        }
      >
        <div>
          <p className="font-semibold text-lg">Business</p>
          <p className="text-sm">
            Level-up with more power and enchanced feature
          </p>
        </div>
        <div className="flex-center gap-2">
          <span className="line-through text-sm font-semibold">$13.99</span>
          <span className="bg-slate-200 px-2 py-1 font-bold text-sm rounded-full">
            SAVE 71%
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-xl font-semibold">
            $<span className="font-bold text-4xl lg:text-5xl">3.99</span>
            /mo
          </span>
          <p className="font-bold">
            + 2 Month <span className="text-xl">FREE</span>
          </p>
        </div>
        <button className="bg-red-400 px-20 py-3 text-nowrap text-white font-semibold rounded-md">
          Add to Cart
        </button>
        <p className="text-sm">$8.99 /mo when you renew</p>
        <hr className="border w-full" />
        <div
          className={`flex flex-col gap-5 ${variant === "white" ? "text-white" : "text-blue-950"}`}
        >
          <div className="flex flex-col gap-5">
            <Title>Top Feature</Title>
            <List_Hosting>Increased Performance (Up to 5x)</List_Hosting>
            <List_Hosting>100 Websites</List_Hosting>
            <List_Hosting>100 GB SSD Storage</List_Hosting>
            <List_Hosting>Daily Backups ($25.08 value)</List_Hosting>
            <List_Hosting>Unlimited Free SSL</List_Hosting>
            <List_Hosting>Unlimited Bandwidth</List_Hosting>
            <List_Hosting>Free Email</List_Hosting>
            <List_Hosting>Free Domain ($9.99 value)</List_Hosting>
            <List_Hosting>Free CDN</List_Hosting>
            <List_Hosting>Dedicated IP Address</List_Hosting>
          </div>
          <div className="flex flex-col gap-5">
            <Title>Managed WordPress</Title>
            <List_Hosting>Basic WooCommerce</List_Hosting>
            <List_Hosting>Free Automatic Website Migration</List_Hosting>
            <List_Hosting>Free 1-click WordPress Instalation</List_Hosting>
            <List_Hosting>Free Pre-built Templates</List_Hosting>
            <List_Hosting>Free Amazon Affliate WordPress Plugin</List_Hosting>
            <List_Hosting>WordPress Acceleration (LiteSpeed)</List_Hosting>
            <List_Hosting>Smart WordPress Auto Updates</List_Hosting>
            <List_Hosting>WordPress Vulnerabilities Scanner</List_Hosting>
            <List_Hosting>WordPress Compability Checker</List_Hosting>
            <List_Hosting>WordPress Multisite</List_Hosting>
            <List_Hosting>WP-CLI and SSH</List_Hosting>
            <List_Hosting>WordPress Staging Tool</List_Hosting>
            <List_Hosting>Object Cache for WordPress</List_Hosting>
            <List_Hosting>On-Demand Backups</List_Hosting>
            <List_Hosting>WordPress AI Tools</List_Hosting>
          </div>
        </div>
      </Hostinger_Component>
      <Hostinger_Component variant={variant === "white" ? "white" : "blue"}>
        <div>
          <p className="font-semibold text-lg">Cloud Startup</p>
          <p className="text-sm">
            Enjoy optimized performance & powerful resources
          </p>
        </div>
        <div className="flex-center gap-2">
          <span className="line-through text-sm font-semibold">$24.99</span>
          <span className="bg-slate-200 px-2 py-1 font-bold text-sm rounded-full">
            SAVE 60%
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-xl font-semibold">
            $<span className="font-bold text-4xl lg:text-5xl">9.99</span>
            /mo
          </span>
          <p className="font-bold">
            + 2 Month <span className="text-xl">FREE</span>
          </p>
        </div>
        <button className="bg-blue-600 px-20 py-3 text-nowrap text-white font-semibold rounded-md">
          Add to Cart
        </button>
        <p className="text-sm">$19.99 /mo when you renew</p>
        <hr className="border w-full" />
        <div
          className={`flex flex-col gap-5 ${variant === "white" ? "text-white" : "text-blue-950"}`}
        >
          <div className="flex flex-col gap-5">
            <Title>Top Feature</Title>
            <List_Hosting>Maximum Performance (Up to 10x)</List_Hosting>
            <List_Hosting>300 Websites</List_Hosting>
            <List_Hosting>200 GB NVMe Storage</List_Hosting>
            <List_Hosting>Daily Backups ($25.08 value)</List_Hosting>
            <List_Hosting>Unlimited Free SSL</List_Hosting>
            <List_Hosting>Unlimited Bandwidth</List_Hosting>
            <List_Hosting>Free Email</List_Hosting>
            <List_Hosting>Free Domain ($9.99 value)</List_Hosting>
            <List_Hosting>Free CDN</List_Hosting>
            <List_Hosting>Dedicated IP Address</List_Hosting>
          </div>
          <div className="flex flex-col gap-5">
            <Title>Managed WordPress</Title>
            <List_Hosting>Standart WooCommerce</List_Hosting>
            <List_Hosting>Free Automatic Website Migration</List_Hosting>
            <List_Hosting>Free 1-click WordPress Instalation</List_Hosting>
            <List_Hosting>Free Pre-built Templates</List_Hosting>
            <List_Hosting>Free Amazon Affliate WordPress Plugin</List_Hosting>
            <List_Hosting>WordPress Acceleration (LiteSpeed)</List_Hosting>
            <List_Hosting>Smart WordPress Auto Updates</List_Hosting>
            <List_Hosting>WordPress Vulnerabilities Scanner</List_Hosting>
            <List_Hosting>WordPress Compability Checker</List_Hosting>
            <List_Hosting>WordPress Multisite</List_Hosting>
            <List_Hosting>WP-CLI and SSH</List_Hosting>
            <List_Hosting>WordPress Staging Tool</List_Hosting>
            <List_Hosting>Object Cache for WordPress</List_Hosting>
            <List_Hosting>On-Demand Backups</List_Hosting>
            <List_Hosting>WordPress AI Tools</List_Hosting>
          </div>
        </div>
      </Hostinger_Component>
    </div>
  );
};

export default Hostinger_List;
