import Image from "next/image";
import Button from "../ui/Button";

type DomainListProps = {
  children: React.ReactNode;
  image: string;
  price: string;
  percent: string;
  discount: string;
};

const Domain_List_Component = ({
  children,
  image,
  price,
  percent,
  discount,
}: DomainListProps) => {
  return (
    <div className="flex flex-1 flex-col gap-3 bg-white text-blue-900 px-10 py-5 rounded border hover:scale-[103%] hover:shadow-2xl duration-500 transition-transform">
      <div className="flex items-center h-12">
        <Image src={image} alt="Domain List" width={50} height={50} />
      </div>
      <p className="flex-1">{children}</p>
      <div className="flex justify-start items-center gap-2">
        <span className="line-through">{price}</span>
        <span className="px-3 py-1 rounded-full bg-slate-200 font-semibold text-blue-800">
          SAVE {percent}
        </span>
      </div>
      <div className="font-semibold text-xl">
        $ <span className="font-bold text-4xl">{discount}</span>/year
      </div>
      <Button className="px-24 lg:px-16">Register</Button>
    </div>
  );
};

export default Domain_List_Component;
