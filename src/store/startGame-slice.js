import { createSlice } from "@reduxjs/toolkit";

const initialState = { startGame: false };

const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    startGame(state) {
      state.startGame = true;
    },
  },
});

export const startActions = startSlice.actions;
export default startSlice;
