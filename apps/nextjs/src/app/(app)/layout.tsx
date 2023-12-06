import MobileNav from "~/components/Navigation/MobileNav";
import Navbar from "~/components/Navigation/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout(props: LayoutProps) {
  return (
    <div className="realtive min-h-full bg-zinc-50 pb-16 sm:pb-0">
      <Navbar />
      {props.children}
      <MobileNav />
    </div>
  );
}
