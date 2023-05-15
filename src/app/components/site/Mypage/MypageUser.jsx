"use client";
import { useSession, signOut } from "next-auth/react";
export default function SiteFooter() {
  const { data: session, status } = useSession();
  return (
    <section>
      <h2>My Page User</h2>
      {session?.user && (
        <>
          <ul>
            <li>Name: {session.user.name}</li>
            <li>Email: {session.user.email}</li>
          </ul>
          <button
            onClick={(e) =>
              signOut({ redirect: true, callbackUrl: "http://localhost:3000" })
            }
          >
            Logout My Page
          </button>
        </>
      )}
    </section>
  );
}
