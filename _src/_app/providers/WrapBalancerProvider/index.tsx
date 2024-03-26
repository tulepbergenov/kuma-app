"use client";

import { ILayout } from "@/_shared/types";
import { Provider } from "react-wrap-balancer";

export const WrapBalancerProvider = ({ children }: ILayout) => {
  return <Provider>{children}</Provider>;
};
