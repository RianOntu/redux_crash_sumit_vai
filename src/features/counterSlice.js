import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counter = state.find((c) => c.id == action.payload);
      counter.value = counter.value + 1;
    },
    decrement: (state, action) => {
      const counter = state.find((c) => c.id == action.payload);
      counter.value = counter.value - 1;
    },
  },
});

export default counterSlice.reducer;
export const {increment,decrement}=counterSlice.actions;
