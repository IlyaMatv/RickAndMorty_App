import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersInEpisodeTC } from "../../../../redux/reducer";
import s from "./Episode.module.css";

const Episode = React.memo((props) => {
  const dispatch = useDispatch();
  const charactersInEpisode = useSelector((state) => state.episodeСharacters);
  const [selfId, setSelfId] = useState(null);
  const [btnShow, setBtnShow] = useState(true);

  function onClickBtn() {
    props.characters.forEach((el) => {
      dispatch(getCharactersInEpisodeTC(el, props.id));
    });
    setBtnShow(false);
    setSelfId(props.id);
  }

  return (
    <div
      className={s.episode_wrap}
      onMouseLeave={() => {
        setSelfId(null);
        setBtnShow(true);
      }}
    >
      <h2>{props.name}</h2>
      <h3>{props.airDate}</h3>

      <div className={s.episode_btn__wrap}>
        {btnShow && (
          <button className={s.episode_btn} onClick={onClickBtn}>
            <i class="fas fa-angle-double-down"></i>
          </button>
        )}
      </div>

      <div className={s.charactersInEpisode}>
        {props.id === selfId
          ? charactersInEpisode.map((el) => (
              <CharacterInEpisode
                key={el.id}
                id={el.id}
                image={el.image}
                name={el.name}
              />
            ))
          : false}
      </div>
    </div>
  );
});

export default Episode;

export const CharacterInEpisode = (props) => {
  return (
    <div data-title={`${props.name}`} className={s.img_wrap}>
      <img src={`${props.image}`} alt={`${props.name}`} />
    </div>
  );
};
