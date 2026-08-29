import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["Our Brands", "/our-brands"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[.07] bg-[#070812]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell flex h-[86px] items-center justify-between">
        {/* BRAND */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {/* MOONOVE ICON */}
          <div className="relative grid h-[52px] w-[52px] shrink-0 place-items-center overflow-hidden rounded-full border border-white/[.12] bg-white/[.025] shadow-[0_0_28px_rgba(130,90,255,.14)]">
            <img
              src="/assets/moonove/moonove-icon.png"
              alt="Moonove"
              className="h-[84%] w-[84%] object-contain"
            />
          </div>

          {/* BRAND WORDMARK */}
          <div className="leading-none">
            <div className="font-display text-[16px] font-extrabold tracking-[.14em] text-white">
              MOONOVE
            </div>

            <div className="mt-1.5 text-[9px] font-medium tracking-[.2em] text-white/40">
              CREATIVE COLLECTIVE
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}

                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-px transition-opacity ${
                      isActive
                        ? "bg-white opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/[.1] bg-white/[.035] transition-colors hover:bg-white/[.07] md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="border-t border-white/[.07] bg-[#070812]/96 backdrop-blur-xl md:hidden">
          <nav className="container-shell flex flex-col py-4">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/[.06] py-4 text-base font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}