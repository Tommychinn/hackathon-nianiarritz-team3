import React from 'react';

import { Link } from 'react-router-dom';

import CarouselArtist from './CarouselArtist';
import CarouselDepartment from './CarouselDepartment';
import CarouselCountrie from './CarouselCountrie';

class CarouselContainer extends React.Component {
  constructor() {
    super();
    this.state = { param: '' };
    this.hancleClick = this.hancleClick.bind(this);
  }

  hancleClick(e) {
    this.setState({ param: e.target.value }, () =>
      console.log(this.state.param)
    );
  }

  render() {
    return (
      <div className='App'>
        <CarouselArtist getData={this.hancleClick} />
        <CarouselDepartment getData={this.hancleClick} />
        <CarouselCountrie getData={this.hancleClick} />
        <Link to='/'>
          <button>home</button>
        </Link>
      </div>
    );
  }
}

export default CarouselContainer;
