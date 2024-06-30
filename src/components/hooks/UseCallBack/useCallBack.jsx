import React, { useCallback, useState } from "react";
import Component from "./com";

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount((prev) => prev + 1);
  };
  const onChage = useCallback(() => {}, []);
  return (
    <div>
      <Component onChange={onChage} />
      <h1>Count :{count}</h1>
      <button onClick={increament}>Count++</button>
    </div>
  );
}
