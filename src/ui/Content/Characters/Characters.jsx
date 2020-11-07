import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersTC, getNextCharactersTC } from "../../../redux/reducer";
import PageButton from "../PageButton/PageButton";
import Character from "./Character/Character";
import s from "./Characters.module.css";

const Characters = (props) => {
  const dispatch = useDispatch();

  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    dispatch(getCharactersTC());
  }, []);

  const onClickBtnNext = () => {
    dispatch(getNextCharactersTC(nextPage + 1));
    setNextPage(nextPage + 1);
  };

  console.log(nextPage);
  const onClickBtnPrev = () => {
    if (nextPage >= 2) {
      dispatch(getNextCharactersTC(nextPage - 1));
      setNextPage(nextPage - 1);
    } else {
      return false;
    }
  };

  const characters = useSelector((state) => state.characters);

  return (
    <div className={s.wrap}>
      {characters.map((el) => (
        <Character
          key={el.id}
          name={el.name}
          img={el.image}
          status={el.status}
          species={el.species}
          url={el.url}
          origin={el.origin}
          location={el.location}
        />
      ))}

      <div className={s.btn_wrap}>
        <div>
          <PageButton text="prev" onClickBtn={onClickBtnPrev} />
          <PageButton text="next" onClickBtn={onClickBtnNext} />
        </div>
        <div className={s.pageIs}>Page is: <b>{nextPage}</b></div>
      </div>
    </div>
  );
};

export default Characters;
