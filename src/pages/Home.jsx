import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { brands } from "../data/brands";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import BrandShowcase from "../components/sections/BrandShowcase";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Moonove — Creative Collective</title>

        <meta
          name="description"
          content="A growing creative ecosystem bringing together entertainment, visual storytelling and learning through distinct digital brands."
        />
      </Helmet>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="container-shell relative flex min-h-[calc(100vh-20px)] items-center pt-[88px] pb-12 sm:pt-[96px] sm:pb-14 lg:min-h-[calc(100vh-10px)] lg:pt-[86px] lg:pb-10">
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[.98fr_1.02fr] lg:gap-8 xl:gap-4 lg:-translate-y-5 xl:-translate-y-8">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative z-10"
          >
            <div className="eyebrow">
              Digital Content & Creative Media
            </div>

            <h1 className="display mt-5 text-[3.1rem] font-extrabold leading-[.98] tracking-[-.045em] sm:text-6xl md:text-7xl lg:text-[5.55rem] xl:text-[5.8rem]">
              MOONOVE
            </h1>

            <p className="mt-6 text-xs font-semibold leading-6 tracking-[.13em] text-white/65 sm:text-sm md:text-base">
              ENTERTAINMENT · VISUAL STORYTELLING · LEARNING
            </p>

            <p className="muted mt-6 max-w-[680px] text-sm leading-7 sm:text-base sm:leading-8 md:text-lg">
              A growing creative ecosystem bringing together distinct digital
              brands across entertainment, visual storytelling and education.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              <Button to="/our-brands">
                Explore Our Brands
              </Button>

              <Button
                to="/about"
                variant="secondary"
              >
                About Moonove
              </Button>
            </div>

            <Link
              to="#brands"
              className="mt-9 inline-flex items-center gap-2 text-[10px] font-medium tracking-[.15em] text-white/35 transition-colors hover:text-white/65 sm:mt-11 sm:text-xs"
            >
              <ArrowDown size={15} />
              SCROLL TO DISCOVER
            </Link>
          </motion.div>

          {/* =====================================================
              RIGHT MOONOVE LOGO
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="relative mx-auto flex aspect-square w-full max-w-[640px] items-center justify-center lg:-mr-2 xl:-mr-6"
          >
            {/* =================================================
                SUBTLE ATMOSPHERIC GLOW
            ================================================= */}
            <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(136,92,255,.11),transparent_67%)] blur-3xl" />

            {/* =================================================
                OUTER ORBIT
            ================================================= */}
            <div className="absolute inset-[3%] rounded-full border border-white/[.035]" />

            {/* =================================================
                SECOND ORBIT
            ================================================= */}
            <div className="absolute inset-[10%] rounded-full border border-white/[.04]" />

            {/* =================================================
                THIRD ORBIT
            ================================================= */}
            <div className="absolute inset-[17%] rounded-full border border-white/[.035]" />

            {/* =================================================
                LOGO STAGE
            ================================================= */}
            <div
              className="
                absolute
                inset-[12%]
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/[.07]
                bg-[#04050b]
                shadow-[0_0_90px_rgba(120,80,255,.12)]
              "
            >
              {/* subtle inner glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(136,92,255,.08),transparent_68%)]" />

              {/* subtle inner circular outline */}
              <div className="absolute inset-[3%] rounded-full border border-white/[.035]" />

              {/* =================================================
                  ACTUAL MOONOVE LOGO

                  Slightly reduced from 1.20 to 1.12 so the
                  internal logo text has more breathing room.
              ================================================= */}
              <img
                src="/assets/moonove/moonove-logo.png"
                alt="Moonove Creative Collective logo"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  scale-[1.12]
                  object-contain
                  drop-shadow-[0_0_18px_rgba(255,255,255,.06)]
                "
              />
            </div>

            {/* =================================================
                DECORATIVE SPARKLE
            ================================================= */}
            <div className="absolute right-[4%] top-[17%] text-white/30">
              <Sparkles size={17} />
            </div>

            {/* =================================================
                DECORATIVE ORBIT POINT
            ================================================= */}
            <div className="absolute bottom-[10%] left-[7%] h-2 w-2 rounded-full bg-white/40 blur-[1px]" />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BRANDS
      ========================================================= */}
      <section
        id="brands"
        className="container-shell py-24 sm:py-32"
      >
        <SectionHeading
          eyebrow="Our Brands"
          title="Three distinct brands within one creative ecosystem."
          description="Moonove brings together distinct digital brands, each created for a different audience, purpose and form of expression."
        />

        <div className="mt-14 grid gap-5">
          {brands.map((brand, i) => (
            <BrandShowcase
              key={brand.slug}
              brand={brand}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="container-shell py-24 sm:py-32">
        <SectionHeading
          eyebrow="What We Do"
          title="Different ways to create, connect and learn."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            [
              "01",
              "Entertainment",
              "Discover stories worth watching.",
              "Drama recommendations, entertainment content and communities built around stories from across Asian television and streaming.",
            ],
            [
              "02",
              "Visual Storytelling",
              "Turn emotion into visual experiences.",
              "Edits and creative visual content designed to capture moments, characters, moods and stories.",
            ],
            [
              "03",
              "Learning",
              "Make preparation more accessible.",
              "Educational content, PYQs, notes and study resources designed around NEET preparation.",
            ],
          ].map(([number, category, title, description]) => (
            <motion.article
              key={category}
              whileHover={{
                y: -4,
              }}
              className="soft-border rounded-3xl bg-white/[.018] p-8 sm:p-10"
            >
              <div className="text-xs text-white/25">
                {number}
              </div>

              <div className="eyebrow mt-12">
                {category}
              </div>

              <h3 className="display mt-4 text-2xl font-bold">
                {title}
              </h3>

              <p className="muted mt-4 text-sm leading-7">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================================
          DIGITAL REACH
      ========================================================= */}
      <section className="container-shell py-24 sm:py-32">
        <div className="border-y border-white/[.08] py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our Digital Reach"
            title="Growing across platforms and audiences."
            description="Built across multiple digital platforms, communities and content formats."
          />

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              ["10K+", "Social Following"],
              ["50M+", "Content Views"],
              ["3", "Content Brands"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="display text-5xl font-extrabold sm:text-6xl">
                  {value}
                </div>

                <div className="mt-3 text-sm text-white/45">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section className="container-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHeading
            eyebrow="Our Approach"
            title="Built with purpose, shaped by creativity."
          />

          <div>
            <p className="text-xl leading-9 text-white/75 sm:text-2xl">
              Moonove brings different creative pursuits under one evolving
              identity — giving each brand the freedom to develop its own voice
              while sharing a common commitment to meaningful content,
              thoughtful presentation and genuine audience connection.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                [
                  "Distinct identities",
                  "Every brand has its own personality and purpose.",
                ],
                [
                  "Creative freedom",
                  "Content can evolve with its audience and platform.",
                ],
                [
                  "Continuous growth",
                  "Moonove is designed to grow alongside the ideas and communities it represents.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="border-l border-white/15 pl-5"
                >
                  <div className="text-sm font-bold">
                    {title}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}
      <section className="container-shell py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-[2rem] soft-border bg-white/[.025] p-9 sm:p-16 lg:p-20">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative">
            <div className="eyebrow">
              Start a conversation
            </div>

            <h2 className="display mt-5 max-w-3xl text-4xl font-extrabold tracking-[-.035em] sm:text-6xl lg:text-7xl">
              TURN YOUR IDEAS INTO
              <br />
              DIGITAL CREATIVITY.
            </h2>

            <p className="muted mt-6 max-w-2xl leading-7">
              For collaborations, creative opportunities, partnerships or
              brand-related enquiries, get in touch with the appropriate
              Moonove brand.
            </p>

            <div className="mt-8">
              <Button to="/contact">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}