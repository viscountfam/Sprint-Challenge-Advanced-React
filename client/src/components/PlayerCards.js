import React from 'react'

export default function PlayerCards(props) {
    return (
        <div>
            <h3>{props.player.name}</h3>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}
