"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="container flex items-center h-full w-full">
      <div className="w-full flex justify-center">
        <Link href="/quiz" className={buttonVariants({ variant: "default" })}>
          Connaître mon profil
        </Link>
      </div>
    </div>
  );
}
