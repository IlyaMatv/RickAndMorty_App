import React from "react";
import rickPhoto from "../../assets/rick.gif";
import s from "./RickMenu.module.css";
import MessageCloud from "./MessageCloud/MessageCloud";
import { NavLink } from "react-router-dom";

const RickMenu = (props) => {



  return (
    <div className={s.rick_menu}>
      {/* <NavLink to="/"> */}
        <img className={s.rick_photo} src={rickPhoto} />
      {/* </NavLink> */}
      <MessageCloud pageChanger={props.pageChanger} />
    </div>
  );
};

export default RickMenu;
