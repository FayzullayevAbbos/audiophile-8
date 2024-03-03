"use client";

import { setRadio } from "@/app/redax/appSlice";
import { useAppSelector } from "@/app/redax/store";
import { useDispatch } from "react-redux";

function Radio2({ name, label }: { name: string; label: string }) {
  const dispatch = useDispatch();
  const radio = useAppSelector((state) => state.radio);
  return (
    <label className="block  cursor-pointer">
      <div className="flex items-center p-4 gap-4 border border-input-default-color input-radio-option-content rounded-lg font-bold">
        <div className="border rounded-full border-[#D87D4A] flex justify-center items-center w-6 h-6">
          <div className="w-3 h-3  relative rounded-full bg-transparent input-radio-option-icon">
            <input
              onChange={(e) => dispatch(setRadio(true))}
              name={name}
              checked={radio ? true : false}
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

export default Radio2;
