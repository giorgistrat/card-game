import React from "react";
import { playerCards, botCards } from "../assets/cardImages/index";
import Card from "./Card";
import { useSelector } from "react-redux";
import styles from "./CardGame.module.css";

function CardGame() {
  const botName = useSelector((state) => state.bot.botName);
  const playerName = useSelector((state) => state.player.playerName);
  const botStatus = useSelector((state) => state.bot.playerStatus);
  const playerStatus = useSelector((state) => state.player.playerStatus);
  const botCardScr = useSelector((state) => state.bot.cards);
  const playerCardScr = useSelector((state) => state.player.cards);

  return (
    <div className={styles["card-container"]}>
      <div className={styles["bot-container"]}>
        <h3 className={styles["bot-container__score"]}>{botName}: 0</h3>
        <div className={styles["bot-container__cards"]}>
          {botCards.map((card, index) => {
            return (
              <Card
                key={index}
                status={botStatus}
                img={card}
                scr={botCardScr[index].scr}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["player-container"]}>
        <h3 className={styles["player-container__score"]}>{playerName}: 0</h3>
        <div className={styles["player-container__cards"]}>
          {playerCards.map((card, index) => {
            return (
              <Card
                key={index}
                status={playerStatus}
                img={card}
                scr={playerCardScr[index].scr}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardGame;
