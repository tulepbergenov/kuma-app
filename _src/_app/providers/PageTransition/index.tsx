"use client";

import { ILayout } from "@/_shared/types";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition = ({ children }: ILayout) => {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.main
        animate={{
          opacity: 1,
          x: 0,
        }}
        id="main"
        initial={{
          opacity: 0,
          x: 20,
        }}
        transition={{
          delay: 0,
          ease: "easeInOut",
          duration: 0.3,
        }}
        key={pathname}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
