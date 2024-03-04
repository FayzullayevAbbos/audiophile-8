"use client";
function Form({ children, setCheck }: any) {
  return (
    <form
      onSubmit={(e) => {
        setCheck(false);
        e.preventDefault();
      }}
    >
      {children}
    </form>
  );
}

export default Form;
