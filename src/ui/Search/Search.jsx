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

  const sendName = () => {
    let name = inputValue.toLocaleLowerCase();
    let nameUrl = `&name=${name}`
    dispatch(getCharactersByNameTC(name, nameUrl));
    setInputValue("")
  };


  return (
    <div className={s.input_wrap}>
      <div className={s.flex_btn}>
        <input
          className={s.search_input}
          type="text"
          onChange={inputHandler}
          value={inputValue}
          placeholder="looking for someone?"
        />
        <div>
          <button onClick={sendName} className={s.search_btn}>
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
