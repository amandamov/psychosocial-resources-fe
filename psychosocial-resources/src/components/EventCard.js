import React from "react";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const EventCard = (props) => {

    const navigate = useNavigate();

    const navigateToSingleEvent = () => {
    navigate(`${props.id}`)
    }

    const dateFormatDb = props.date;
    const dateFormated = moment(dateFormatDb).format('DD/MM/YYYY');

    return (
        <div className="card_event" key={props.id}>
            <div className="card_body">
                <img src={props.img}></img>
                <h2 className="card_title">{props.title}</h2>
                <h1 className="card_title">{props.name}</h1>
                <div className="city_date_time">
                    <h1>{props.city}</h1>
                    <p>{dateFormated} - {props.time}</p>
                </div>
            </div>
            <button className="card_button" onClick={() => navigateToSingleEvent(props.id)}>
                More info
            </button>
        </div>
    )
}

export default EventCard;