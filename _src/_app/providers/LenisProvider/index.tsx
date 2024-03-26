"use client";

import { ILayout } from "@/_shared/types";
import { ReactLenis } from "@studio-freight/react-lenis";

export const LenisProvider = ({ children }: ILayout) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
