"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1 },
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="min-h-screen w-screen fixed top-0 pointer-events-none"
      />
      <div key={pathname}>{children}</div>;
    </AnimatePresence>
  );
};

export default PageTransition;
