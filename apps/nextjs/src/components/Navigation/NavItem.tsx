import Link from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
  isActive?: boolean;
}

export default function NavItem({
  label,
  href,
  isActive = false,
  ...props
}: LinkProps) {
  if (isActive)
    return (
      <Link
        href={href}
        className="inline-flex items-center border-b-2 border-red-500 px-1 pt-1 text-sm font-medium text-red-600"
        {...props}
      >
        {label}
      </Link>
    );

  return (
    <Link
      href={href}
      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-red-300 hover:text-gray-700"
      {...props}
    >
      {label}
    </Link>
  );
}
