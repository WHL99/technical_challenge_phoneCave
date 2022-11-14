import React from 'react'

export default function PhoneCard(props) {
    return (
        <div>
            <img src={`/images/${props.clickedPhone.imageFileName}`} alt={props.clickedPhone.name} height="400" />
            <h1>{props.clickedPhone.name}</h1>
            <h2>{props.clickedPhone.manufacturer}</h2>
        </div>
    )
}
