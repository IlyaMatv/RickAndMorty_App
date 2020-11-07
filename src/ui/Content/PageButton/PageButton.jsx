import React from 'react'
import s from './PageButton.module.css'

const PageButton = (props) => {

    

    return <button onClick={props.onClickBtn} className={s.link}>{props.text}</button>
}

export default PageButton