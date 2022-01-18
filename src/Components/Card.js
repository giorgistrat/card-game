import React from "react";
import styles from "./Card.module.css";
import cardBack from "../assets/card-back.png";

function Card(props) {
  const cardClass = props.status
    ? `${styles.card} ${styles.playerCard}`
    : styles.card;

  console.log(props.scr);

  return (
    <div className={cardClass}>
      <img src={props.status ? props.img : cardBack} alt="" />
    </div>
  );
}

export default Card;
