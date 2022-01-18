import startSlice from "./startGame-slice";
import playerSlice from "./player-slice";
import botSlice from "./bot-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    start: startSlice.reducer,
    player: playerSlice.reducer,
    bot: botSlice.reducer,
  },
});

export default store;
