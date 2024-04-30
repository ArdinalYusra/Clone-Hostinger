import { HeroSectionListProps } from "@/types";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FiPocket } from "react-icons/fi";
import Button from "../ui/Button";

const Hero_Section_List = ({
  children,
  image,
  variant,
  text,
  price,
  list1,
  list2,
  list3,
}: HeroSectionListProps) => {
  return (
    <div className="space-y-10 lg:grid grid-cols-2 gap-5">
      <div
        className={` ${text === "blue" ? "text-blue-900" : text === "white" ? "text-white" : "text-black"} flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 text-center lg:text-start`}
      >
        {children}
        <div className="flex flex-col gap-2 my-3 justify-center items-center lg:justify-start lg:items-start">
          <li className="flex gap-2">
            <FaCheck />
            {list1 ? list1 : "Free Domain"}
          </li>
          <li className="flex gap-2">
            <FaCheck />
            {list2 ? list2 : "Free Website Migration"}
          </li>
          <li className="flex gap-2">
            <FaCheck />
            {list3 ? list3 : "24/7 Customers Support"}
          </li>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xl">
            $<span className="font-bold text-4xl lg:text-5xl">{price}</span>
            /mo
          </span>
          <p className="font-bold ">+ 3 Month Free</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-3">
          <Button variant={variant}>Claim Deal</Button>
          <div
            className={` ${text === "white" ? "bg-slate-700" : "bg-slate-200"} flex-center text-sm px-7 py-2.5 rounded-md font-semibold`}
          >
            02 : 07 : 17 : 27
          </div>
        </div>
        <p className="flex gap-1 text-sm">
          <FiPocket />
          30-Day Money-Back Guarantee
        </p>
      </div>
      <div className="flex-center">
        <Image
          src={image}
          alt="Hostinger"
          width={500}
          height={500}
          className="image-cover"
        />
      </div>
    </div>
  );
};

export default Hero_Section_List;
