"use client";
import Product, { SingleProduct } from "@/app/types/dataType";
import ResImage from "./ResImage";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemCount } from "@/app/redax/appSlice";

function SingleProductTop({ product }: { product: SingleProduct[] }) {
  const itemCount = useSelector((state: any) => state.itemCount) as number;
  const dispatch = useDispatch();
  function addToCard() {}

  return (
    <div>
      {product.map((item) => {
        return (
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-36">
            <div>
              <ResImage
                alt={""}
                mobile={item.imageData.mobile}
                tablet={item.imageData.tablet}
                desktop={item.imageData.desktop}
              />
            </div>
            <div className="grid gap-6 self-center md:items-center  lg:gap-8">
              <p
                className={`text-overline-size text-[#D87D4A] uppercase ${
                  item.isNew ? "" : "hidden"
                }`}
              >
                new product
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold lg:w-8/12">
                {item.name}
              </h1>
              <p className="text-secondary-color lg:w-10/12">
                {item.description}
              </p>
              <div className="text-xl font-bold">
                $ {item.price.toLocaleString()}
              </div>
              <div className="flex gap-4">
                <div className="flex w-5/12 bg-content-color font-bold">
                  <div
                    className="flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color"
                    onClick={() =>
                      itemCount > 1 ? dispatch(setItemCount(itemCount - 1)) : ""
                    }
                  >
                    -
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    {itemCount}
                  </div>
                  <div
                    className="flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color"
                    onClick={() => dispatch(setItemCount(itemCount + 1))}
                  >
                    +
                  </div>
                </div>
                <div
                  className="block text-xs py-3 px-8 bg-[#D87D4A] text-white uppercase tracking-wider cursor-pointer hover:bg-button-orange-hover-color"
                  onClick={addToCard}
                >
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleProductTop;
