function InputEmail({
  placeholder,
  label,
  impEmal,
  setImpEmal,
}: any) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold">
        <label>{label}</label>
      </div>
      <input
        // onChange={(e) => updateField(e.target.value)}
        type="email"
        value={impEmal}
        onChange={(e)=> setImpEmal(e.target.value)}
        required
        placeholder={placeholder}
        className={`border font-bold rounded-md block w-full px-5 py-3 mt-2`}
      />
    </div>
  );
}

export default InputEmail;
