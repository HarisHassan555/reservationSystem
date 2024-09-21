import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../features/appSlice";
import { motion } from "framer-motion";

export default function Fancybutton() {
  const dispatch = useDispatch();
  const { selectedDate, selectedSlot, selectedTable, userInfo } = useSelector((state) => state.app);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    dispatch(setUserInfo({ name, phone, email }));

    // Format date as YYYY-MM-DD
    const formattedDate = selectedDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const reservationData = {
      customerName: name,
      phone: parseInt(phone),
      email: email,
      date: formattedDate,
      slot: selectedSlot,
      TableNumber: parseInt(selectedTable)
    };

    try {
      const response = await fetch('https://resturentbackend-git-main-nouman-alis-projects.vercel.app/api/reservation/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      const data = await response.json();
      setPopupMessage(JSON.stringify(data, null, 2));
      setShowPopup(true);
    } catch (error) {
      console.error('Error posting data:', error);
      setPopupMessage("An error occurred. Please try again.");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col justify-center bg-transparent gap-y-[4rem]">
      <motion.div
        className="text-center self-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-[1rem] bg-blue-100 rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
            <div className="">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded"
              />
            </div>
            <div className="">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded"
                pattern="\d*"
                inputMode="numeric"
              />
            </div>
            <div className="">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded"
              />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded transition-transform transform hover:scale-105 hover:bg-blue-600"
            >
              Submit Reservation
            </button>
          </form>
        </div>
      </motion.div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <pre>{popupMessage}</pre>
            <button onClick={closePopup} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
