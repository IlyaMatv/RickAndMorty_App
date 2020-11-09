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
  const isDisabledBtn = useSelector((state) => state.isDisabledBtn);

  useEffect(() => {
    dispatch(getCharactersTC());
    dispatch(setIsSearchActive());

    return () => {
      dispatch(setIsSearchActive());
    };
  }, []);

  const onClickBtnNext = () => {
    if (nextPage <= 33) {
      dispatch(getNextCharactersTC(nextPage + 1, pageUrl));
      setNextPage(nextPage + 1);
      // console.log(isDisabledBtn)
    } else {
      return false;
    }
  };

  const onClickBtnPrev = () => {
    if (nextPage >= 2) {
      dispatch(getNextCharactersTC(nextPage - 1, pageUrl));
      setNextPage(nextPage - 1);
    } else {
      return false;
    }
  };

  // console.log(nextPage)

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
            // disabled={() => {
            //   if (nextPage <= 1) {
            //     return true;
            //   } else if (nextPage > 1) {
            //     return false;
            //   }
            // }}
            onClickBtn={onClickBtnPrev}
          />
          <PageButton
            text="next"
            disabled={isDisabledBtn}
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
