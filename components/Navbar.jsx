"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "../app/context/AuthContext";
import Spinner from "./Spinner";
import Image from "next/image";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>

      {loading ? (
        <>
          <Spinner />
        </>
      ) : !user ? (
        <>
          <ul className="flex">
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Login
            </li>
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Sign Up
            </li>
          </ul>
        </>
      ) : (
        <>
          <div>
            <div className="photo-url w-[50px] h-[50px] rounded-full">
              <Image src={user.photoURL} alt="user-photo" width={80} height={80} className="w-[50px] h-[50px] rounded-full" />
            </div>
            <p className="cursor-pointer" onClick={handleSignOut}>
              Sign Out
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
