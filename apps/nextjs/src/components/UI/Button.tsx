import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";

import { theme } from "~/utils/theme/neobrutalism";
import type { ThemeColourProps, ThemeProps } from "~/utils/theme/neobrutalism";

const buttonThemeColours = {
  c: {
    white: "hover:bg-zinc-100 active:bg-zinc-200",
    black: "hover:bg-gray-900 active:bg-gray-900 hover:border-gray-900",
    red: "hover:bg-red-200",
  },
} satisfies ThemeColourProps;

export const buttonTheme = cva("active:scale-95", {
  variants: {
    ...buttonThemeColours,
    aspect: {
      square: "aspect-square p-0",
    },
  },
  defaultVariants: {
    c: "white",
  },
});

export interface ButtonProps
  extends ThemeProps,
    VariantProps<typeof buttonTheme>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  const { variant, c, shadow, aspect, padding, className, children, ...rest } =
    props;

  const buttonStyles = cx(
    theme({ variant, c, shadow, padding, className }),
    buttonTheme({ c, aspect }),
  );

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
}
