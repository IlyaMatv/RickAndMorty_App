import React from 'react'
import s from './Location.module.css'

const Location = (props) => {

    return (
        <div className={s.location}>
            <div>Name: <b>{props.name}</b></div>
            <div>Type: <b>{props.type}</b></div>
            <div>Dimension: <b>{props.dimension}</b></div>
        </div>
    )
}

export default Location