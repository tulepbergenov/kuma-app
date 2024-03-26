import { ComponentProps, ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface IDivElement extends ComponentProps<"div"> {}
