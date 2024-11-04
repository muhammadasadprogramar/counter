import React from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="w-full grid grid-cols-2 gap-2 mt-8">
      <button
        onClick={handleIncrement}
        className="bg-teal-700 py-2 text-white font-medium cursor-pointer rounded-md"
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="bg-teal-700 py-2 text-white font-medium cursor-pointer rounded-md"
      >
        Decrement
      </button>
    </div>
  );
};

export default Buttons;
