import { Link } from "react-router-dom";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";
import { brands } from "../../data/brands";

const socials = [
  [
    "Moonlit Visual",
    "Instagram",
    "https://www.instagram.com/moonlit_visual",
    Instagram,
  ],
  [
    "Moonlit Visual",
    "YouTube",
    "https://www.youtube.com/@moonlit_visual",
    Youtube,
  ],
  [
    "Learnove Academy",
    "YouTube",
    "https://www.youtube.com/@Learnove_Official",
    Youtube,
  ],
  [
    "Learnove Academy",
    "Instagram",
    "https://www.instagram.com/learnove_official",
    Instagram,
  ],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[.07] bg-black/20">

      <div className="container-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.9fr_1fr]">

        {/* =====================================================
            BRAND
        ===================================================== */}
        <div>

          {/* Circular Moonove icon */}
          <Link
            to="/"
            className="group mb-7 inline-flex items-center justify-center"
          >
            <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/[.10] bg-[#05060d] shadow-[0_15px_50px_rgba(80,50,180,.12)]">

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(130,90,255,.12),transparent_70%)]" />

              {/* actual circular logo */}
              <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full">

                <img
                  src="/assets/moonove/moonove-icon.png"
                  alt="Moonove"
                  className="h-full w-full rounded-full object-cover"
                />

              </div>

              {/* inner ring */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[.06]" />
            </div>
          </Link>

          <div className="font-display text-xl font-extrabold tracking-[.12em]">
            MOONOVE
          </div>

          <div className="mt-1 text-[9px] tracking-[.2em] text-white/45">
            CREATIVE COLLECTIVE
          </div>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
            A growing creative ecosystem bringing together distinct digital
            brands and communities.
          </p>

          <p className="mt-5 text-xs tracking-[.13em] text-white/35">
            ENTERTAINMENT · VISUAL STORYTELLING · LEARNING
          </p>

        </div>


        {/* =====================================================
            EXPLORE
        ===================================================== */}
        <div>
          <div className="eyebrow">
            Explore
          </div>

          <div className="mt-5 grid gap-3 text-sm text-white/60">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <Link
              to="/our-brands"
              className="transition-colors hover:text-white"
            >
              Our Brands
            </Link>

            <Link
              to="/about"
              className="transition-colors hover:text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>


        {/* =====================================================
            BRANDS
        ===================================================== */}
        <div>
          <div className="eyebrow">
            Brands
          </div>

          <div className="mt-5 grid gap-3 text-sm text-white/60">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                to={brand.route}
                className="transition-colors hover:text-white"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>


        {/* =====================================================
            CONNECT
        ===================================================== */}
        <div>
          <div className="eyebrow">
            Connect
          </div>

          <div className="mt-5 grid gap-3 text-sm text-white/60">

            {socials.map(
              ([brand, label, href, Icon]) => (
                <a
                  key={brand + label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon size={15} />
                  {brand} · {label}
                </a>
              )
            )}

            <a
              href="mailto:learnoveacademy@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={15} />
              Learnove Academy
            </a>

          </div>
        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
      ===================================================== */}
      <div className="container-shell flex flex-col gap-4 border-t border-white/[.06] py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">

        <div>
          © 2026 Moonove. All rights reserved.
        </div>

        <div className="flex flex-wrap gap-5">
          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms of Use
          </Link>

          <Link to="/copyright">
            Copyright
          </Link>

          <Link to="/content-disclaimer">
            Content Disclaimer
          </Link>
        </div>

      </div>

    </footer>
  );
}