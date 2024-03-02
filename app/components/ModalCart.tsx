"use client";
import Link from "next/link";
import Boshliqga from "./Boshliqga";
import Header from "./Header";

import { useAppSelector } from "../redax/store";
import Image from "next/image";

function ModalCart() {
  const products = useAppSelector((state) => state.productItem);
  let newStr = "";
  return (
    <div className="min-h-svh w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] ">
      <Boshliqga />
      <div className="container p-6 md:px-10 mx-auto relative md:flex md:justify-end">
        <div className="bg-white p-6 rounded-lg w-full max-w-96">
          <div className="flex justify-between">
            <div className="uppercase text-xl font-bold">Cart (0)</div>
            <div className=" underline text-secondary-color cursor-pointer">
              Remove all
            </div>
          </div>
          <div className="mt-8 max-h-[40vh] overflow-y-auto cart-list-container">
            <ul className="grid gap-8">
              {products?.map((product) => {
                {
                  newStr = product.img.substring(1);
                }
                return product.img ? (
                  <li className="flex gap-3 items-center">
                    <div className="max-w-16 rounded-md overflow-hidden">
                      {product.img ? (
                        <Image
                          src={newStr}
                          width={64}
                          height={64}
                          alt=""
                        ></Image>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{product.name}</div>
                      <div className="font-bold text-secondary-color">
                        $ {product.price}
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-3 justify-items-center items-center bg-content-color py-1 font-bold">
                      <div className="text-secondary-color cursor-pointer hover:text-accent-color">
                        +
                      </div>
                      <div>1</div>
                      <div className="text-secondary-color cursor-pointer hover:text-accent-color">
                        -
                      </div>
                    </div>
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span>TOTAL</span>
              <span className="text-[18px] font-bold">$0</span>
            </div>
            <div className="mt-6">
              <Link
                href={"/"}
                className=" text-center block text-xs py-3 px-8 bg-[#D87D4A] text-white uppercase tracking-wider cursor-pointer hover:bg-button-orange-hover-color"
              >
                checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;
