import React from "react";

const MoreInfoButton = (props) => {
    return (
        <button onClick={props.onClick} className="btn btn-primary">More info</button>
    );
};

export default MoreInfoButton;