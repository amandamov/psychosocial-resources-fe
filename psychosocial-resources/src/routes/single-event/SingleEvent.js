import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleEvent.css';


const SingleEvent = () => {
    
    const [moreInfo, setMoreInfo] = useState([]);
    const eventId = useParams();

    useEffect(()=> {
        fetch(`http://localhost:5001/tableOcc/${eventId.id}`)
        .then((result) => result.json())
        .then((data) => {
        setMoreInfo(data);
        });
    }, [])

    return (
        <div className="big-div">
            {moreInfo.map(item => {
                    return( 
                        <div key={item.id}>
                            <h1>{item.institute_or_company}</h1>
                            <h2>{item.event_title}</h2>
                            <p>{item.information_1}</p>
                            {/* <p>{item.address}</p> */}
                            <p>{item.provincie}</p>
                            <p>{item.date_information}</p>
                            <p>{item.hour_informacion}</p>
                            <p>{item.foundation_page}</p>
                            {item.url_cita ? <a href={item.url_cita}> This is the cita link</a> : null}
                        </div>
                        ) 
            })}
        </div>
    );
}

export default SingleEvent;