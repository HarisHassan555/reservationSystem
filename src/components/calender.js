import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "../features/appSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = React.useState(null);

  React.useEffect(() => {
    dispatch(setSelectedDate(startDate));
  }, [startDate, dispatch]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="w-[12rem] self-center sm:w-[10rem]">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={tomorrow}
        className="w-[12rem] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block sm:w-[10rem] p-2.5"
        placeholderText="Select a date"
      />
    </div>
  );
}

export default Calender;
