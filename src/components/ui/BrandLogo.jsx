import { ImageOff } from "lucide-react";

export default function BrandLogo({
  src,
  alt,
  name,
  variant = "brand",
}) {
  const isMoonlit = src?.includes("moonlit-visual");
  const isCK = src?.includes("ck-drama-world");
  const isLearnove = src?.includes("learnove-academy");

  /*
   ================================================================
   BRAND CARD
   ================================================================
  */
  if (variant === "brand") {
    return (
      <div className="relative flex h-full min-h-[360px] w-full items-center justify-center">

        {/* ambient glow */}
        <div className="absolute h-[310px] w-[310px] rounded-full bg-[radial-gradient(circle,rgba(130,90,255,.16),transparent_68%)] blur-2xl" />

        {/* outer orbit */}
        <div className="absolute h-[315px] w-[315px] rounded-full border border-white/[.055]" />

        {/* middle orbit */}
        <div className="absolute h-[270px] w-[270px] rounded-full border border-white/[.045]" />

        {/* logo container */}
        <div className="relative z-10 flex h-[235px] w-[235px] items-center justify-center overflow-hidden rounded-full border border-white/[.11] bg-[#05060d] shadow-[0_25px_80px_rgba(0,0,0,.4)]">

          {/* -------------------------------------------------------
              MOONLIT VISUAL
              Keep the entire square logo visible.
              Do NOT object-cover because that crops the logo.
          ------------------------------------------------------- */}
          {isMoonlit && (
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-[92%] w-[92%] rounded-full object-contain"
            />
          )}

          {/* -------------------------------------------------------
              C.K. DRAMA WORLD
              Its image works best as a photographic circular crop.
          ------------------------------------------------------- */}
          {isCK && (
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-full w-full object-cover object-center"
            />
          )}

          {/* -------------------------------------------------------
              LEARNOVE
          ------------------------------------------------------- */}
          {isLearnove && (
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-[86%] w-[86%] rounded-full object-contain"
            />
          )}

          <div className="pointer-events-none absolute inset-0 z-20 rounded-full ring-1 ring-inset ring-white/[.08]" />
        </div>
      </div>
    );
  }


  /*
   ================================================================
   BRAND PAGE
   ================================================================
  */
  if (variant === "page") {
    return (
      <div className="relative flex h-full min-h-[460px] w-full items-center justify-center">

        {/* glow */}
        <div className="absolute h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(130,90,255,.17),transparent_68%)] blur-3xl" />

        {/* orbit rings */}
        <div className="absolute h-[410px] w-[410px] rounded-full border border-white/[.055]" />

        <div className="absolute h-[350px] w-[350px] rounded-full border border-white/[.055]" />

        <div className="absolute h-[290px] w-[290px] rounded-full border border-white/[.045]" />

        {/* central logo */}
        <div className="relative z-10 flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-full border border-white/[.11] bg-[#05060d] shadow-[0_30px_100px_rgba(0,0,0,.45)]">

          {/* MOONLIT */}
          {isMoonlit && (
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-[92%] w-[92%] rounded-full object-contain"
            />
          )}

          {/* C.K. */}
          {isCK && (
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-full w-full object-cover object-center"
            />
          )}

          {/* LEARNOVE */}
          {isLearnove && (
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-[86%] w-[86%] rounded-full object-contain"
            />
          )}

          <div className="pointer-events-none absolute inset-0 z-20 rounded-full ring-1 ring-inset ring-white/[.08]" />
        </div>
      </div>
    );
  }


  /*
   ================================================================
   FALLBACK
   ================================================================
  */
  return (
    <div className="flex h-full w-full items-center justify-center">

      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none";

          const fallback = event.currentTarget.nextElementSibling;

          if (fallback) {
            fallback.style.display = "flex";
          }
        }}
      />

      <div className="hidden items-center gap-2 text-sm text-white/40">
        <ImageOff size={16} />
        {name}
      </div>
    </div>
  );
}