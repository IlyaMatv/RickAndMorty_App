import React, { useEffect, useState } from "react";
import classes from "./MessageCloud.module.css";
import Name from "./Name/Name";
import MessageText from "./MessageText/MessageText";
import MessageLink from "./MessageLink/MessageLink";

const MessageCloud = (props) => {
  const [isActive, setIsActive] = useState(true);

  const onMouseHandler = () => {
    setIsActive(!isActive);
  };

  

  // console.log(props);


  return (
    <div
      className={classes.message}
      onMouseEnter={onMouseHandler}
      onMouseLeave={onMouseHandler}
    >
      <Name />
      {isActive ? <MessageText /> : <MessageLink pageChanger={props.pageChanger} />}
    </div>
  );
};

export default MessageCloud;
