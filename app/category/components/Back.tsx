"use client"

import { useRouter } from "next/navigation";



function Back() {
    const backParams = useRouter()
  return (
    <div className="container p-6 md:px-10 mx-auto">
      <span
        className="text-secondary-color uppercase cursor-pointer"
        onClick={() => {
          backParams.back();
        }}
      >
        go back
      </span>
    </div>
  );
}

export default Back;
