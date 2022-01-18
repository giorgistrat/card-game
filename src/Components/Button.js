import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
    >
      {props.text}
    </button>
  );
}

export default Button;
