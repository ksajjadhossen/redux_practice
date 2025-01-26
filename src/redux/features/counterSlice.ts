import { createSlice } from "@reduxjs/toolkit";
const initialState = { number: 0 };

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.number++;
		},
		decrement: (state, action) => {
			state.number--;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
