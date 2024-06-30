import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const cubeValue = (e) => {
    setNumber(e.target.value);
  };
  const Cube = () => {
    console.log("CalCulation ......");
    return Math.pow(number, 3);
  };
  const Result=useMemo(()=>Cube(number),[number])
  const increament=()=>{
    setCount(count+1)
  }

  return (
    <div>
      <div>
        <input
          type="number"
          value={number}
          onChange={cubeValue}
          className="border-2 border-black h-[25px] bg-slate-400"
        />
        {/* <button onClick={onClick}> calculate Cube </button> */}
        <p>Cube :{Result}</p>
      </div>
      <div>
        <button  onClick={increament} >Count+++</button>
        <p>count:{count}</p>
      </div>
    </div>
  );
}
