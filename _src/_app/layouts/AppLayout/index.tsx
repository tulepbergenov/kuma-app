import { PageTransitionProvider, ProgressBarProvider } from "@/_app/providers";
import { ILayout } from "@/_shared/types";
import { Header } from "@/_widgets";
import { Suspense } from "react";

export const AppLayout = ({ children }: ILayout) => {
  return (
    <>
      <Suspense fallback={null}>
        <ProgressBarProvider />
      </Suspense>
      <div className="flex min-h-full flex-col overflow-hidden">
        <Header />
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </div>
    </>
  );
};
