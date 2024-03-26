import { appTitle } from "@/_shared/lib";
import { Metadata, Viewport } from "next";

export const _metadata: Metadata = {
  title: appTitle(),
  description:
    "Подборки лучших курсов и рейтинги, основанные на реальных отзывах",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_META_CANONICAL,
  },
};

export const _viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#000000",
};
