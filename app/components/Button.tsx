import React from "react";
import Link from "next/link";
type ButtonProps = {
  title: string;
  color: "orange" | "stroke" | "black";
  href: string;
};

export default function Button({ color, title, href }: ButtonProps) {
  switch (color) {
    case "orange":
      return (
        <Link
          href={href}
          className="block text-center text-xs py-3 px-8 hover:bg-[#FBAF85]  text-white uppercase tracking-wider cursor-pointer bg-[#D87D4A]"
        >
          {title}
        </Link>
      );
    case "stroke":
      return (
        <Link
          href={href}
          className="block text-center font-bold text-xs py-3 px-8 text-primary-color border border-black uppercase tracking-wider cursor-pointer hover:bg-black hover:text-white"
        >
          {title}
        </Link>
      );
    case "black":
      return (
        <Link
          href={href}
          className="block text-center text-xs py-3 px-8 text-white bg-black border border-black uppercase tracking-wider cursor-pointer hover:bg-gray-700 "
        >
          {title}
        </Link>
      );
    default:
      return (
        <Link
          href={href}
          className="block text-center text-xs py-3 px-8 text-primary-color border-1 border-black uppercase tracking-wider cursor-pointer hover:bg-gray-800 hover:text-white"
        >
          {title}
        </Link>
      );
  }
}
