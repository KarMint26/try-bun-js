"use client";

import Link from "next/link";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      await signUp(email, password);
      setEmail("");
      setPassword("");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col mt-5 justify-center items-center gap-[2rem]"
      >
        <input
          className="rounded-lg p-3"
          type="text"
          name="email"
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
        <input
          className="rounded-lg p-3"
          type="password"
          name="password"
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <button
          type="submit"
          className="px-3 py-2 text-white bg-rose-500 rounded-lg"
        >
          Sign Up
        </button>
      </form>
      <Link
        className="self-end -translate-x-[2rem] translate-y-5 text-blue-600"
        href="/login"
      >
        Sign In
      </Link>
    </main>
  );
};

export default Login;
