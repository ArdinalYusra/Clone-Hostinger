"use client";

import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FormEvent } from "react";

const Register = () => {
  const { push } = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      push("/login");
    } else {
      console.log("error");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <Input type="text" name="fullname" id="fullname" placeholder="Fullname" />
      <Input type="email" name="email" id="email" placeholder="Email" />
      <Input type="number" name="phone" id="phone" placeholder="Phone" />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};

export default Register;
