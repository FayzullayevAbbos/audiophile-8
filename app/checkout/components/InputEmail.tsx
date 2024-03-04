"use client"

import { setImpEmal } from "@/app/redax/appSlice";
import { useAppSelector } from "@/app/redax/store";
import { useDispatch } from "react-redux";

function InputEmail({
  placeholder,
  label
}: any) {
  const dispatch = useDispatch()
  const impEmal  = useAppSelector(state=> state.impEmal)
  return (
    <div>
      <div className="flex justify-between text-xs font-bold">
        <label>{label}</label>
      </div>
      <input
        // onChange={(e) => updateField(e.target.value)}
        type="email"
        value={impEmal}
        onChange={(e)=> dispatch(setImpEmal(e.target.value))}
        required
        placeholder={placeholder}
        className={`border font-bold rounded-md block w-full px-5 py-3 mt-2`}
      />
    </div>
  );
}

export default InputEmail;
