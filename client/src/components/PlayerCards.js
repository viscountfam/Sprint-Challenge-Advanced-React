import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function PlayerCards(props) {
   
    return (
        <div className="player-cards">
            <h3>{props.player.name}</h3>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}
