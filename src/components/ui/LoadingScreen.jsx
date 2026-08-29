import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 0.25,
        duration: 0.3,
      }}
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-[#070812]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.img
          src="/assets/moonove/moonove-icon.png"
          alt="Moonove"
          className="mx-auto mb-5 h-16 w-16 object-contain"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="eyebrow">Moonove</div>
      </motion.div>
    </motion.div>
  );
}