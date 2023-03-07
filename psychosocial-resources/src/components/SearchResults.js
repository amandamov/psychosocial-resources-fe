import React, { useEffect } from "react";

const SearchResults = () => {

    const [infoEvent, setInfoEvent] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/getHelp`)
        .then((result) => result.json())
        .then((data) => {
          setInfoEvent(data);
        });
    }, []);

    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(event) {
        setSearchInput(event.target.value);
    // console.log(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(searchInput);
    }

        
    }

export default SearchResults;