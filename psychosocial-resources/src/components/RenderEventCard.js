import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import event from '../img/event.png';
import './../App.css';

const RenderEventCard = () => {

    const [infoEvent, setInfoEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/TableOcc`)
        .then((result) => result.json())
        .then((data) => {
          setInfoEvent(data);
        });
    }, []);

    return(
        <div className="">
            {infoEvent.map(item => {
                return(
                <EventCard key={item.id} 
                img={event}
                title={item.event_title}
                name={item.institute_or_company}
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