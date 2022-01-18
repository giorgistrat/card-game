import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startActions } from "./store/startGame-slice";
import { playerActions } from "./store/player-slice";
import Board from "./Components/UI/Board";
import Button from "./Components/Button";
import CardGame from "./Components/CardGame";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const showGame = useSelector((state) => state.start.startGame);

  const startGameHandler = () => {
    dispatch(startActions.startGame());
  };

  useEffect(() => {
    const playerName = prompt("Enter Player's Name: ");
    dispatch(playerActions.setPlayerName(playerName));
  }, [dispatch]);

  return (
    <Board>
      {showGame && <CardGame />}
      {!showGame && (
        <Button
          className={styles["main-btn"]}
          onClick={startGameHandler}
          text={"Start Game"}
        />
      )}
    </Board>
  );
}

export default App;
