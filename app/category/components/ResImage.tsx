"use client";
import { ResImageProps } from "@/app/types/dataType";
import Image from "next/image";

export default function ResImage({
  mobile,
  tablet,
  desktop,
  alt,
}: ResImageProps) {
  return (
    <>
      <Image
        key={"aspdlsd"}
        src={mobile}
        alt={alt}
        width={540}
        height={660}
        className="w-full md:hidden"
      />
      <Image
        key={"aspdlads"}
        src={tablet}
        alt={alt}
        width={540}
        height={660}
        className="w-full hidden md:block lg:hidden"
      />
      <Image
        key={"aspdsd  "}
        src={desktop}
        alt={alt}
        width={540}
        height={660}
        className="w-full hidden lg:block"
      />
    </>
  );
}
