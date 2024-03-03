"use client";
import Link from "next/link";
import Boshliqga from "./Boshliqga";
import Header from "./Header";

import { useAppSelector } from "../redax/store";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  setItemCount,
  setProductItem,
  setRemoveItems,
  setTotalPrice,
} from "../redax/appSlice";

function ModalCart({ setModal }: any) {
  const products = useAppSelector((state) => state.productItem);
  const itemCount = useAppSelector((state) => state.itemCount);
  const totalPrice = useAppSelector((state) => state.totalPrice);
  const dispatch = useDispatch();
  function removeProducts() {
    dispatch(setRemoveItems(true));
    dispatch(setProductItem([]));
  }

  let newStr = "";
  return (
    <div className="min-h-svh w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] ">
      <Boshliqga />
      <div className="container p-6 md:px-10 mx-auto relative md:flex md:justify-end">
        <div className="bg-white p-6 rounded-lg w-full max-w-96">
          <div className="flex justify-between">
            <div className="uppercase text-xl font-bold">
              Cart ({products.length - 1})
            </div>
            <div
              onClick={() => removeProducts()}
              className=" underline text-secondary-color cursor-pointer"
            >
              Remove all
            </div>
          </div>
          <div className="mt-8 max-h-[40vh] overflow-y-auto cart-list-container">
            <ul className="grid gap-8">
              {products?.map((product) => {
                {
                }
                return product.img ? (
                  <li key={product.name} className="flex gap-3 items-center">
                    <div className="max-w-16 rounded-md overflow-hidden">
                      {product.img ? (
                        <Image
                          src={product.img}
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
                    <div className="text-[16px] font-bold opacity-[0.5]">
                      x{product.count}
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
              <span className="text-[18px] font-bold">${totalPrice}</span>
            </div>
            <div className="mt-6">
              <Link
                href={"/checkout"}
                onClick={() => setModal(false)}
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
