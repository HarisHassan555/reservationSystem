import React, { useState } from "react";
import { ReactComponent as TestSvgIcon1 } from "./assets/Seat 2.svg";
import { ReactComponent as TestSvgIcon2 } from "./assets/Seat 4.svg";
import { ReactComponent as TestSvgIcon3 } from "./assets/Seat 8.svg";
import FB from './components/fancybutton'

export default function Table() {
  const [activeTable, setActiveTable] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleClick = (tableId) => {
    setActiveTable(tableId);
    console.log(`Table ${tableId} clicked`);
  };

  return (
    <div className="flex flex-col justify-around px-4">
      <div className="relative flex flex-row justify-around py-2 md:gap-x-4">
        <div
          className={`relative ${
            activeTable === 1 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(1)}
        >
          <TestSvgIcon1 className="relative h-[6rem] md:h-[10rem] lg:h-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            1
          </span>
        </div>
        <div
          className={`relative ${
            activeTable === 2 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(2)}
        >
          <TestSvgIcon2 className="size-[6rem] md:size-[10rem] lg:size-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            2
          </span>
        </div>
        <div
          className={`relative ${
            activeTable === 3 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(3)}
        >
          <TestSvgIcon3 className="w-[10rem] md:w-[16rem] lg:w-[24rem]" />
          <span className="absolute cursor-pointer pb-2 lg:pb-10 inset-0 flex items-center justify-center font-bold text-xl">
            3
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-around py-2 md:gap-x-4">
        <div
          className={`relative ${
            activeTable === 4 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(4)}
        >
          <TestSvgIcon2 className="size-[6rem] md:size-[10rem] lg:size-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            4
          </span>
        </div>
        <div
          className={`relative ${
            activeTable === 5 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(5)}
        >
          <TestSvgIcon3 className="w-[10rem] md:w-[16rem] lg:w-[24rem] rotate-90" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            5
          </span>
        </div>
        <div
          className={`relative ${
            activeTable === 6 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(6)}
        >
          <TestSvgIcon1 className="h-[6rem] md:h-[10rem] lg:h-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            6
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-around py-2 md:gap-x-4">
        <div
          className={`relative ${
            activeTable === 7 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(7)}
        >
          <TestSvgIcon2 className="size-[6rem] md:size-[10rem] lg:size-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            7
          </span>
        </div>
        <div
          className={`relative ${
            activeTable === 8 ? "text-blue-500" : "text-black"
          }`}
          onClick={() => handleClick(8)}
        >
          <TestSvgIcon1 className="h-[6rem] md:h-[10rem] lg:h-[16rem] rotate-90" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            8
          </span>
        </div>
        <div
          className={`relative ${
            activeTable === 9 ? "text-blue-500" : "text-black "
          }`}
          onClick={() => handleClick(9)}
        >
          <TestSvgIcon2
            className={"size-[6rem] md:size-[10rem] lg:size-[16rem] stroke-red-500 fill-red-500"}
          />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            9
          </span>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => setShowPopup(true)}
        className="w-[50vh] self-center px-4 py-2 my-[2rem] bg-blue-500 text-white rounded transition-transform transform hover:scale-105 hover:bg-blue-600">
        Select
      </button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-blue-100 p-2 shadow-2xl rounded-2xl relative">
            <FB/>
            <button
              type="button"
              className="absolute top-0 right-2 text-gray-600 text-xl hover:text-gray-900"
              onClick={handleClosePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
