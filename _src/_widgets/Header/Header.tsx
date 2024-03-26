import { cn } from "@/_shared/lib";
import Link from "next/link";
import { IHeader } from "./Header.type";

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header className={cn(className)} {...props}>
      <div className="container">
        <div className="py-5">
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link href={"/courses/big-data"}>Big Data</Link>
              </li>
              <li>
                <Link href={"/courses/big-data/edit"}>Not Found</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
