"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const AuthComponent = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md text-center">
      {user ? (
        <>
          <p className="mb-2">Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>  
          <div>
            <Link href="/week-9/shopping-list" className="block mt-2 text-blue-500 hover:underline">
              Go to Shopping List
            </Link>
          </div> 
        </>
      ) : (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
};

export default AuthComponent;
