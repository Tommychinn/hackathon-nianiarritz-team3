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
    this.state = { param: "" };
    this.hancleClick = this.hancleClick.bind(this);
  }

  hancleClick(e) {
    this.setState({ param: e.target.value }, () =>
      console.log(this.state.param)
    );
  }

  render() {
    return (
      <div className="App">
        <CarouselArtist getData={this.hancleClick} />
        <CarouselDepartment getData={this.hancleClick} />
        <CarouselCountrie getData={this.hancleClick} />
        <Link to="/">
          <Button color="danger" className={styles.button}>
            Home
          </Button>
        </Link>
      </div>
    );
  }
}

export default CarouselContainer;
