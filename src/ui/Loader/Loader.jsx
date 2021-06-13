import React from "react";
import ReactDOM from 'react-dom';
import loader from "../../assets/loader.gif";
import s from "./Loader.module.css";


const root = document.getElementById('root');


const Loader = () => {
  return (
    <div className={s.loader_wrapper}>
      <div className={s.loader}>
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
};

const LoaderContainer = () => (ReactDOM.createPortal(<Loader />, root));

export default LoaderContainer;

