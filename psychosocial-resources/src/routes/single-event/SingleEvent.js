import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleEvent.css';


const SingleEvent = () => {
    
    const [moreInfo, setMoreInfo] = useState([]);
    const eventId = useParams();

    useEffect(()=> {
        fetch(`http://localhost:5001/getHelp/${eventId.id}`)
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
                            <img src={item.code_photo}/>
                            <h1>{item.company}</h1>
                            <h2>{item.title}</h2>
                            <h3>{item.description}</h3>
                            <p>{item.url_basic}</p>
                            <p>{item.schedule_description}</p>
                            <p>{item.url_schedule}</p>
                            <p>{item.address}</p>
                            <p>{item.provincie}</p>
                            <p>{item.country}</p>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <p>{item.type_of_company}</p>
                            <p>{item.attencion_schedule}</p>
                        </div>
                        ) 
            })}
        </div>
    );
}

export default SingleEvent;