/* eslint-disable @typescript-eslint/no-misused-promises */

import * as React from "react";

import { type Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import Image from "next/image";

const Account: React.FC<{ session: Session | null }> = ({ session }) => {
  if (!session) {
    return (
      <>
        <div className="flex w-full flex-col gap-5 rounded-xl md:flex-row md:items-center md:justify-between">
          <h1 className="text-xs">
            please sign in with discord to leave a comment blow.
          </h1>
          <button
            onClick={() => signIn("discord")}
            className="rounded-xl border-2 border-indigo-500 bg-indigo-500/20 px-4 py-2 text-xs font-bold text-indigo-300 hover:bg-indigo-500/50"
          >
            Sign In
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between gap-5 rounded-xl md:flex-row">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <Image
            src={session.user.image ?? ""}
            alt={session.user.name ?? ""}
            width={70}
            height={70}
            className="rounded-xl"
            suppressHydrationWarning
          />
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <h1
              suppressHydrationWarning
              className="font-bold text-glow-neutral-500"
            >
              {session.user.name}
            </h1>
            <h1
              suppressHydrationWarning
              className="truncate text-xs text-neutral-500"
            >
              {session.user.email}
            </h1>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className="rounded-xl border-2 border-red-500 bg-red-500/20 px-4 py-2 text-xs font-bold text-red-300 hover:bg-red-500/50"
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Account;
