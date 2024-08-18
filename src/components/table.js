import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTable } from '../features/appSlice';
import { ReactComponent as TestSvgIcon1 } from '../assets/Seat 2.svg';
import { ReactComponent as TestSvgIcon2 } from '../assets/Seat 4.svg';
import { ReactComponent as TestSvgIcon3 } from '../assets/Seat 8.svg';
import Fancybutton from './fancybutton';

export default function Table() {
  const dispatch = useDispatch();
  const selectedTable = useSelector((state) => state.app.selectedTable);
  const [showPopup, setShowPopup] = useState(false);

  const handleTableClick = (tableId) => {
    dispatch(setSelectedTable(tableId));
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col justify-around px-4">
      <div className="relative flex flex-row justify-around py-2 md:gap-x-4">
        <div
          className={`relative ${selectedTable === 1 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(1)}
        >
          <TestSvgIcon1 className="relative h-[6rem] md:h-[10rem] lg:h-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            1
          </span>
        </div>
        <div
          className={`relative ${selectedTable === 2 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(2)}
        >
          <TestSvgIcon2 className="size-[6rem] md:size-[10rem] lg:size-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            2
          </span>
        </div>
        <div
          className={`relative ${selectedTable === 3 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(3)}
        >
          <TestSvgIcon3 className="w-[10rem] md:w-[16rem] lg:w-[24rem]" />
          <span className="absolute cursor-pointer pb-2 lg:pb-10 inset-0 flex items-center justify-center font-bold text-xl">
            3
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-around py-2 md:gap-x-4">
        <div
          className={`relative ${selectedTable === 4 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(4)}
        >
          <TestSvgIcon2 className="size-[6rem] md:size-[10rem] lg:size-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            4
          </span>
        </div>
        <div
          className={`relative ${selectedTable === 5 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(5)}
        >
          <TestSvgIcon3 className="w-[10rem] md:w-[16rem] lg:w-[24rem] rotate-90" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            5
          </span>
        </div>
        <div
          className={`relative ${selectedTable === 6 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(6)}
        >
          <TestSvgIcon1 className="h-[6rem] md:h-[10rem] lg:h-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            6
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-around py-2 md:gap-x-4">
        <div
          className={`relative ${selectedTable === 7 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(7)}
        >
          <TestSvgIcon2 className="size-[6rem] md:size-[10rem] lg:size-[16rem]" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            7
          </span>
        </div>
        <div
          className={`relative ${selectedTable === 8 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(8)}
        >
          <TestSvgIcon1 className="h-[6rem] md:h-[10rem] lg:h-[16rem] rotate-90" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            8
          </span>
        </div>
        <div
          className={`relative ${selectedTable === 9 ? 'text-blue-500' : 'text-black'}`}
          onClick={() => handleTableClick(9)}
        >
          <TestSvgIcon2 className="size-[6rem] md:size-[10rem] lg:size-[16rem] stroke-red-500 fill-red-500" />
          <span className="absolute cursor-pointer inset-0 flex items-center justify-center font-bold text-xl">
            9
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleOpenPopup}
        className="w-[50vh] self-center px-4 py-2 my-[2rem] bg-blue-500 text-white rounded transition-transform transform hover:scale-105 hover:bg-blue-600"
      >
        Select
      </button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-blue-100 p-2 shadow-2xl rounded-2xl relative">
            <Fancybutton />
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
