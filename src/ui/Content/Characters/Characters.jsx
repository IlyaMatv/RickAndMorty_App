import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersTC } from "../../../redux/reducer";
import Character from "./Character/Character";
import s from "./Characters.module.css";

const Characters = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersTC());
  }, []);

  const characters = useSelector((state) => state.characters);

  console.log(characters);

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
    </div>
  );
};

export default Characters;
