"use client";
import { ResImageProps } from "@/app/types/dataType";
import Image from "next/image";

export default function ResImage({
  mobile,
  tablet,
  desktop,
  alt,
}: ResImageProps) {
  let mobile1 = mobile.substring(1);
  let tablet1 = mobile.substring(1);
  let desktop1 = mobile.substring(1);

  return (
    <>
      <Image
        src={mobile1}
        alt={alt}
        width={540}
        height={560}
        className="w-full md:hidden"
      />
      <img
        src={tablet1}
        alt={alt}
        width={540}
        height={560}
        className="w-full hidden md:block lg:hidden"
      />
      <img
        src={desktop1}
        alt={alt}
        width={540}
        height={560}
        className="w-full hidden lg:block"
      />
    </>
  );
}
