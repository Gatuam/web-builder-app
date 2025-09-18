import { ModeToggle } from "@/components/global/mode-toggle";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-screen bg-background ">
      hi
      <ModeToggle />
      <SignOutButton />
      <UserButton />
    </div>
  );
}
