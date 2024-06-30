import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log("use Effect Run");
    }, 3000);
  });
  const IncreMent = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h1 className="text-[18px] font-bold text-red-600 leading-5">
          I have Render {count} Times
        </h1>
        <button
          onClick={IncreMent}
          className="px-[12px] font-semibold rounded-md text-white h-[32px] bg-[black]"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default UseEffect;
