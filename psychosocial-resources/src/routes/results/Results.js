import { useState, useEffect } from "react";
import EventCard from "../../components/EventCard";
import imagen6 from "../../img/salud_mental.jpg";
import { useSearchParams } from "react-router-dom";

const Results = () => {

    const [event, setEvent] = useState([]);
    // const input = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    let input = searchParams.get('search')
    console.log((input));

    // console.log(input)
    let inputFake = "babel"
    
    useEffect(() => {
        fetch(`http://localhost:5001/searchEvent/?eventQuery=${input}`)
        .then((result) => result.json())
        .then((data) => {
            setEvent(data)
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
            {event.map(item => {
                return(
                <EventCard key={item.id} 
                img={item.code_photo}
                name={item.company}
                title={item.title}
                provincie={item.provincie}
                country={item.country}
                //city={item.provincie}
                id={item.id}
                />)
            })}
            </div>
        </div>
        <p>results page</p>
        </div>
    );
}

export default Results;