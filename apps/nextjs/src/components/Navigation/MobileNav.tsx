import Link from "next/link";

import { links } from "~/lib/navigation";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 w-full shadow sm:hidden">
      <div className="h-16 bg-white">
        <div className="flex h-full items-end justify-between">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex w-1/4 items-center justify-center px-2 py-3 text-sm font-medium text-gray-500 hover:text-red-500"
            >
              <div className="flex flex-col items-center">
                <link.Icon className="h-5 w-auto" />
                <span className="text-sm">{link.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
