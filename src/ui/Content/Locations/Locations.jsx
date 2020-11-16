import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationsTC } from "../../../redux/reducer";
import Location from "./Location/Location";
import s from "./Locations.module.css";

const Locations = (props) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);
  useEffect(() => {
    dispatch(getLocationsTC());
  }, []);

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
    </div>
  );
};

export default Locations;
