import React from "react";
import Characters from "./Characters/Characters";
import Locations from "./Locations/Locations";
import Episodes from "./Episodes/Episodes";
import s from "./Content.module.css";

const Content = (props) => {

  return (
    <div className={s.content}>
      {props.link === "ch" ? (
        <Characters />
      ) : props.link === "lo" ? (
        <Locations />
      ) : props.link === "ep" ? (
        <Episodes />
      ) : (
        false
      )}
    </div>
  );
};

export default Content;