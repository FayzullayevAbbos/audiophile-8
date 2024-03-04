"use client";
import { useAppSelector } from "@/app/redax/store";
import Image from "next/image";

function LastList() {
  const products = useAppSelector((state) => state.productItem);
  function totalAll(a: any) {
    let arr = [...a];
    let total = 0;

    arr.forEach((obj) => {
      total += obj.count * obj.price;
    });

    return total;
  }
  const total = totalAll(products);

  return (
    <>
      <div className="bg-white p-6 py-8 rounded-lg lg:self-start">
        <h3 className="font-bold text-xl uppercase">Summary</h3>
        <div className="mt-8">
          <ul>
            {products?.map((item: any, index) => {
              return item.img ? (
                <li
                  key={index}
                  className="flex gap-4 items-center font-bold mb-4"
                >
                  <div className="w-3/12 max-w-16 rounded-lg overflow-clip">
                    <Image
                      src={item.img}
                      alt="product"
                      width={150}
                      height={150}
                      className="w-full"
                    ></Image>
                  </div>
                  <div className="flex-1">
                    <div>{item.name}</div>
                    <div className="text-sm text-secondary-color">
                      $ {item.price}
                    </div>
                  </div>
                  <div className="text-[25px] font-bold opacity-[0.5]">
                    x{item.count}
                  </div>
                </li>
              ) : (
                ""
              );
            })}
          </ul>
        </div>
        <div className="mt-8 grid gap-3">
          <div className="flex justify-between items-center">
            <div className="text-secondary-color uppercase">total</div>
            <div className="font-bold text-xl">${total}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-secondary-color uppercase">shipping</div>
            <div className="font-bold text-xl">${total ? 50 : 0} </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-secondary-color uppercase">VAT(included)</div>
            <div className="font-bold text-xl">
              {/* ${(('total' + 'shippingPrice') * 0.2).toFixed(2)} */}0
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="text-secondary-color uppercase">Grand Total</div>
          <div className="font-bold text-xl text-accent-color">
            ${total ? total + 50 : 0}
          </div>
        </div>

        <div
          //   onClickCapture={payCheckout}
          className="w-full"
        >
          <button
            type="submit"
            className="mt-8 w-full text-center text-xs py-3 px-8 bg-[#D87D4A] text-white uppercase tracking-wider cursor-pointer hover:bg-[#FBAF85]"
          >
            continue & pay
          </button>
        </div>
      </div>
    </>
  );
}

export default LastList;
