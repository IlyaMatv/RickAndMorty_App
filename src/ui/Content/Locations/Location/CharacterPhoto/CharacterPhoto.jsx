import React, { useEffect, useState } from "react";
import s from "./CharacterPhoto.module.css";

const CharacterPhoto = (props) => {
  const [move, setMove] = useState({ x: "", y: "" });
  const [photoShow, setPhotoShow] = useState(false);
  const [characterImg, setCharacterImg] = useState({});

  const onMouseEnter = (img) => {
    setPhotoShow(true);
    setCharacterImg(img);
  };

  const onMouseLeave = () => {
    setPhotoShow(false);
    setCharacterImg({});
  };

  return (
    <p
      className={s.residentsP}
      onMouseEnter={() => onMouseEnter(props.image)}
      onMouseLeave={() => onMouseLeave()}
      onMouseMove={(e) =>
        setTimeout(
          () => setMove({ x: `${e.clientX - 50}`, y: `${e.clientY + 30}` }),
          100
        )
      }
    >
      {props.name}
      {photoShow && (
        <div
          className={s.photo}
          style={{ top: `${move.y}px`, left: `${move.x}px` }}
        >
          <img src={characterImg} alt="photo" />
        </div>
      )}
    </p>
  );
};

export default CharacterPhoto;
