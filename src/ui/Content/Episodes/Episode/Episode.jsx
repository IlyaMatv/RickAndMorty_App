import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersInEpisodeTC } from "../../../../redux/reducer";
import s from "./Episode.module.css";

const Episode = React.memo((props) => {
  const dispatch = useDispatch();
  const charactersInEpisode = useSelector((state) => state.episodeСharacters);
  const [selfId, setSelfId] = useState(null);

  function onClickBtn() {
    props.characters.forEach((el) => {
      dispatch(getCharactersInEpisodeTC(el, props.id));
    });
    setSelfId(props.id);
  }

  return (
    <div className={s.episode_wrap} 
    // onMouseLeave={() => setSelfId(null)}
    >
      <h2>{props.name}</h2>
      <h3>{props.airDate}</h3>

      <button onClick={onClickBtn}>click</button>
      <div className={s.charactersInEpisode}>
        {props.id === selfId
          ? charactersInEpisode.map((el) => (
              <CharacterInEpisode id={el.id} image={el.image} name={el.name} />
            ))
          : false}
      </div>
    </div>
  );
});

export default Episode;

export const CharacterInEpisode = (props) => {
  return (
    <div key={props.id}>
      <img src={`${props.image}`} alt={`${props.name}`} title={`${props.name}`} />
    </div>
  );
};
