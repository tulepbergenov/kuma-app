import { cn } from "@/_shared/lib";
import Link from "next/link";
import { ISkipLink } from "./SkipLink.type";

export const SkipLink = ({ className, ...props }: ISkipLink) => {
  return (
    <Link
      href={"#main"}
      className={cn(
        "sr-only focus:outline-none focus-visible:not-sr-only focus-visible:inline-block focus-visible:w-full focus-visible:bg-app-clr-error focus-visible:py-3 focus-visible:text-center focus-visible:text-app-clr-light focus-visible:underline",
        className,
      )}
      {...props}
    >
      Перейти к содержанию
    </Link>
  );
};
