import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import event from '../img/event.png';
import './../App.css';

const RenderEventCard = () => {

    const [infoEvent, setInfoEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/getHelp`)
        .then((result) => result.json())
        .then((data) => {
          setInfoEvent(data);
        });
    }, []);

    return(
        <div className="card_card">
            {infoEvent.map(item => {
                return(
                <EventCard key={item.id} 
                img={event}
                title={item.title}
                name={item.Company}
                city={item.provincie}
                // date={item.date_informacion}
                // time={item.hour_informacion}
                id={item.id}
                />)
            })}
        </div>
    );
};

export default RenderEventCard;