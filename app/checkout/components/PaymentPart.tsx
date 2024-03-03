import InputRadio from "./InputRadio";
import InputText from "./InputText";

function PaymentPart() {
  return (
    <div>
      <p className="text-xs text-accent-color font-bold tracking-widest uppercase">
        payment details
      </p>
      <div>
        <InputRadio />
      </div>
      <div
        className={`
         mt-6 grid gap-6 md:grid-cols-2`}
      >
        <InputText label="" placeholder="" />
        <InputText label="" placeholder="" />
        
      </div>
      <div
        className={`flex md:items-center gap-6 mt-6 `}
        // ${
        //   state.payMethod.value === "eMoney" ? "hidden" : ""
        // }`}
      >
        <div className="w-12 flex-shrink-0">
          {/* <Image
            src={"/images/checkout/icon-cash-on-delivery.svg"}
            alt="delivery"
            width={48}
            height={48}
            className="w-full"
          ></Image> */}
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
