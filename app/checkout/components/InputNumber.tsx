"use client"
function InputNumber({ placeholder, label, impNumber, setImpNumber }: any) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold">
        <label>{label}</label>
      </div>
      <input
        value={impNumber}
        onChange={(e) => setImpNumber(e.target.value)}
        type="number"
        required
        placeholder={placeholder}
        className={`border font-bold rounded-md block w-full px-5 py-3 mt-2`}
      />
    </div>
  );
}

export default InputNumber;
