"use client"
import InputEmail from "./InputEmail";
import InputNumber from "./InputNumber";
import InputText from "./InputText";

function BillingPart({
  impNumber,
  setImpNumber,
  impEmal,
  setImpEmal,
  impText,
  setImpText,
}: any) {
  return (
    <div>
      <p className="text-xs text-[#D87D4A] font-bold tracking-widest uppercase">
        Billing details
      </p>
      <div className="mt-3 grid gap-6 md:grid-cols-2">
        {" "}
        <InputText
          impText={impText}
          setImpText={setImpText}
          placeholder={"Alexei Ward"}
          label={"Name"}
        />
        <InputEmail
          impEmal={impEmal}
          setImpEmal={setImpEmal}
          placeholder={"alexei@mail.com"}
          label={"Email Address"}
        />
        <InputNumber
          setImpNumber={setImpNumber}
          impNumber={impNumber}
          placeholder={"+1 202-555-0136"}
          label={"Phone Number"}
        />
      </div>
    </div>
  );
}

export default BillingPart;
