import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import event from '../img/event.png';
import './../App.css';
import imagen6 from "../img/salud_mental.jpg";

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
        <div><img
          className="d-block w-100"
          src={imagen6}
          alt="First slide"
        />
        
        <div class=" p-4 w-100">
        <div class=" row row-cols-1 row-cols-md-2  g-2">
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
        </div>
        </div>
    );
};

export default RenderEventCard;