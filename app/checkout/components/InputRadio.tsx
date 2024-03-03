import Radio from "./Radio";
import Radio2 from "./Radio2";

function InputRadio() {
  return (
    <div className="mt-3 grid gap-6 md:grid-cols-2">
      <div className="text-xs font-bold">Payment Method</div>
      <div className="flow">
        <Radio label="e-Money" name={"active"} />
        <Radio2 label="Cash on Delivery" name={"active"} />
      </div>
    </div>
  );
}

export default InputRadio;
