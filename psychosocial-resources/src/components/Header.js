import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../img/ayuntamiento.jpg";
import imagen2 from "../img/barcelona.jpg";
import imagen3 from "../img/psicolog.jpg";


const Header = () => {

    return(
    <div className="header_img">
    <Carousel fade>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default Header;