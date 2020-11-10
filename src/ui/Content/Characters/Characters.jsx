import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharactersTC,
  getNextCharactersTC,
  setIsSearchActive,
} from "../../../redux/reducer";
import PageButton from "../PageButton/PageButton";
import Character from "./Character/Character";
import s from "./Characters.module.css";

const Characters = (props) => {
  const dispatch = useDispatch();

  const [nextPage, setNextPage] = useState(1);
  const characters = useSelector((state) => state.characters);
  const pageUrl = useSelector((state) => state.nextPageUrl);
  const numberOfPages = useSelector((state) => state.numberOfPages);

  useEffect(() => {
    dispatch(getCharactersTC());
    dispatch(setIsSearchActive());
    return () => {
      dispatch(setIsSearchActive());
    };
  }, []);

  const onClickBtnNext = () => {
    dispatch(getNextCharactersTC(nextPage + 1, pageUrl));
    setNextPage(nextPage + 1);
  };

  const onClickBtnPrev = () => {
    dispatch(getNextCharactersTC(nextPage - 1, pageUrl))
    setNextPage(nextPage - 1)
  };

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
          <PageButton
            text="prev"
            disabled={nextPage <= 1 ? true : false}
            onClickBtn={onClickBtnPrev}
          />
          <PageButton
            text="next"
            disabled={nextPage >= numberOfPages ? true : false}
            onClickBtn={onClickBtnNext}
          />
        </div>
        <div className={s.pageIs}>
          Page is: <b>{nextPage}</b>
        </div>
      </div>
    </div>
  );
};

export default Characters;
