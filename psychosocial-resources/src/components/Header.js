import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../img/migra-1.png";
import imagen2 from "../img/migra-4.png";
import imagen3 from "../img/migra-3.png";


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
        <Carousel.Caption className="Description_img1">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
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