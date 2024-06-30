import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  console.log("render");
  // accessDom
  const inputref = useRef();

  const injutselect = () => {
    // console.log(inputref.current)
    const value = inputref.current.value;
    if (value.length <= 8) {
      injutselectBorder();
    } else {
      console.log(value);
    }

    // inputref.current.style.background='red';
  };
  var password = false;
  const view = () => {
    if (password) {
      inputref.current.type = "password";
      password = false;
    } else {
      password = true;
      inputref.current.type = "text";
    }
  };

  const injutselectBorder = () => {
    const value = inputref.current.value;
    // console.log(value)
    if (value.length <= 8) {
      inputref.current.style.borderColor = "red";
    } else {
      inputref.current.style.borderColor = "#1df2f2";
    }
  };

  // Render Problem
  //   const [value, setValue] = useState(0);
  //   // const [count,setCount]=useState(0)
  //   const count = useRef(0);
  //   // console.log(count)

  //   const increment = () => {
  //     setValue((prev) => prev + 1);
  //   };

  //   const decrement = () => {
  //     setValue((prev) => prev - 1);
  //   };
  //   useEffect(() => {
  //     console.log("Use Effect Run")
  //     count.current = count.current + 1;
  //   });

  // useEffect(()=>{
  //     console.log("use effect run")
  //     setCount(prev=>prev+1)
  // })
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <input
        className="h-[25px] border-2 border-black bg-[#FFFFF1] "
        type="password"
        ref={inputref}
        onChange={injutselectBorder}
      />
      <button onClick={injutselect}>Click</button>
      <button onClick={view}>viewtext</button>
      {/* <div className="space-y-2">
        <button
          onClick={decrement}
          className=" bg-black px-4 rounded-md h-[32px] text-white font-bold "
        >
          -1
        </button>
        <h1 className="text-center">{value}</h1>
        <button
          onClick={increment}
          className=" bg-black px-4 rounded-md h-[32px] text-white font-bold "
        >
          +1
        </button>
      </div>
      <div> */}
      {/* <h1>Component render Times : {count.current}</h1> */}
      {/* <h1>Component render Times : {count}</h1> */}
      {/* </div> */}
    </div>
  );
}

export default UseRef;
