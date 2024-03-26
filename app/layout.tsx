import { AppLayout } from "@/_app/layouts";
import { Providers } from "@/_app/providers";
import "@/_app/styles/_index.css";
import { cn } from "@/_shared/lib";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { _layoutMetadata, _layoutViewport } from "./_meta";
import { interFont } from "./fonts";

export const metadata: Metadata = _layoutMetadata;

export const viewport: Viewport = _layoutViewport;

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru" className={cn("!h-full", interFont.variable)}>
      <body className="rendering-speed bg-app-clr-light text-app-clr-dark font-app-fm-inter !h-full text-[16px] font-normal leading-[21px] antialiased">
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
