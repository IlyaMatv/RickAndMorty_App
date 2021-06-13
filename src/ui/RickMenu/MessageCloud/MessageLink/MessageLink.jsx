import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MessageLink.module.css'

const MessageLink = (props) => {


    return (
        <div className={s.links}>
            <NavLink to="/characters" onClick={() => props.pageChanger(1)} activeClassName={s.active}>Characters</NavLink>
            <NavLink to="/locations" onClick={() => props.pageChanger(1)} activeClassName={s.active}>Locations</NavLink>
            <NavLink to="/episodes" onClick={() => props.pageChanger(1)} activeClassName={s.active}>Episodes</NavLink>
            <NavLink to="/" className={s.homeLink}>home</NavLink>
        </div>
    )
}

export default MessageLink