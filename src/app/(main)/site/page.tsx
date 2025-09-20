import { ModeToggle } from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import { PricingTable } from "@/modules/site/ui/components/pricing-table";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { LucideWebhook, Rocket } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="h-screen w-full pt-13 md:pt-19 relative flex flex-col px-5 space-y-5">
        <div className="py-6 space-y-8 max-w-screen-xl mx-auto flex flex-col items-center">
          {/* Top Section */}
          <aside className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center space-y-6">
            {/* Action Button */}
            <div className="mb-3 max-w-sm mx-auto border px-5 py-2  rounded-4xl border-chart-2/30 bg-chart-2/5 backdrop-blur-xl animate-pulse hover:brightness-110 cursor-pointer hover:bg-chart-2/30 transition-all duration-200">
              <p className="text-xs tracking-widest flex items-center gap-x-2">
                <LucideWebhook className="w-4 h-4 animate-spin" />
                Build a web agency
                <LucideWebhook className="w-4 h-4 animate-spin" />
              </p>
            </div>

            {/* Subtext */}
            <p className="text-xs md:text-sm text-center text-accent-foreground/70 tracking-wide">
              Run your SaaS and web agency in one place with
            </p>

            {/* Headline */}
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl sm:text-6xl md:text-9xl text-center font-semibold tracking-tighter leading-13 sm:leading-16 md:leading-29 text-chart-2 shadow-2xs">
                A PERFECT <br /> WEB-BUILDER
              </h1>

              {/* Description */}
              <p className="mt-4 text-xs md:text-sm text-center text-accent-foreground/50 max-w-4xl mx-auto leading-relaxed">
                Run your SaaS, scale your business, manage your web agency, and
                build stunning websites effortlessly—all from a single, powerful
                platform designed for creators, entrepreneurs, and teams.
              </p>
            </div>
          </aside>

          {/* Image Section */}
          <aside className="pt-8 md:pt-12 flex flex-col items-center justify-center  ">
            <div className=" w-full h-full relative">
              <Image
                className="rounded-t-2xl shadow-xl"
                src="/landing.png"
                alt="landing"
                width={950}
                height={490}
              />
              <div className=" w-full h-80 absolute  -bottom-4 bg-gradient-to-t from-background to-background/1 rounded-b-2xl z-3"></div>
            </div>
          </aside>
        </div>
        <div>
          <PricingTable />
        </div>
      </main>
    </>
  );
}
