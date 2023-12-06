import "~/styles/globals.css";

import { cache } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { cx } from "class-variance-authority";

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
        <body className={cx("h-full", "font-sans", fontSans.variable)}>
          <TRPCReactProvider headersPromise={getHeaders()}>
            {props.children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
