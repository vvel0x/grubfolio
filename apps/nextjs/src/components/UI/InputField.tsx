import { cva, cx } from "class-variance-authority";

import type { ThemeColourProps, ThemeProps } from "~/utils/theme/neobrutalism";
import { theme } from "~/utils/theme/neobrutalism";

const inputThemeColours = {
  c: {
    white: "focus:bg-zinc-50",
    black: "focus:bg-gray-900 hover:border-gray-900 placeholder:text-gray-400",
    red: "focus:bg-red-200",
  },
} satisfies ThemeColourProps;

export const inputTheme = cva("focus:outline-none", {
  variants: {
    ...inputThemeColours,
  },
  defaultVariants: {
    c: "white",
  },
});

interface TextInputProps
  extends ThemeProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Renders an input field component. Defaults to a text input.
 */
export function InputField(props: TextInputProps) {
  const { variant, c, padding, shadow, className, ...rest } = props;

  const styles = cx(
    theme({ variant, c, padding, shadow, className }),
    inputTheme({ c }),
  );

  return <input type="text" className={styles} {...rest} />;
}
