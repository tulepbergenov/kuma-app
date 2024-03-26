import { ILayout } from "@/_shared/types";

export const AppLayout = ({ children }: ILayout) => {
  return <main id="main">{children}</main>;
};
