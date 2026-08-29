import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "../ui/BrandLogo";

export default function BrandShowcase({ brand, index = 0 }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
      }}
      className={`grid overflow-hidden rounded-[2rem] border border-white/[.09] bg-white/[.018] lg:grid-cols-2 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* LOGO AREA */}
      <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#080912] p-8 sm:p-12">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,75,220,.07),transparent_65%)]" />

        <BrandLogo
          src={brand.image}
          alt={`${brand.name} logo`}
          name={brand.name}
          variant="brand"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center p-9 sm:p-14">

        <div className="eyebrow">
          {brand.category}
        </div>

        <h3 className="display mt-4 text-3xl font-bold sm:text-4xl">
          {brand.name}
        </h3>

        <p className="muted mt-5 max-w-xl leading-7">
          {brand.description}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">

          <Link
            to={brand.route}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/65"
          >
            Explore {brand.name}
            <ArrowUpRight size={17} />
          </Link>

          <span className="text-xs text-white/35">
            {brand.audience}
          </span>
        </div>
      </div>
    </motion.article>
  );
}