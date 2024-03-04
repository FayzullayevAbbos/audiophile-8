"use client"
import { useState } from "react";
import Back from "../category/components/Back";
import Boshliqga from "../components/Boshliqga";
import LastList from "./LastList";
import BillingPart from "./components/BillingPart";
import Form from "./components/Form";
import PaymentPart from "./components/PaymentPart";
import ShippingPart from "./components/ShippingPart";

function page() {
  const [check, setCheck] = useState(false);
  return (
    <div className="bg-[#FAFAFA]">
      <Boshliqga />
      <Back />
      <Form setCheck={setCheck}  >
        <div className="container p-6 pt-0 md:px-10 mx-auto  grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="grid gap-6 lg:col-span-3 bg-white p-6 lg:p-10 rounded-lg">
            <h1 className="font-bold text-3xl uppercase">checkout</h1>
            <BillingPart />
            <ShippingPart />
            <PaymentPart />
          </div>
          <LastList setCheck={setCheck} check={check} />
        </div>
      </Form>
    </div>
  );
}

export default page;
