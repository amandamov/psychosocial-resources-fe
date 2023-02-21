import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import event from '../img/event.png';
import './../App.css';

const RenderEventCard = () => {

    const [infoEvent, setInfoEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/faketable2`)
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
                title={item.title}
                name={item.name}
                description={item.description}
                date={item.to_char}
                time={item.hour_event}
                // id={item.id}
                />)
            })}
        </div>
    );
};

export default RenderEventCard;