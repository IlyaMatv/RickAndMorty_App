import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharactersTC,
  getNextCharactersTC,
  setIsSearchActive,
  setCharactersRefresh
} from "../../../redux/reducer";
import PageButton from "../PageButton/PageButton";
import Character from "./Character/Character";
import s from "./Characters.module.css";

const Characters = (props) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const pageUrl = useSelector((state) => state.nextPageUrl);
  const numberOfPages = useSelector((state) => state.numberOfPages);

  useEffect(() => {
    dispatch(getCharactersTC());
    dispatch(setIsSearchActive());
    return () => {
      dispatch(setIsSearchActive());
      dispatch(setCharactersRefresh())
    };
  }, []);

  const onClickBtnNext = () => {
    dispatch(getNextCharactersTC(props.page + 1, pageUrl));
    props.pageChanger(props.page + 1);
  };

  const onClickBtnPrev = () => {
    dispatch(getNextCharactersTC(props.page - 1, pageUrl))
    props.pageChanger(props.page - 1);
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
            disabled={props.page <= 1 ? true : false}
            onClickBtn={onClickBtnPrev}
          />
          <PageButton
            text="next"
            disabled={props.page >= numberOfPages ? true : false}
            onClickBtn={onClickBtnNext}
          />
        </div>
        <div className={s.pageIs}>
          Page is: <b>{props.page}</b>
        </div>
      </div>
    </div>
  );
};

export default Characters;
