import { ReviewComponentProps } from "@/types";
import { FaRegUserCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";

export const Review_Component = ({
  children,
  name,
  job,
  variant,
}: ReviewComponentProps) => {
  return (
    <div
      className={`flex flex-col flex-1 ${variant === "blue" ? "bg-blue-800 text-white" : "bg-white text-blue-800"} pt-5 justify-between rounded-md ${variant === "white" ? "border" : ""}`}
    >
      <div
        className={`flex flex-1 flex-col gap-10 p-5 text-sm ${variant === "blue" ? "border-b" : ""}`}
      >
        <div className="flex gap-2 text-2xl">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p className="flex-1">{children}</p>
        <div>
          <button className="px-5 py-2 font-semibold">
            Read the full story
          </button>
        </div>
      </div>
      <div
        className={`flex gap-3 p-5 ${variant === "blue" ? "bg-blue-800 text-white" : "bg-slate-200 text-blue-800"} w-full`}
      >
        <FaRegUserCircle className="text-4xl" />
        <div className="flex flex-col gap-2">
          <span className="font-bold">{name}</span>
          <span className="font-medium text-xs">{job}</span>
        </div>
      </div>
    </div>
  );
};

export const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex gap-2 font-semibold text-sm">
      <GiCheckMark />
      {children}
    </li>
  );
};

export const Coment_List_Rating = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "black" | "white";
}) => {
  return (
    <div
      className={`flex flex-col flex-1 ${variant === "black" ? "bg-black text-white" : "bg-slate-50 text-black"} py-5 px-10 space-y-3`}
    >
      <h1 className="flex font-semibold text-lg">
        <IoIosStar /> Trustpilot
      </h1>
      <p className="flex-1 text-sm">{children}</p>
      <div className="flex items-end gap-2 text-2xl text-slate-500">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
      </div>
    </div>
  );
};
export const Coment_List = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex-1 bg-slate-50 py-5 px-10 space-y-3">{children}</li>
  );
};
