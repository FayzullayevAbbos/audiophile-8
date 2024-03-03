import InputText from "./InputText";

function ShippingPart() {
  return (
    <div>
      <p className="text-xs text-accent-color font-bold tracking-widest uppercase">
        Shipping Info
      </p>
      <div className="mt-3">
        <InputText placeholder={"1137 Williams Avenue"} label={"Address"} />
      </div>
      <div className="mt-3 grid gap-6 md:grid-cols-2">
        <InputText placeholder={"10001"} label={"ZIP Code"} />
        <InputText placeholder={"New York"} label={"City"} />
        <InputText placeholder={"United States"} label={'Country'} />
      </div>
    </div>
  );
}

export default ShippingPart;
