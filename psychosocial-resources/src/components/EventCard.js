import React from "react";

const EventCard = (props) => {
    return (
        <div className="card_event" key={props.id}>
            <div className="card_body">
                <img src={props.img}></img>
                <h2 className="card_title">{props.title}</h2>
                <h1 className="card_title">{props.name}</h1>
                <p className="card_info">{props.description}</p>
                <div className="date_time">
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                </div>
            </div>
            <button className="card_button">
                More info
            </button>
        </div>
    )
}

export default EventCard;