import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersInEpisodeTC } from "../../../../redux/reducer";
import s from "./Episode.module.css";

const Episode = React.memo((props) => {


  const dispatch = useDispatch();
  const charactersInEpisode = useSelector((state) => state.episodeСharacters);


  const onClickBtn = () => {
    props.characters.forEach(el => {
      for (let i = 0; i < props.characters.length; i++) {
        dispatch(getCharactersInEpisodeTC(el, props.id));
      }
    });

    // console.log(props.characters.length);
  };

  return (
    <div className={s.episode_wrap}>
      <h2>{props.name}</h2>
      <h3>{props.airDate}</h3>

      <button onClick={onClickBtn}>click</button>
    </div>
  );
});

export default Episode;
