"use client";

import { cn } from "@/_shared/lib";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IThemeToggler } from "./ThemeToggler.type";

export const ThemeToggler = ({ className, ...props }: IThemeToggler) => {
  const { systemTheme, setTheme, theme } = useTheme();
  const [isMount, setIsMount] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const onChangeTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <AnimatePresence>
      {isMount && (
        <motion.button
          type="button"
          title={`Переключить тему на ${currentTheme === "dark" ? "светлую" : "темную"}`}
          aria-label={`Переключить тему на ${currentTheme === "dark" ? "светлую" : "темную"}`}
          className={cn(
            "relative inline-block h-6 w-6 transition-colors delay-0 duration-300 ease-in-out hover:text-app-clr-primary active:text-app-clr-primary",
            className,
          )}
          onClick={onChangeTheme}
          {...props}
          transition={{
            delay: 0,
            duration: 0.3,
            ease: "easeInOut",
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <span className="sr-only">
            Переключить тему на {currentTheme === "dark" ? "светлую" : "темную"}
          </span>
          <MdLightMode
            className={cn(
              "absolute left-2/4 top-2/4 h-auto w-full -translate-x-2/4 -translate-y-2/4 transition-[opacity,visibility,transform] delay-0 duration-300 ease-in-out",
              {
                ["invisible translate-x-2 opacity-0"]: currentTheme === "light",
              },
            )}
          />
          <MdDarkMode
            className={cn(
              "absolute left-2/4 top-2/4 h-auto w-full -translate-x-2/4 -translate-y-2/4 transition-[opacity,visibility,transform] delay-0 duration-300 ease-in-out",
              {
                ["invisible -translate-y-7 opacity-0"]: currentTheme === "dark",
              },
            )}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
