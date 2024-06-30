import React, { useEffect, useReducer, useState } from "react";

function UseReducer() {
  console.log("render");
  const reducer = (state, action) => {
    switch (action.type) {
      case "increse": {
        return { ...state, count: state.count + 1 };
      }
      case "decrese": {
        return { ...state, count: state.count - 1 };
      }
      case "input": {
        return { ...state, count: action.payload };
      }
      case "updateRenderCount": {
        return { ...state, number: state.number + 1 };
      }
    }
    return state;
  };
  const initialValue = { count: 0, number: 0 };
  const [state, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    dispatch({ type: "updateRenderCount" });
  }, [state.count]);
  //   const [count, setcount] = useState(0);
  return (
    <div className=" flex flex-col items-center h-screen justify-center">
      <p>{state.count}</p>
      <button
        className="bg-gray-500 text-white font-semibold  px-5 rounded-md"
        onClick={() => dispatch({ type: "increse" })}
      >
        Increse
      </button>
      <button
        className="bg-gray-500 mt-3 text-white font-semibold  px-5 rounded-md"
        onClick={() => dispatch({ type: "decrese" })}
      >
        DEcrese
      </button>
      <input
        value={state.count}
        type="number"
        className="border-2 mt-3 border-black rounded-md"
        name=""
        id=""
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
      />

      <h1>Component Render :{state.number}</h1>
      {/* <button
        className="bg-gray-500 text-white font-semibold  px-5 rounded-md"
        onClick={() => {
          setcount((prev) => prev + 1);
        }}
      >
        Increse
      </button>
      <button
        className="bg-gray-500 mt-3 text-white font-semibold  px-5 rounded-md"
        onClick={() => {
          setcount((prev) => prev - 1);
        }}
      >
        DEcrese
      </button> */}
    </div>
  );
}

export default UseReducer;
