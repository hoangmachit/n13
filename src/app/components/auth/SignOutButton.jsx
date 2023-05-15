"use client";

import { signOut, useSession } from "next-auth/react";
const SignOutButton = () => {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <button
        className="text-sm font-medium uppercase tracking-wider text-stone-500"
        onClick={() => signOut()}
      >
        Logout
      </button>
    );
  }
};

export default SignOutButton;
