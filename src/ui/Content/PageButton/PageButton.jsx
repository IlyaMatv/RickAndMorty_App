import React from "react";
import s from "./PageButton.module.css";
import { ScrollTo } from "react-scroll-to";

const PageButton = (props) => {
  return (
    <ScrollTo>
      {({ scroll }) => (
        <button
          disabled={props.disabled}
          onClick={() => {
            props.onClickBtn();
            console.log(props.disabled)
            !props.disabled && scroll({ y: 0, smooth: true });
          }}
          className={s.link}
        >
          {props.text}
        </button>
      )}
    </ScrollTo>
  );
};

export default PageButton;
