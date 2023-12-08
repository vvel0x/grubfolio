import "~/styles/globals.css";

import { cache } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { cx } from "class-variance-authority";
import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

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
        <body className={cx("h-full", GeistSans.className)}>
          <TRPCReactProvider headersPromise={getHeaders()}>
            {props.children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
