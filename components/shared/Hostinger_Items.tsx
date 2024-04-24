type HostingerItemsProps = {
  children: React.ReactNode;
};

const Hostinger_Component = ({ children }: HostingerItemsProps) => {
  return (
    <div className="flex-center flex-col gap-7 text-center text-blue-950 p-5 my-10 border rounded-md translate-y-5 hover:translate-y-0 hover:shadow-xl duration-500 ease-in">
      {children}
    </div>
  );
};

export default Hostinger_Component;
