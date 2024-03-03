"use client";

import { setRadio } from "@/app/redax/appSlice";
import { RootState, useAppSelector } from "@/app/redax/store";
import { useDispatch } from "react-redux";

function Radio({ name, label }: { name: string; label: string }) {
  const radio = useAppSelector((state: RootState) => state.radio);
  const dispatch = useDispatch();
  return (
    <label className="block mb-3  cursor-pointer">
      <div className="flex items-center p-4 gap-4 border border-input-default-color input-radio-option-content rounded-lg font-bold">
        <div className="border rounded-full border-[#D87D4A] flex justify-center items-center w-6 h-6">
          <div className="w-3 h-3  relative rounded-full bg-transparent input-radio-option-icon">
            <input
              onChange={(e) => dispatch(setRadio(false))}
              name={name}
              checked={radio ? false : true}
              value={"true"}
              className=" absolute bg-[#D87D4A]"
              type="radio"
            />
          </div>
        </div>
        <div>{label}</div>
      </div>
    </label>
  );
}

export default Radio;
