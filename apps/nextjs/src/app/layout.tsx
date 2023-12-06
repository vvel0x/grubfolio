import "~/styles/globals.css";

import { cache } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

import { TRPCReactProvider } from "~/trpc/react";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Simple recipe manager with best in class UX",
  openGraph: {
    title: "Recipe App",
    description: "Simple recipe manager with best in class UX",
    url: "https://recipe-app.vvel0x.net",
    siteName: "Recipe App",
  },
};

// Lazy load headers
// eslint-disable-next-line @typescript-eslint/require-await
const getHeaders = cache(async () => {
  return headers();
});

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={["font-sans", fontSans.variable].join(" ")}>
          <TRPCReactProvider headersPromise={getHeaders()}>
            {props.children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
