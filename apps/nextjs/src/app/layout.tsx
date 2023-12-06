import "~/styles/globals.css";

import { cache } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

import Navbar from "~/components/Navigation/Navbar";
import { TRPCReactProvider } from "~/trpc/react";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Simple recipe manager with best in class UX",
};

// Lazy load headers
// eslint-disable-next-line @typescript-eslint/require-await
const getHeaders = cache(async () => {
  return headers();
});

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en" className="h-full">
        <body className={["h-full", "font-sans", fontSans.variable].join(" ")}>
          <TRPCReactProvider headersPromise={getHeaders()}>
            <div className="min-h-full bg-zinc-50">
              <Navbar />
              {props.children}
            </div>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
