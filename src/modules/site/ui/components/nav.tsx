"use client";
import { ModeToggle } from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignIn,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <div className=" w-full h-18 bg-accent/5 backdrop-blur-md border-b border-chart-2/10 flex justify-between items-center px-10 drop-shadow-2xl shadow-xs fixed z-40">
      <Link href={"/"}>
        <div className=" flex items-center justify-cente gap-2.5 ">
          <Image src={"/logo.svg"} alt="logo" width={23} height={40} />
          <h1 className="  text-xl  font-semibold ">ORBIX</h1>
        </div>
      </Link>
      <div className=" flex items-center justify-center gap-x-4">
        <ModeToggle />
        <ClerkLoading>
          <Loader className=" animate-spin text-accent-foreground size-4" />
        </ClerkLoading>
        <SignedIn>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </SignedIn>
        <SignedOut>
          <ClerkLoaded>
            <Button className=" h-8 bg-chart-2 hover:bg-chart-2/60" asChild>
              <SignInButton />
            </Button>
          </ClerkLoaded>
        </SignedOut>
      </div>
    </div>
  );
};
