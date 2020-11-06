import React, { useState } from "react";
import s from './Search.module.css'

const Search = (props) => {

  const [inputValue, setInputValue] = useState('')

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }


  return (
    <div className={s.input_wrap}>
      <input type="text" onChange={inputHandler} value={inputValue} />
    </div>
  );
};

export default Search;
