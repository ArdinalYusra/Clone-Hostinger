import { FaRegUserCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";

type ReviewComponentProps = {
  children: React.ReactNode;
  name: string;
  job: string;
};

export const Review_Component = ({
  children,
  name,
  job,
}: ReviewComponentProps) => {
  return (
    <div className="flex flex-col flex-1 pt-10 justify-between rounded-md border">
      <div className="flex flex-1 flex-col gap-10 p-5 text-sm">
        <div className="flex gap-2 text-2xl text-blue-600">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p className="flex-1">{children}</p>
        <div>
          <button className="px-5 py-2 text-blue-600 font-semibold">
            Read the full story
          </button>
        </div>
      </div>
      <div className="flex gap-3 p-5 bg-slate-100 w-full">
        <FaRegUserCircle className="text-4xl" />
        <div className="flex flex-col gap-2">
          <span className="font-bold">{name}</span>
          <span className="font-medium text-sm">{job}</span>
        </div>
      </div>
    </div>
  );
};

export const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex gap-2 text-sm">
      <GiCheckMark />
      {children}
    </li>
  );
};

export const Coment_List_Rating = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <li className="flex-1 bg-slate-50 py-5 px-10 space-y-3">
      <h1 className="flex font-semibold text-lg">
        <IoIosStar /> Trustpilot
      </h1>
      <p className="text-sm">{children}</p>
      <div className="flex gap-2 text-2xl text-slate-500">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
      </div>
    </li>
  );
};
export const Coment_List = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex-1 bg-slate-50 py-5 px-10 space-y-3">{children}</li>
  );
};
