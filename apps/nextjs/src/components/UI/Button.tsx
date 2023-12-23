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

const ButtonDefaultAsType = "button" as const;
type ButtonDefaultAsType = typeof ButtonDefaultAsType;

interface ButtonOwnProps<E extends React.ElementType>
  extends ThemeProps,
    VariantProps<typeof buttonTheme> {
  children: React.ReactNode;
  as?: E;
}

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>;

export const Button = <E extends React.ElementType = ButtonDefaultAsType>({
  children,
  as,
  ...props
}: ButtonProps<E>) => {
  const { variant, c, shadow, aspect, padding, className, ...rest } = props;

  const buttonStyles = cx(
    theme({ variant, c, shadow, padding, className }),
    buttonTheme({ c, aspect }),
  );

  const Tag = as ?? ButtonDefaultAsType;

  return (
    <Tag className={buttonStyles} {...rest}>
      {children}
    </Tag>
  );
};
