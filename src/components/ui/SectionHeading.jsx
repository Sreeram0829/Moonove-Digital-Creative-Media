import { motion } from "motion/react";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: .65 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      {description && <p className="muted mt-5 max-w-2xl text-base leading-7 sm:text-lg">{description}</p>}
    </motion.div>
  );
}
