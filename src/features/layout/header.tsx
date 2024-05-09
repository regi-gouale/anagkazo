import React from "react";
import Link from "next/link";
import { ToggleTheme } from "@/src/themes/toggle-theme";
import { LoginButton } from "../auth/login-button";
import { getAuthSession } from "@/lib/auth";
import { UserProfile } from "../auth/user-profile";

export const Header = async () => {
  const session = await getAuthSession();
  
  return (
    <header className="border-b border-b-accent fixed top-0 z-20 bg-background w-full">
      <div className="container flex items-center py-2 max-w-2xl m-auto gap-1">
        <Link href="/" className="text-primary mr-auto">
          <div className="flex flex-row items-end text-2xl font-extrabold font-sans mr-auto">
            PM<div className="text-xs font-normal font-sans">ICC AuRA</div>
          </div>
        </Link>
        {session?.user ? <UserProfile /> : <LoginButton />}
        <ToggleTheme />
      </div>
    </header>
  );
};
