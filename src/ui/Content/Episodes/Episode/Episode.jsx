import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersByURLTC } from '../../../../redux/reducer'
import s from './Episode.module.css'

const Episode = React.memo((props) => {

    const dispatch = useDispatch()
    const episodes = useSelector(state => state.episodes)


    console.log(episodes);


    return (
        <div className={s.episode_wrap}>
            <h2>{props.name}</h2>
            <h3>{props.airDate}</h3>
        </div>
    )
})

export default Episode