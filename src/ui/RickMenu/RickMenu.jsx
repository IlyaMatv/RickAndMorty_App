import React from "react";
import rickPhoto from "../../assets/rick.gif";
import s from "./RickMenu.module.css";
import MessageCloud from "./MessageCloud/MessageCloud";

const RickMenu = (props) => {



  return (
    <div className={s.rick_menu}>
        <img className={s.rick_photo} alt="rick" src={rickPhoto} />
      <MessageCloud pageChanger={props.pageChanger} />
    </div>
  );
};

export default RickMenu;
