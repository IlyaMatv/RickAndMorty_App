import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationsTC, getNextLocationsTC } from "../../../redux/reducer";
import Location from "./Location/Location";
import s from "./Locations.module.css";
import PageButton from "../PageButton/PageButton";

const Locations = (props) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);
  const numberOfPages = useSelector((state) => state.numberOfPages);

  useEffect(() => {
    dispatch(getLocationsTC());
  }, []);

  const onClickBtnNext = () => {
    dispatch(getNextLocationsTC(props.page + 1));
    props.pageChanger(props.page + 1);
  };

  const onClickBtnPrev = () => {
    dispatch(getNextLocationsTC(props.page - 1));
    props.pageChanger(props.page - 1);
  };

  return (
    <div className={s.location_wrap}>
      {locations.map((el) => (
        <Location
          key={el.id}
          name={el.name}
          type={el.type}
          dimension={el.dimension}
          residents={el.residents}
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

export default Locations;
