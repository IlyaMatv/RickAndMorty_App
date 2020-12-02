import React from "react";
import Characters from "./Characters/Characters";
import Locations from "./Locations/Locations";
import Episodes from "./Episodes/Episodes";
import s from "./Content.module.css";

const Content = (props) => {


  return (
    <div className={s.content}>
      {props.link === "ch" ? (
        <Characters page={props.page} pageChanger={props.pageChanger} />
      ) : props.link === "lo" ? (
        <Locations page={props.page} pageChanger={props.pageChanger} />
      ) : props.link === "ep" ? (
        <Episodes page={props.page} pageChanger={props.pageChanger} />
      ) : (
        false
      )}

      
      
    </div>
  );
};

export default Content;
