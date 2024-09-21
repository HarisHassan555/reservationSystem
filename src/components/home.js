import React from "react";
import Calender from "./calender";
import Slot from "./slot";
import Table from "./table";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-5 sm:justify-between sm:flex-row py-[2rem] px-[4rem] ">
        <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-3 items-center">
          <Calender />
          <Slot />
        </div>

        <div className="flex flex-row gap-x-[1rem] self-center">
          <div className="flex flex-col p-1">
            <div className="flex size-4 bg-gray-500 rounded-full self-center"></div>
            <p className="text-center">Reserved</p>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex size-4 bg-black rounded-full self-center"></div>
            <p className="text-center">Available</p>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex size-4 bg-blue-500 rounded-full self-center"></div>
            <p className="text-center">Selected</p>
          </div>
        </div>
      </div>
      
      <Table />
    </div>
  );
}
