import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodesTC, getNextEpisodesTC } from "../../../redux/reducer";
import PageButton from "../PageButton/PageButton";
import Episode from "./Episode/Episode";
import s from "./Episodes.module.css";

const Episodes = (props) => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);
  const numberOfPages = useSelector((state) => state.numberOfPages);

  const onClickBtnNext = () => {
    dispatch(getNextEpisodesTC(props.page + 1));
    props.pageChanger(props.page + 1);
  };

  const onClickBtnPrev = () => {
    dispatch(getNextEpisodesTC(props.page - 1));
    props.pageChanger(props.page - 1);
  };

  useEffect(() => {
    dispatch(getEpisodesTC());
  }, []);

  return (
    <div className={s.episodes_wrap}>
    
        {episodes.map((el) => (
          <Episode
            name={el.name}
            airDate={el.air_date}
            key={el.id}
            characters={el.characters}
          />
        ))}

      <div className={s.btn_wrap}>
        <PageButton
          onClickBtn={onClickBtnPrev}
          text="prev"
          disabled={props.page <= 1 ? true : false}
        />
        <PageButton
          onClickBtn={onClickBtnNext}
          text="next"
          disabled={props.page >= numberOfPages ? true : false}
        />
        <div className={s.pageIs}>
          Page is: <b>{props.page}</b>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
