import React from "react";
import s from "./Location.module.css";

const Location = (props) => {

  
  return (
    <div className={s.location}>
      <div className={s.loc_name}>
        <span>Name: </span>
        <b>{props.name}</b>
      </div>
      <div className={s.loc_info}>
        <span>
          Type: <span />
        </span>
        <b>{props.type}</b>
      </div>
      <div className={s.loc_info}>
        <span>Dimension: </span>
        <b>{props.dimension}</b>
      </div>
    </div>
  );
};

export default Location;
