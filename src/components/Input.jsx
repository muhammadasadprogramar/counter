import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  const inputValue = useRef();

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputValue.current.value,
      },
    });
    inputValue.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputValue.current.value,
      },
    });
    inputValue.current.value = "";
  };
  return (
    <div className="w-full">
      <input
        ref={inputValue}
        type="text"
        placeholder="Enter Any Number"
        className="w-full outline-none border-[2px] border-teal-800 rounded-md py-3 my-4 ps-4"
      />{" "}
      <br />
      <div className="grid grid-cols-2 gap-2 w-full">
        <button
          onClick={handleAdd}
          className="bg-green-700 py-2 text-white font-medium cursor-pointer rounded-md"
        >
          ADD
        </button>
        <button
          onClick={handleSubtract}
          className="bg-red-500 py-2 text-white font-medium cursor-pointer rounded-md"
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Input;
