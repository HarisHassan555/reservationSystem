import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender() {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="w-[50vh] self-center sm:w-[8rem]">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="w-[50vh] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block sm:w-[8rem] p-2.5"
        placeholderText="Select a date"
      />
    </div>
  );
}

export default Calender;
