import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

function Counter({ counter }) {
  const dispatch = useDispatch();
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={() => handleDecrement(counter.id)}
          className="bg-red-400 rounded-md p-2 px-4 text-white"
        >
          Decrement
        </button>
        <h1 className="text-4xl text-center font-bold ml-3 mr-3">
          {counter.value}
        </h1>
        <button
          onClick={() => handleIncrement(counter.id)}
          className="bg-green-400 rounded-md p-2 px-4 text-white"
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter;
