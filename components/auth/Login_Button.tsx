"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Login_Button() {
  const { data: session } = useSession();
  if (session) {
    return <button onClick={() => signOut()}>Log out</button>;
  }
  return <Link href={"/login"}>Log in</Link>;
}
