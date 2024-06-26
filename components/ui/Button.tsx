"use client";

import { ButtonProps } from "@/types";
import { cva } from "class-variance-authority";

const Button = ({
  children,
  variant,
  className,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonVariants({ variant })} ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  "flex justify-center py-2.5 px-10 mx-auto rounded-md font-semibold",
  {
    variants: {
      variant: {
        blue: "bg-blue-600 text-white",
        black: "bg-black text-white",
        white: "bg-white text-black",
        outline: "text-blue-600 ring ring-blue-600",
        outlineWhite: "text-white ring ring-white",
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  }
);
