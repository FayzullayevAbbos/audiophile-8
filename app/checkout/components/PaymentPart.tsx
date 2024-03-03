"use client";
import Image from "next/image";
import InputRadio from "./InputRadio";
import InputText from "./InputText";
import { RootState, useAppSelector } from "@/app/redax/store";

function PaymentPart() {
  const radio = useAppSelector((state:RootState) => state.radio);
  console.log(radio);

  return (
    <div className="mt-10">
      <p className="text-xs text-[#D87D4A] font-bold tracking-widest uppercase">
        payment details
      </p>
      <div>
        <InputRadio />
      </div>
      <div
        className={`
         mt-6 grid  gap-6 md:grid-cols-2 ${radio ? "hidden" : ""}`}
      >
        <InputText label="e-Money Number" placeholder="238521993" />
        <InputText label="e-Money PIN" placeholder="6891" />
      </div>
      <div
        className={` md:items-center gap-6 mt-6 ${radio ? "flex" : "hidden"} `}
      >
        <div className="w-12 flex-shrink-0">
          <Image
            src={"/assets/checkout/icon-cash-on-delivery.svg"}
            alt="delivery"
            width={48}
            height={48}
            className="w-full"
          ></Image>
        </div>
        <div className={`text-secondary-color `}>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </div>
      </div>
    </div>
  );
}

export default PaymentPart;
