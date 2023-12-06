import { cx } from "class-variance-authority";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

export function IconButton(props: ButtonProps) {
  const { children, className, ...rest } = props;

  return (
    <Button
      aspect="square"
      padding="none"
      className={cx("p-1.5", className)}
      {...rest}
    >
      {children}
    </Button>
  );
}
