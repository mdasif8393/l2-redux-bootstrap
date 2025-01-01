import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
