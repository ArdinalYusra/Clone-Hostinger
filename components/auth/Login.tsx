import { signIn } from "next-auth/react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Login = () => {
  return (
    <form action="" className="flex flex-col gap-3 w-full">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <label htmlFor="" className="flex justify-start gap-2 text-sm">
        <input type="checkbox" />
        Remember me
      </label>
      <Button
        type="submit"
        onClick={() => signIn("credentials")}
        className="w-full"
      >
        Log in
      </Button>
    </form>
  );
};

export default Login;
