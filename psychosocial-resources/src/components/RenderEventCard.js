import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
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
        <div class=" p-4 w-100">
        <div class=" row row-cols-1 row-cols-md-2  g-2">
            {infoEvent.map(item => {
                return(
                <EventCard key={item.id} 
                img={item.code_photo}
                title={item.title}
                name={item.company}
                city={item.provincie}
                id={item.id}
                />)
            })}
        </div>
        </div>
    );
};

export default RenderEventCard;