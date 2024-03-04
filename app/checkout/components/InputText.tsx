import React from "react";

function InputText({
  placeholder,
  label,
  impText,
  setImpText,
}:any) {
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
        onChange={(e)=> setImpText(e.target.value)}
        placeholder={placeholder}
        className={`border font-bold rounded-md block w-full px-5 py-3 mt-2`}
      />
    </div>
  );
}

export default InputText;
