import { cva } from "class-variance-authority";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "blue" | "black" | "white";
};

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button className={`${buttonVariants({ variant })}`}>{children}</button>
  );
};

export default Button;

const buttonVariants = cva("py-2 px-10 rounded-md font-semibold", {
  variants: {
    variant: {
      blue: "bg-blue-600 text-white",
      black: "bg-black text-white",
      white: "bg-white text-black",
    },
  },
  defaultVariants: {
    variant: "blue",
  },
});
