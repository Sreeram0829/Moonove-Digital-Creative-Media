import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  MessageCircle,
  BookOpen,
  Heart,
  Clapperboard,
} from "lucide-react";

import Button from "../components/ui/Button";
import FAQ from "../components/ui/FAQ";
import BrandLogo from "../components/ui/BrandLogo";

const icons = {
  Instagram,
  YouTube: Youtube,
  Facebook,
  X: Twitter,
  Threads: MessageCircle,
};

export default function BrandPage({ brand }) {
  const isLearn = brand.slug === "learnove-academy";

  return (
    <div className="container-shell pt-32 pb-28">

      <Helmet>
        <title>{brand.name} — Moonove</title>

        <meta
          name="description"
          content={brand.description}
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">

        {/* TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="eyebrow">
            {brand.category}
          </div>

          <h1 className="display mt-5 text-5xl font-extrabold sm:text-7xl">
            {brand.name}
          </h1>

          <p className="muted mt-6 max-w-xl text-lg leading-8">
            {brand.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {brand.platforms.map((platform) => (
              <Button
                key={platform.name}
                href={platform.href}
                variant="secondary"
              >
                {platform.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* BRAND LOGO */}
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
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[.08] bg-white/[.018]"
        >
          <BrandLogo
            src={brand.image}
            alt={`${brand.name} visual identity`}
            name={brand.name}
            variant="page"
          />
        </motion.div>
      </section>

      {/* ================= INFO ================= */}
      <section className="mt-24 grid gap-8 lg:grid-cols-[1fr_1.4fr]">

        <div className="rounded-3xl border border-white/[.08] bg-white/[.018] p-8 sm:p-10">

          <div className="eyebrow">
            Across Platforms
          </div>

          <div className="display mt-5 text-5xl font-extrabold">
            {brand.audience}
          </div>

          <p className="muted mt-4 text-sm leading-7">
            An aggregated V1 audience figure. Platform counts are intentionally
            not presented as a live dashboard.
          </p>
        </div>

        <div className="rounded-3xl border border-white/[.08] bg-white/[.018] p-8 sm:p-10">

          <div className="eyebrow">
            Content Focus
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {brand.contentAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[.08] bg-white/[.025] px-4 py-2 text-sm text-white/65"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PLATFORM PRESENCE ================= */}
      <section className="mt-28">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">

          <div>
            <div className="eyebrow">
              Platform Presence
            </div>

            <h2 className="display mt-4 text-4xl font-bold">
              Find {brand.name} online.
            </h2>

            <p className="muted mt-5 leading-7">
              Follow the brand on its current public platforms and connect with
              its content.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {brand.platforms.map((platform) => {
              const Icon =
                icons[platform.name] || ArrowUpRight;

              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/[.08] bg-white/[.018] p-5 transition hover:-translate-y-0.5 hover:bg-white/[.035]"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} />
                    {platform.name}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-white/35"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= LEARNOVE ================= */}
      {isLearn && (
        <section className="mt-28 grid gap-5 md:grid-cols-3">
          {[
            [BookOpen, "Physics"],
            [Clapperboard, "Chemistry"],
            [Heart, "Biology"],
          ].map(([Icon, name]) => (
            <div
              key={name}
              className="rounded-3xl border border-white/[.08] bg-white/[.018] p-7"
            >
              <Icon size={20} />

              <h3 className="mt-10 text-xl font-bold">
                {name}
              </h3>

              <p className="muted mt-2 text-sm leading-6">
                NEET-focused educational content and study resources.
              </p>
            </div>
          ))}
        </section>
      )}

      {/* ================= FAQ ================= */}
      <section className="mt-28 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">

        <div>
          <div className="eyebrow">
            FAQ
          </div>

          <h2 className="display mt-4 text-4xl font-bold">
            Useful answers, kept simple.
          </h2>
        </div>

        <FAQ items={brand.faq} />
      </section>

      {/* ================= CTA ================= */}
      <section className="mt-28 text-center">

        <div className="eyebrow">
          Connect
        </div>

        <h2 className="display mx-auto mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
          Want to collaborate or ask something?
        </h2>

        <p className="muted mx-auto mt-5 max-w-xl">
          Send an enquiry through the Moonove contact page and choose the
          relevant brand.
        </p>

        <div className="mt-8">
          <Button to="/contact">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  );
}