"use client";
import Boshliqga from "@/app/components/Boshliqga";
import { useAppSelector } from "@/app/redax/store";
import Image from "next/image";

function CheckModal() {
  const products = useAppSelector((state) => state.productItem);
  return (
    <div className="min-h-svh w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] ">
      <Boshliqga />
      <div className="container p-6 flex justify-center md:px-10 mx-auto relative ">
        <div className="bg-white p-6 rounded-lg w-full max-w-[540px] px-8">
          <div className="w-[64px] h-[64px] bg-[#D87D4A] grid place-content-center rounded-[50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
            >
              <path
                d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125"
                stroke="white"
                stroke-width="4"
              />
            </svg>
          </div>
          <div className="text-[24px] leading-[28px] flex flex-col font-bold mt-5 gap-2 ">
            <span>THANK YOU</span>
            <span>FOR YOUR ORDER</span>
          </div>
          <div className="text-[15px] font-bold  mt-3 opacity-[0.5]">
            You will receive an email confirmation shortly.
          </div>
          <div className="grid rounded-[8px] overflow-hidden mt-6 md:grid-cols-2">
            <div className="w-full bg-[#F1F1F1] ">
              <ul className="px-[24px]">
                {products[0].img ? (
                  <li key={3} className="flex gap-4 items-center font-bold  ">
                    <div className="w-3/12 max-w-16 rounded-lg overflow-clip">
                      <Image
                        src={products[0].img}
                        alt="product"
                        width={50}
                        height={50}
                        className="w-full"
                      ></Image>
                    </div>
                    <div className="flex-1">
                      <div>{products[0].name}</div>
                      <div className="text-sm text-secondary-color">
                        $ {products[0].price}
                      </div>
                    </div>
                    <div className="text-[25px] font-bold opacity-[0.5]">
                      x{products[0].count}
                    </div>
                  </li>
                ) : (
                  <li
                    key={3}
                    className="flex gap-4 items-center py-3 border-b-[2px] font-bold mb-4"
                  >
                    <div className="w-3/12 max-w-16 rounded-lg overflow-clip">
                      <Image
                        src={products[1]?.img}
                        alt="product"
                        width={50}
                        height={50}
                        className="w-full"
                      ></Image>
                    </div>
                    <div className="flex-1">
                      <div>{products[1]?.name}</div>
                      <div className="text-sm text-secondary-color">
                        $ {products[1]?.price}
                      </div>
                    </div>
                    <div className="text-[16px] font-bold opacity-[0.5]">
                      x{products[1]?.count}
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="w-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckModal;
