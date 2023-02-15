import React from "react";

const EventCard = (props) => {
    return (
        <div className="card_event">
            <div className="card_body">
                <img src={props.img}></img>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_info">{props.info}</p>
            </div>
            <button className="card_button">
                More info
            </button>
        </div>
    )
}

export default EventCard;