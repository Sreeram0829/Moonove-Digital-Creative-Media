import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="divide-y divide-white/[.08] soft-border rounded-2xl overflow-hidden">
      {items.map(([question, answer], i) => (
        <div key={question} className="bg-white/[.018]">
          <button className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/50"
            aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            {question}<ChevronDown size={18} className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <div className="px-5 pb-5 text-sm leading-7 text-white/60">{answer}</div>}
        </div>
      ))}
    </div>
  );
}
