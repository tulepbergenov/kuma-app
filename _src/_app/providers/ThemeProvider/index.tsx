"use client";

import { ILayout } from "@/_shared/types";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: ILayout) => {
  return (
    <NextThemeProvider attribute="data-theme" disableTransitionOnChange={false}>
      {children}
    </NextThemeProvider>
  );
};
