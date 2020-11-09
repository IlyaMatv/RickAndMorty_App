import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MessageLink.module.css'

const MessageLink = (props) => {

    return (
        <div className={s.links}>
            <NavLink to="/characters" activeClassName={s.active}>Characters</NavLink>
            <NavLink to="/locations" activeClassName={s.active}>Locations</NavLink>
            <NavLink to="/episodes" activeClassName={s.active}>Episodes</NavLink>
        </div>
    )
}

export default MessageLink