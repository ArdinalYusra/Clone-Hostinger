const Main_Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`wrapper flex-col px-5 py-10 lg:px-20 space-y-20 ${className} `}
    >
      {children}
    </div>
  );
};

export default Main_Section;
