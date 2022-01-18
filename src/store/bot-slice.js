import { botCards } from "../assets/cardImages";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  cards: [
    { scr: 1, img: botCards.botCard1 },
    { scr: 2, img: botCards.botCard2 },
    { scr: 3, img: botCards.botCard3 },
    { scr: 4, img: botCards.botCard4 },
    { scr: 5, img: botCards.botCard5 },
    { scr: 6, img: botCards.botCard6 },
    { scr: 7, img: botCards.botCard7 },
    { scr: 8, img: botCards.botCard8 },
    { scr: 9, img: botCards.botCard9 },
    { scr: 10, img: botCards.botCard10 },
    { scr: 11, img: botCards.botCard11 },
    { scr: 12, img: botCards.botCard12 },
    { scr: 13, img: botCards.botCard13 },
  ],
  playerStatus: false,
  botName: "John Doe",
  botScore: 0,
};

const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    setScore(state) {
      state.botScore++;
    },
    setStatus(state) {
      state.playerStatus = true;
    },
  },
});

export const botActions = botSlice.actions;
export default botSlice;
