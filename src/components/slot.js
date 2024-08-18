import React, { useState, useRef, useEffect } from 'react';

function Slot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target) && !inputRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-flex w-[50vh] sm:w-[10rem] ">
      <input
        type="text"
        readOnly
        value={selectedSlot || "Select a time slot"}
        onClick={toggleDropdown}
        ref={inputRef}
        className={`w-[50vh] sm:w-[10rem] bg-gray-50 border border-gray-300 text-center text-sm rounded-lg block p-2.5 cursor-pointer ${selectedSlot ? 'text-gray-900' : 'text-gray-400'}`}
      />

      {isOpen && (
        <div
          ref={dropdownRef}
          className="z-10 mt-[2rem] absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul className="pt-4 text-sm text-gray-700">          
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("11:15 AM - 12:30 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                11:15 AM - 12:30 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("12:45 PM - 2:00 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                12:45 PM - 2:00 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("2:15 PM - 3:30 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                2:15 PM - 3:30 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("3:45 PM - 5:00 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                3:45 PM - 5:00 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("5:15 PM - 6:30 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                5:15 PM - 6:30 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("6:45 PM - 8:00 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                6:45 PM - 8:00 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("8:15 PM - 9:30 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                8:15 PM - 9:30 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("9:45 PM - 11:00 PM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                9:45 PM - 11:00 PM
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleSlotSelect("11:15 PM - 12:30 AM")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                11:15 PM - 12:30 AM
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Slot;
