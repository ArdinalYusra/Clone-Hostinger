"use client";

import { useState } from "react";
import { IoEye } from "react-icons/io5";

type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`relative`}>
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        className={`w-full px-5 py-3 text-sm border rounded-md `}
      />
      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <IoEye
            className={`absolute right-3 top-4 text-xl ${showPassword ? "text-blue-600" : "text-slate-400"}`}
          />
        </button>
      )}
    </div>
  );
};

export default Input;
