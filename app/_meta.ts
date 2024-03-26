import { appTitle } from "@/_shared/lib";
import { Metadata, Viewport } from "next";

export const _layoutMetadata: Metadata = {
  title: appTitle(),
  description:
    "Подборки лучших курсов и рейтинги, основанные на реальных отзывах",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_META_CANONICAL,
  },
};

export const _layoutViewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#141414",
};

export const _notFoundMetadata: Metadata = {
  title: appTitle("Ресурс не найден"),
};
