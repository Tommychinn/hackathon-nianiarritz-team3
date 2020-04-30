import React from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import CarouselArtist from "./CarouselArtist";
import CarouselDepartment from "./CarouselDepartment";
import CarouselCountrie from "./CarouselCountrie";
import styles from "./RandomCards.module.css";

class CarouselContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <CarouselArtist />
        <CarouselDepartment />
        <CarouselCountrie />
        <Link to='/'>
          <button>home</button>
        </Link>
      </div>
    );
  }
}

export default CarouselContainer;
