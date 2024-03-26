import { ILayout } from "@/_shared/types";
import { LenisProvider } from "./LenisProvider";
import { WrapBalancerProvider } from "./WrapBalancerProvider";

export const Providers = ({ children }: ILayout) => {
  return (
    <LenisProvider>
      <WrapBalancerProvider>{children}</WrapBalancerProvider>
    </LenisProvider>
  );
};
