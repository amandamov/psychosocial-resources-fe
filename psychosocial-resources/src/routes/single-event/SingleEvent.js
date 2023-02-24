import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleEvent.css';


const SingleEvent = () => {
    
    const [moreInfo, setMoreInfo] = useState([]);
    const eventId = useParams();

    useEffect(()=> {
        fetch(`http://localhost:5000/tableOcc/${eventId.id}`)
        .then((result) => result.json())
        .then((data) => {
        setMoreInfo(data);
        });
    }, []);

    return (
        <div className="big-div">
            {/* <h1>Page to show more information about a single event</h1> */}
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
                        </div>
                        ) 
            })}
        
        </div>
    );
}

export default SingleEvent;