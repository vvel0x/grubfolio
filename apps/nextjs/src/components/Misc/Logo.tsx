/* eslint-disable @next/next/no-img-element */

import type { ImgHTMLAttributes } from "react";

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  withText?: boolean;
}

export default function Logo({ withText = false, ...props }: LogoProps) {
  if (!withText) return <img src="/logo.svg" alt="Recipe App" {...props} />;
  return <img src="/logo-with-name.svg" alt="Recipe App" {...props} />;
}
