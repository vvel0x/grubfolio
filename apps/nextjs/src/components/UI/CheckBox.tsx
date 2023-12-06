import { CheckIcon } from "@heroicons/react/20/solid";
import { cva, cx } from "class-variance-authority";

import type { ThemeColourProps, ThemeProps } from "~/utils/theme/neobrutalism";
import { theme } from "~/utils/theme/neobrutalism";

const checkboxThemeColours = {
  c: {
    white: "checked:bg-zinc-200",
    red: "checked:bg-red-300",
    black: "",
  },
} satisfies ThemeColourProps;

export const checkboxTheme = cva(
  "relative peer shrink-0  appearance-none w-6 h-6",
  {
    variants: {
      ...checkboxThemeColours,
    },
    defaultVariants: {
      c: "white",
    },
  },
);

interface TextInputProps
  extends ThemeProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * Renders an input field component. Defaults to a text input.
 */
export function CheckBox(props: TextInputProps) {
  const { variant, c, shadow, className, label, ...rest } = props;

  const styles = cx(
    theme({ variant, padding: "none", shadow, className }),
    checkboxTheme({ c }),
  );

  return (
    <div className="flex gap-2">
      <input {...rest} type="checkbox" className={styles} />
      {label && <label htmlFor={props.id ?? props.name}>{label}</label>}
      <CheckIcon className="pointer-events-none absolute hidden h-6 w-6 peer-checked:block" />
    </div>
  );
}
