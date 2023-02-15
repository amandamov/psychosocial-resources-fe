import React, { useState } from "react";
import EventCard from "./EventCard";
import event1 from '../img/event1.png';
import event2 from '../img/event2.png';
import event3 from '../img/event3.png';

const RenderEventCard = () => {

    return(
        <div className="">
            <EventCard 
                img={event1}
                title="First Event"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <EventCard 
                img={event2}
                title="Second Event"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <EventCard 
                img={event3}
                title="Third Event"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
    );
};

export default RenderEventCard;