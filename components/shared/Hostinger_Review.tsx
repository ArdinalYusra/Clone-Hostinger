import { IoIosStar } from "react-icons/io";

type HostingerReviewProps = {
  textColor: "white" | "black";
};

const Hostinger_Review = ({ textColor }: HostingerReviewProps) => {
  return (
    <div
      className={`flex-center flex-col gap-10 my-20 text-center ${textColor === "white" ? "text-white" : textColor === "black" && "text-black"} md:grid grid-cols-2 lg:grid-cols-4`}
    >
      <div className="flex flex-col gap-1">
        <h1 className="flex-center text-2xl font-semibold">
          <IoIosStar className="text-slate-500 text-4xl" /> Trustpilot
        </h1>
        <div className="flex-center text-white text-3xl gap-2">
          <IoIosStar className="bg-slate-600 p-2" />
          <IoIosStar className="bg-slate-600 p-2" />
          <IoIosStar className="bg-slate-600 p-2" />
          <IoIosStar className="bg-slate-600 p-2" />
          <IoIosStar className="bg-slate-600 p-2" />
        </div>
        <div className="text-xs">
          TrustScore <span className="font-bold"> 4.6 | 25,585 </span>
          reviews
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Google</h1>
        <div className="flex-center text-4xl gap-2">
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
        </div>
        <div className="text-xs">
          Rating
          <span className="font-bold"> 4.8 | 1,237 </span>
          reviews
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl italic">
          <span className="font-bold">host</span>
          advice
        </h1>
        <div className="flex-center text-4xl gap-2">
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
        </div>
        <div className="text-xs">
          Rating
          <span className="font-bold"> 4.6 | 2,432 </span>
          reviews
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold italic">wpbeginner</h1>
        <div className="flex-center text-4xl gap-2">
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
          <IoIosStar className="text-slate-600" />
        </div>
        <div className="text-xs">
          Rating
          <span className="font-bold"> 4.7 | 874 </span>
          reviews
        </div>
      </div>
    </div>
  );
};

export default Hostinger_Review;
