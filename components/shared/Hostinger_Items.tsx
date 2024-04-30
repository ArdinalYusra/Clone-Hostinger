import { HostingerItemsProps } from "@/types";

const Hostinger_Component = ({
  children,
  variant,
  outline,
  popular,
  bgPopular,
}: HostingerItemsProps) => {
  return (
    <div
      className={`relative flex-center flex-col gap-7 text-center ${variant === "white" ? "text-white" : "text-blue-950"} p-5 my-10 ${outline === "outlineBlue" ? "outline outline-blue-600" : outline === "outlineWhite" ? "outline outline-white" : "border"} rounded-md translate-y-5 hover:translate-y-0 hover:shadow-xl duration-500 ease-in`}
    >
      {popular && (
        <div
          className={`absolute -top-6 mx-auto px-10 py-2 font-semibold text-xl ${bgPopular === "bgPink" ? "bg-pink-600" : bgPopular === "bgOrange" ? "bg-orange-600 text-white" : "bg-slate-200"} rounded-full`}
        >
          MOST POPULAR
        </div>
      )}
      {children}
    </div>
  );
};

export default Hostinger_Component;
