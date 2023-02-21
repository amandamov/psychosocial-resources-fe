import { useEffect, useState } from "react";

const SingleEvent = () => {
    
    const [moreInfo, setMoreInfo] = useState([]);
   
    useEffect(()=> {
        if('http://localhost:3000/events:1'){
            fetch(`http://localhost:5000/faketable2/1`)
            .then((result) => result.json())
            .then((data) => {
            setMoreInfo(data);
            });
        }
    }, []);

    return (
        <div>
            <h1>Page to show more information about a single event</h1>
            {moreInfo.map(item => {
                    return( 
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>{item.address}</p>
                            <p>{item.city}</p>
                            <p>{item.country}</p>
                            <p>{item.date}</p>
                            <p>{item.to_char}</p>
                            <p>{item.hour_event}</p>
                            <p>{item.links}</p>
                        </div>
                        ) 
            })}
        </div>
    );
}

export default SingleEvent;