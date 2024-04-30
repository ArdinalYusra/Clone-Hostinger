import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";

const Login_Page = () => {
  return (
    <>
      <div className="flex flex-col gap-8 flex-center h-screen mx-auto w-[370px] py-5 text-center">
        <h1 className="font-semibold text-2xl">Log in</h1>
        <div className="flex-center gap-5">
          <Image
            src={"/assets/images/google.png"}
            alt="Log in with Google"
            width={50}
            height={50}
            className="ring-1 rounded-md"
          />
          <Image
            src={"/assets/images/facebook.png"}
            alt="Log in with Facebook"
            width={50}
            height={50}
            className="ring-1 rounded-md"
          />
          <Image
            src={"/assets/images/github.png"}
            alt="Log in with Google"
            width={50}
            height={50}
            className="ring-1 rounded-md"
          />
        </div>
        <div className="relative w-full border-b">
          <span className="absolute -top-3.5 left-[42%] text-slate-500 bg-white px-5">
            or
          </span>
        </div>
        <form action="" className="flex flex-col gap-5 w-full">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <label htmlFor="" className="flex justify-start gap-2 text-sm">
            <input type="checkbox" />
            Remember me
          </label>
          <Button className="w-full">Log in</Button>
        </form>
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
