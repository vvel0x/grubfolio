import { UserButton } from "@clerk/nextjs";

import Logo from "~/components/Misc/Logo";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          {/* Left section */}
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Logo withText className="hidden h-8 w-auto sm:block" />
              <Logo className="h-8 w-auto sm:hidden" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavItem href="/" label="Home" isActive />
              <NavItem href="/recipes" label="Recipes" />
              <NavItem href="/collections" label="Collections" />
              <NavItem href="/planner" label="Planner" />
            </div>
          </div>

          {/* Right section */}
          <div className="ml-6 flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}
