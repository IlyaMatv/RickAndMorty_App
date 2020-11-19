import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharactersByURLTC,
  refreshCharactersInLocation,
} from "../../../../redux/reducer";
import s from "./Location.module.css";

const Location = (props) => {
  const dispatch = useDispatch();
  

  const getCharacters = () => {
    dispatch(refreshCharactersInLocation());
    props.residents.forEach((el) => {
      dispatch(getCharactersByURLTC(el));
    });
    props.setShowAll((state) => !state);
  };

  return (
    <div className={s.location}>
      <div className={s.loc_name}>
        <span>Name: </span>
        <b>{props.name}</b>
      </div>
      <div className={s.loc_info}>
        <span>
          Type: <span />
        </span>
        <b>{props.type}</b>
      </div>
      <div className={s.loc_info}>
        <span>Dimension: </span>
        <b>{props.dimension}</b>
        <div>
          <button onClick={getCharacters}>who was here</button>
        </div>
      </div>
    </div>
  );
};

export default Location;

