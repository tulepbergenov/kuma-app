import { ILayout } from "@/_shared/types";
import { LenisProvider } from "./LenisProvider";
import { ThemeProvider } from "./ThemeProvider";
import { WrapBalancerProvider } from "./WrapBalancerProvider";

export const Providers = ({ children }: ILayout) => {
  return (
    <LenisProvider>
      <ThemeProvider>
        <WrapBalancerProvider>{children}</WrapBalancerProvider>
      </ThemeProvider>
    </LenisProvider>
  );
};
