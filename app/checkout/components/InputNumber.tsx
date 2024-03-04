"use client"

import { setImpNumber } from "@/app/redax/appSlice";
import { useAppSelector } from "@/app/redax/store";
import { useDispatch } from "react-redux";

function InputNumber({ placeholder, label }: any) {
  const dispatch = useDispatch()
  const impNumber   = useAppSelector(state=> state.impNumber)
  return (
    <div>
      <div className="flex justify-between text-xs font-bold">
        <label>{label}</label>
      </div>
      <input
        value={impNumber}
        onChange={(e) => dispatch(setImpNumber(e.target.value))}
        type="number"
        required
        placeholder={placeholder}
        className={`border font-bold rounded-md block w-full px-5 py-3 mt-2`}
      />
    </div>
  );
}

export default InputNumber;
