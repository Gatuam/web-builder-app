import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";
import { Nav } from "@/modules/site/ui/components/nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <Nav />
      <div className=" w-full h-screen flex justify-center pt-10 ">
        {children}
      </div>
    </ClerkProvider>
  );
};

export default layout;
