import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href = "#",
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-medium tracking-[-0.01em] transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A45F3D] focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-[#181A17] text-[#F4EFE6] hover:bg-[#25372F]",
        variant === "secondary" &&
          "border border-[#181A17]/12 bg-[#F4EFE6]/45 text-[#181A17] hover:border-[#181A17]/24 hover:bg-[#E8E1D3]/85",
        className
      )}
    >
      <span>{children}</span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}