import { PageTransition } from "@/_app/providers";
import { ILayout } from "@/_shared/types";
import { Header } from "@/_widgets";

export const AppLayout = ({ children }: ILayout) => {
  return (
    <div className="flex min-h-full flex-col overflow-hidden">
      <Header />
      <PageTransition>{children}</PageTransition>
    </div>
  );
};
