import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className, href }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "bg-[#6d28d9] text-white py-2 px-6 hover:bg-[#9333ea] cursor-pointer duration-200",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(
            "bg-[#6d28d9] text-white py-2 px-6 hover:bg-[#9333ea] cursor-pointer duration-200",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
