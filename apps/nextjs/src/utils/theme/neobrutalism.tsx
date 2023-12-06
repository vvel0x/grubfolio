import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

/**
 * Shadow variants
 */
export const shadowVariants = {
  none: "",
  small: "shadow-[2px_2px_0px_rgba(0,0,0,1)]",
  default: "shadow-[3px_3px_0px_rgba(0,0,0,1)]",
  medium: "shadow-[5px_5px_0px_rgba(0,0,0,1)]",
  large: "shadow-[8px_8px_0px_rgba(0,0,0,1)]",
} satisfies Record<string, string>;

/**
 * Base Neobrutalism theme
 */
export const theme = cva(
  ["border-black border-2 ", "transition ease-in-out duration-100"],
  {
    variants: {
      variant: {
        default: "",
        rounded: "rounded-md",
        circle: "rounded-full",
      },
      c: {
        white: "text-black bg-white ",
        black: "text-white bg-black ",
        red: "text-red-600 bg-white",
      },
      padding: {
        none: "p-0",
        default: "pb-2 pt-1.5 px-3",
      },
      shadow: shadowVariants,
    },
    defaultVariants: {
      variant: "default",
      shadow: "default",
      padding: "default",
      c: "white",
    },
  },
);

export type ThemeProps = VariantProps<typeof theme>;
export type ThemeColours = NonNullable<Pick<ThemeProps, "c">["c"]>;
export interface ThemeColourProps {
  c: Record<ThemeColours, string>;
}
