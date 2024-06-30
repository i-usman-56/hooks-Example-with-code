import React, { useState } from "react";

function UseState() {
  console.log("render");
  const [car, setCar] = useState({
    Name: "BMW M5 CS",
    Model: "2023",
    Variant: "Manual",
    Color: "Black",
  });
  const changeDetail = (title, value) => {
    setCar((prev) => {
      return { ...prev, [title]: value };
    });
  };
  return (
    <>
      <div className="min-h-screen justify-center items-center flex flex-col ">
        <div>
          <h1 className="text-[18px]  font-bold text-[red]">
            Car Name :
            <span className="text-[18px] text-[black] font-bold">
              {car.Name}
            </span>
          </h1>
          <h1 className="text-[18px] font-bold text-[red]">
            Car Variant :
            <span className="text-[18px] text-[black] font-bold">
              {car.Variant}
            </span>
          </h1>
          <h1 className="text-[18px] font-bold text-[red]">
            Car Color :
            <span className="text-[18px] text-[black] font-bold">
              {car.Color}
            </span>
          </h1>
          <h1 className="text-[18px] font-bold text-[red]">
            Car Model :
            <span className="text-[18px] text-[black] font-bold">
              {car.Model}
            </span>
          </h1>
          <div className="flex flex-col space-y-4">
            <button
              className="px-[15px] h-[35px] bg-[black] text-white rounded-md font-semibold"
              onClick={() => {
                changeDetail("Color", "Green");
              }}
            >
              Change Color
            </button>
            <button
              className="px-[15px] h-[35px] bg-[black] text-white rounded-md font-semibold"
              onClick={() => {
                changeDetail("Model", "2024");
              }}
            >
              Change Model
            </button>
            <button
              className="px-[15px] h-[35px] bg-[black] text-white rounded-md font-semibold"
              onClick={() => {
                changeDetail("Variant", "AutoMatic Gear Box");
              }}
            >
              Change Variant
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseState;
