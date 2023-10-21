import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Sign Up</h1>
      <form className="flex flex-col mt-5 justify-center items-center gap-[2rem]">
        <input className="rounded-lg p-3" type="text" name="username" placeholder="username" />
        <input className="rounded-lg p-3" type="password" name="password" placeholder="password" />
      </form>
      <Link href="/login">Sign In</Link>
    </main>
  );
};

export default Login;
