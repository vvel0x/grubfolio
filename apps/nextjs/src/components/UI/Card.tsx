import type { HTMLAttributes } from "react";
import { cx } from "class-variance-authority";

import { theme } from "~/utils/theme/neobrutalism";
import type { ThemeProps } from "~/utils/theme/neobrutalism";

export interface CardProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {}

export default function Card(props: CardProps) {
  const { variant, c, shadow, className, children, ...rest } = props;

  const styles = cx("overflow-hidden", className);

  return (
    <div className={theme({ variant, c, shadow, className: styles })} {...rest}>
      {children}
    </div>
  );
}
