import { AppLayout } from "@/_app/layouts";
import { Providers } from "@/_app/providers";
import "@/_app/styles/_index.css";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { _metadata, _viewport } from "./_meta";

export const metadata: Metadata = _metadata;

export const viewport: Viewport = _viewport;

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
