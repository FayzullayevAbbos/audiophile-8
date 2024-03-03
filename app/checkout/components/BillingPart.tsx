import InputEmail from "./InputEmail";
import InputNumber from "./InputNumber";
import InputText from "./InputText";

function BillingPart() {
  return (
    <div>
      <p className="text-xs text-[#D87D4A] font-bold tracking-widest uppercase">
        Billing details
      </p>
      <div className="mt-3 grid gap-6 md:grid-cols-2">
        {" "}
        <InputText placeholder={"Alexei Ward"} label={"Name"} />
        <InputEmail placeholder={"alexei@mail.com"} label={"Email Address"} />
        <InputNumber placeholder={"+1 202-555-0136"} label={"Phone Number"} />
      </div>
    </div>
  );
}

export default BillingPart;
