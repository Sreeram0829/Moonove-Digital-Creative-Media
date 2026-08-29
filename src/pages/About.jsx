import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import Button from "../components/ui/Button";

export default function About() {
  return (
    <div className="container-shell pt-36 pb-28">

      <Helmet>
        <title>About Moonove — Creative Collective</title>

        <meta
          name="description"
          content="Learn what Moonove represents and how its three-brand creative ecosystem is structured."
        />
      </Helmet>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="grid items-center gap-14 lg:grid-cols-[1fr_.82fr]">

        <div>
          <div className="eyebrow">
            About Moonove
          </div>

          <h1 className="display mt-5 text-5xl font-extrabold sm:text-7xl">
            One identity.
            <br />
            Distinct creative voices
          </h1>

          <p className="muted mt-7 max-w-2xl text-lg leading-8">
            Moonove is an evolving creative collective bringing
            entertainment, visual storytelling and learning together under
            one umbrella while giving every brand room to build its own
            identity.
          </p>
        </div>


        {/* =====================================================
            MOONOVE LOGO
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="soft-border rounded-[2rem] bg-white/[.018] p-7 sm:p-9"
        >
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/[.07] bg-[#080912]">

            {/* ambient glow */}
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(136,92,255,.18),transparent_65%)] blur-3xl" />

            {/* outer ring */}
            <div className="absolute inset-[7%] rounded-full border border-white/[.055]" />

            {/* middle ring */}
            <div className="absolute inset-[15%] rounded-full border border-white/[.045]" />


            {/* =================================================
                CIRCULAR LOGO
            ================================================= */}
            <div className="relative z-10 flex h-[72%] w-[72%] items-center justify-center overflow-hidden rounded-full border border-white/[.10] bg-[#05060d] shadow-[0_25px_80px_rgba(80,50,180,.18)]">

              {/* subtle internal glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(130,90,255,.10),transparent_70%)]" />

              {/* actual PNG clipped into circle */}
              <div className="relative z-10 h-[88%] w-[88%] overflow-hidden rounded-full">
                <img
                  src="/assets/moonove/moonove-icon.png"
                  alt="Moonove icon"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* inner highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[.07]" />
            </div>

          </div>
        </motion.div>
      </section>


      {/* =====================================================
          ECOSYSTEM
      ===================================================== */}
      <section className="mt-28 grid gap-10 lg:grid-cols-3">

        {[
          [
            "What Moonove represents",
            "A shared framework for distinct digital brands, thoughtful presentation and genuine audience connection.",
          ],
          [
            "The ecosystem",
            "Moonlit Visual, C.K. Drama World and Learnove Academy each serve a different audience and purpose.",
          ],
          [
            "Creative direction",
            "The collective is designed to evolve as its brands, platforms and ideas grow.",
          ],
        ].map(([title, description]) => (
          <article
            key={title}
            className="border-t border-white/[.1] pt-6"
          >
            <h2 className="text-xl font-bold">
              {title}
            </h2>

            <p className="muted mt-3 leading-7">
              {description}
            </p>
          </article>
        ))}
      </section>


      {/* =====================================================
          CREATOR
      ===================================================== */}
      <section className="mt-28 grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">

        <div>
          <div className="eyebrow">
            Creator / Builder
          </div>

          <h2 className="display mt-4 text-4xl font-bold sm:text-5xl">
            Building at the intersection of technology and creativity.
          </h2>

          <p className="muted mt-5 max-w-xl leading-7">
            Computer Science Student · AI & Full-Stack Developer · Digital
            Content Creator
          </p>

          <div className="mt-8">
            <Button to="/contact">
              Let's Connect
            </Button>
          </div>
        </div>


        {/* =====================================================
            CREATOR MOONOVE LOGO
        ===================================================== */}
        <motion.div
          whileHover={{
            scale: 1.01,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative overflow-hidden rounded-[2rem] soft-border bg-white/[.018] p-8 sm:p-10"
        >

          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative flex min-h-[280px] items-center justify-center">

            {/* outer ring */}
            <div className="absolute h-[250px] w-[250px] rounded-full border border-white/[.06]" />

            {/* inner ring */}
            <div className="absolute h-[205px] w-[205px] rounded-full border border-white/[.045]" />


            {/* circular logo */}
            <div className="relative z-10 flex h-[175px] w-[175px] items-center justify-center overflow-hidden rounded-full border border-white/[.10] bg-[#05060d] shadow-[0_25px_80px_rgba(80,50,180,.15)]">

              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(130,90,255,.10),transparent_70%)]" />

              <div className="relative z-10 h-[88%] w-[88%] overflow-hidden rounded-full">
                <img
                  src="/assets/moonove/moonove-icon.png"
                  alt="Moonove visual identity"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/[.07]" />

            </div>
          </div>


          <p className="relative mt-5 text-sm leading-7 text-white/45">
            This visual is intentionally replaceable later with a professional
            portrait without changing the page structure.
          </p>

        </motion.div>
      </section>

    </div>
  );
}