import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";

const Forgot_Password_Page = () => {
  return (
    <>
      <div className="flex-center flex-col gap-8 mx-auto h-screen w-[370px] py-5 text-center">
        <div>
          <Image
            src={"/assets/images/forgot-password.png"}
            alt="Forgot Password"
            width={500}
            height={500}
          />
        </div>
        <h1 className="font-semibold text-2xl">Reset Your Password</h1>
        <form action="" className="flex flex-col w-full gap-5">
          <Input type="email" placeholder="Email" />
          <Button className="w-full">Send Reset Email</Button>
        </form>
        <button className="text-slate-500 text-xs underline">
          Tired of resetting passwords? Try NordPass it is free!
        </button>
        <button className="text-slate-500 text-xs underline">
          Back to log in form
        </button>
      </div>
    </>
  );
};

export default Forgot_Password_Page;
