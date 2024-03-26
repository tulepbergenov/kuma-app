import { ILayout } from "@/_shared/types";

export const AppLayout = ({ children }: ILayout) => {
  return (
    <div className="flex min-h-full flex-col overflow-hidden">
      <main id="main" className="flex-auto">
        {children}
      </main>
    </div>
  );
};
