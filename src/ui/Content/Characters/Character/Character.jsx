import React from "react";
import s from "./Character.module.css";

const Character = (props) => {

  let alive =
    props.status === "Alive" ? (
      <i
        class="far fa-smile"
        style={{ color: "#55CC44", fontSize: "18px" }}
      ></i>
    ) : props.status === "Dead" ? (
      <i
        class="far fa-dizzy"
        style={{ color: "#D63D2E", fontSize: "18px" }}
      ></i>
    ) : (
      false
    )

  return (
    <div className={s.character} >
      <img className={s.image} src={props.img} alt="img" />
      <div className={s.info_wrap}>
        <div className={s.name}><b>{props.name}</b></div>
        <div className={s.spec}>{alive} {props.status} - {props.species}</div>
        <div className={s.character_info}><span>From:</span> {props.origin.name}</div>
        <div className={s.character_info}><span>Last seen:</span> {props.location.name}</div>
      </div>
    </div>
  );
};

export default Character;
