import { LinkProps } from "next/link";

export interface ISkipLink extends Omit<LinkProps, "href"> {
  className?: string;
}
