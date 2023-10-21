import React from "react";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <Image src="/spinner.gif" width={100} height={100} alt="loading..." />
    </div>
  );
};

export default Spinner;
