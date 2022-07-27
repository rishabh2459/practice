//To handle many states//

import React, { useReducer } from "react";

const HooksUseReducer = () => {
  const initialState = {
      counter: 0,
  };
  const reducer = (state = initialState, action) => {
    switch (action) {
      case "Increment":
        return {counter: state.counter + 1};
      case "decrement":
        return {counter: state.counter - 1};
      case "reset":
        return {counter: 0};
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count);
  return (
    <div>      
      <h2>{count.counter}</h2>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default HooksUseReducer;
