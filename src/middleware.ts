import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/agency/sign-in(.*)",
  "/agency/sign-up(.*)",
  "/",
  "/site",
]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const pathWithSearchParams = `${url.pathname}${searchParams ? `?${searchParams}` : ""}`;
  const host = req.headers.get("host");

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  if (url.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL(`/agency/sign-in${searchParams ? `?${searchParams}` : ""}`, req.url));
  }
  if (url.pathname.startsWith("/sign-up")) {
    return NextResponse.redirect(new URL(`/agency/sign-up${searchParams ? `?${searchParams}` : ""}`, req.url));
  }

  const customSubDomain = host
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];

  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`${customSubDomain}${pathWithSearchParams}`, req.nextUrl)
    );
  }

  if (
    url.pathname === "/" ||
    (url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL("site", req.url));
  }

  if (
    url.pathname.startsWith("/agency") ||
    url.pathname.startsWith("/subaccount")
  ) {
    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
