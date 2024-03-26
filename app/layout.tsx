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
    <html
      lang="ru"
      className={cn("!h-full", interFont.variable)}
      suppressHydrationWarning
    >
      <body className="rendering-speed bg-app-clr-light text-app-clr-dark font-app-fm-inter dark:bg-app-clr-dark dark:text-app-clr-light !h-full text-base font-normal antialiased">
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
