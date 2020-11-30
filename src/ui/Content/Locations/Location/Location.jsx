import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersByURLTC } from "../../../../redux/reducer";
import CharacterPhoto from "./CharacterPhoto/CharacterPhoto";
import s from "./Location.module.css";

const Location = React.memo((props) => {
  const dispatch = useDispatch();
  const residents = useSelector((state) => state.residents);
  const [selfId, setSelfId] = useState(null);

  const getCharacters = () => {
    props.characters.forEach((el) => {
      dispatch(getCharactersByURLTC(el));
    });
    setSelfId(props.id);
  };

  return (
    <div className={s.location} onMouseLeave={() => setSelfId(null)}>
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
      </div>
      <div className={s.loc_residents}>
        <span> Residents: </span>
        <div>
          <a className={s.residents_link} onClick={getCharacters}>
            <i class="far fa-address-card"></i>
          </a>
        </div>
      </div>
      {props.id === selfId ? <Residents residents={residents} /> : false}
    </div>
  );
});

export default Location;

function Residents(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.residents);
  }, [props.residents]);

  return (
    <div className={s.residents}>
      {data &&
        data.map((el) => (
          <CharacterPhoto image={el.image} key={el.id} name={el.name} />
        ))}
    </div>
  );
}
