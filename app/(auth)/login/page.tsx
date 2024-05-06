"use client";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const Login_Page = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-8 flex-center h-screen mx-auto w-[370px] py-5 text-center">
        <h1 className="font-semibold text-2xl">
          {isRegistered ? "Register" : "Log in"}
        </h1>
        <div
          className={`${isRegistered && "hidden"} flex justify-center items-center gap-5`}
        >
          <button onClick={() => signIn("google", { callbackUrl: "/" })}>
            <Image
              src={"/assets/images/google.png"}
              alt="Log in with Google"
              width={50}
              height={50}
              className="ring-1 rounded-md"
            />
          </button>
          <button onClick={() => signIn("facebook", { callbackUrl: "/" })}>
            <Image
              src={"/assets/images/facebook.png"}
              alt="Log in with Facebook"
              width={50}
              height={50}
              className="ring-1 rounded-md"
            />
          </button>
          <button onClick={() => signIn("github", { callbackUrl: "/" })}>
            <Image
              src={"/assets/images/github.png"}
              alt="Log in with Google"
              width={50}
              height={50}
              className="ring-1 rounded-md"
            />
          </button>
        </div>
        <div className={`${isRegistered && "hidden"} relative w-full border-b`}>
          <span className="absolute -top-3.5 left-[42%] text-slate-500 bg-white px-5">
            or
          </span>
        </div>
        <div className="flex flex-col gap-5 w-full">
          {isRegistered ? <Register /> : <Login />}
          <button
            onClick={() => setIsRegistered(!isRegistered)}
            className="font-semibold text-start text-blue-600 underline"
          >
            {isRegistered ? "Log in" : "Register"}
          </button>
        </div>
        <Link href={"/forgot-password"} className="font-semibold text-blue-600">
          Forgot password?
        </Link>
        <p className="font-semibold">
          Not a member yet?{" "}
          <Link href={"/web-hosting"} className="text-blue-600">
            Choose a hosting plan{" "}
          </Link>
          and get started now!
        </p>
      </div>
    </>
  );
};

export default Login_Page;
