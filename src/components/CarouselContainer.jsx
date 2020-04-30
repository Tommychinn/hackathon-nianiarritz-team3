import React from 'react';

import { Link } from 'react-router-dom';

import CarouselArtist from './CarouselArtist';
import CarouselDepartment from './CarouselDepartment';
import CarouselCountrie from './CarouselCountrie';

class CarouselContainer extends React.Component {
  constructor() {
    super();
    this.state = { param: '' };
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
