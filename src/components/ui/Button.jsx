import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({ children, to, href, variant = "primary", className = "" }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${variant === "primary" ? "bg-white text-[#080810] hover:-translate-y-0.5 hover:bg-white/90" : "soft-border bg-white/[.035] text-white hover:-translate-y-0.5 hover:bg-white/[.07]"} ${className}`;
  if (href) return <a className={cls} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={16}/></a>;
  return <Link className={cls} to={to}>{children}<ArrowUpRight size={16}/></Link>;
}
