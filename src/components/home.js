import React from "react";
import { useSelector } from "react-redux";
import Calender from "./calender";
import Slot from "./slot";
import Table from "./table";
export default function Home() {
  const { selectedDate, selectedSlot, selectedTable, userInfo } = useSelector(
    (state) => state.app
  );

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
            <div className="flex size-4 bg-neutral-50 rounded-full self-center"></div>
            <p className="text-center">Available</p>
          </div>
          <div className="flex flex-col p-1">
            <div className="flex size-4 bg-blue-500 rounded-full self-center"></div>
            <p className="text-center">Selected</p>
          </div>
        </div>
      </div>

      <div>
        <h2>Selected Date: {selectedDate ? selectedDate.toDateString() : "None"}</h2>
        <h2>Selected Slot: {selectedSlot || "None"}</h2>
        <h2>Selected Table: {selectedTable || "None"}</h2>
        <p>Name: {userInfo.name || "None"}</p>
        <p>Phone: {userInfo.phone || "None"}</p>
        <p>Email: {userInfo.email || "None"}</p>
      </div>
      <Table />
    </div>
  );
}
