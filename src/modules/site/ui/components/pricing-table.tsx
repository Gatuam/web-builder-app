import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/const";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

export const PricingTable = () => {
  return (
    <div className=" w-full justify-center items-center flex flex-col mt-10 md:mt-16 py-5 space-y-8 ">
      <div className=" flex flex-col justify-center items-center space-y-4 text-center ">
        <h1 className=" text-2xl md:text-4xl font-semibold shadow-2xs ">
          Choose what fit for you!
        </h1>
        <p className=" text-xs md:text-sm max-w-2xl text-accent-foreground/60 ">
          Select the plan that aligns with your goals—whether you’re just
          starting out, growing your agency, or scaling to new heights. Each
          package is designed to give you the best value, flexibility, and tools
          to run your business more efficiently.
        </p>
      </div>
      <div className=" flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center gap-x-3">
        {pricingCards.map((card, i) => (
          <div key={i}>
            <Card
              className={cn(
                " max-w-md min-w-2xs ",
                `${card.title}` === "Unlimited Saas" &&
                  "bg-gradient-to-b from-chart-2/1 to-chart-2/10 border border-chart-2"
              )}
            >
              <CardHeader>
                <CardTitle>
                  <p className=" font-semibold ">{card.title}</p>
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className=" text-3xl font-bold"> {card.price} </span>
                <span className=" text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className=" flex flex-col items-start gap-3">
                <div className=" space-y-2.5">
                  {card.features.map((feature, i) => (
                    <div key={i} className=" flex gap-2 items-center ">
                      <Check className=" text-muted-foreground size-3" />
                      <p className=" text-sm text-muted-foreground">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?.plan=${card.priceId}`}
                  className={cn(
                    " w-full text-center bg-gradient-to-b from-accent-foreground/40 to-accent-foreground/20 border border-muted-foreground p-2 rounded-md",
                    `${card.title}` === "Unlimited Saas" &&
                      "bg-gradient-to-b from-chart-2 to-chart-2/10 border border-chart-"
                  )}
                >
                  <p className=" text-accent-foreground font-semibold drop-shadow-2xl">
                    {card.price}
                  </p>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
