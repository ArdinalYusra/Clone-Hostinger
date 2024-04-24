import { FaCircleQuestion } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

type ListHostingProps = {
  children: React.ReactNode;
};

const List_Hosting = ({ children }: ListHostingProps) => {
  return (
    <div className="flex-between text-blue-900 text-sm">
      <span className="flex gap-2">
        <GiCheckMark />
        {children}
      </span>
      <span>
        <FaCircleQuestion />
      </span>
    </div>
  );
};

export default List_Hosting;

export function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="text-xl font-bold text-blue-900">{children}</h1>;
}
