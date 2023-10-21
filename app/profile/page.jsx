"use client";

import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        <>
          <h1>
            Welcome, {user.displayName} - You are logged in to the profile page
          </h1>
        </>
      ) : (
        <>
          <h1>You must be logged in to view this page - protected route</h1>
        </>
      )}
    </main>
  );
};

export default Profile;
