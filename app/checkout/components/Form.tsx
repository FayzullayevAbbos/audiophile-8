"use client";
function Form({ children }: any) {
  return <form onSubmit={(e) => e.preventDefault()}>{children}</form>;
}

export default Form;
