import MobileNav from "~/components/Navigation/MobileNav";
import Navbar from "~/components/Navigation/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const runtime = "edge";

export default function layout(props: LayoutProps) {
  return (
    <div className="relative min-h-full bg-zinc-50 pb-16 sm:pb-0">
      <Navbar />
      <div className="container mx-auto px-4 py-3">{props.children}</div>
      <MobileNav />
    </div>
  );
}
