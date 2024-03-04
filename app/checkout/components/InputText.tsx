"use client"

import { setImpText } from "@/app/redax/appSlice";
import { useAppSelector } from "@/app/redax/store";
import { useDispatch } from "react-redux";

function InputText({
  placeholder,
  label,
  
}:any) {
  const impText  = useAppSelector(state => state.impText)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex justify-between text-xs font-bold">
        <label>{label}</label>
      </div>
      <input
        // onChange={(e) => updateField(e.target.value)}
        type="text"
        required
        value={impText}
        onChange={(e)=> dispatch(setImpText(e.target.value))}
        placeholder={placeholder}
        className={`border font-bold rounded-md block w-full px-5 py-3 mt-2`}
      />
    </div>
  );
}

export default InputText;
