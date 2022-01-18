import { playerCards } from "../assets/cardImages";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    { scr: 1, img: playerCards.card1 },
    { scr: 2, img: playerCards.card2 },
    { scr: 3, img: playerCards.card3 },
    { scr: 4, img: playerCards.card4 },
    { scr: 5, img: playerCards.card5 },
    { scr: 6, img: playerCards.card6 },
    { scr: 7, img: playerCards.card7 },
    { scr: 8, img: playerCards.card8 },
    { scr: 9, img: playerCards.card9 },
    { scr: 10, img: playerCards.card10 },
    { scr: 11, img: playerCards.card11 },
    { scr: 12, img: playerCards.card12 },
    { scr: 13, img: playerCards.card13 },
  ],
  playerStatus: true,
  playerName: "",
  playerScore: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setScore(state) {
      state.playerScore++;
    },
    setPlayerName(state, action) {
      state.playerName += action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice;
