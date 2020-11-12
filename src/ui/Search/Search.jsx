import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharactersByNameTC } from "../../redux/reducer";
import s from "./Search.module.css";

const Search = (props) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };


  const btnOnClick = () => {
    let name = inputValue.toLowerCase();
    let nameUrl = `&name=${name}`;
    dispatch(getCharactersByNameTC(name, nameUrl));
    setInputValue("");
    props.pageChanger(1)
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      btnOnClick()
    }
  };

  return (
    <div className={s.input_wrap}>
      <div className={s.flex_btn}>
        <input
          className={s.search_input}
          onKeyPress={onKeyPress}
          type="text"
          onChange={inputHandler}
          value={inputValue}
          placeholder="looking for someone?"
        />
        <div>
          <button onClick={btnOnClick} className={s.search_btn}>
            <b>
              <i class="fas fa-search"></i>
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
