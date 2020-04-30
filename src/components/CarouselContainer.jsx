import React from 'react';

import CarouselArtist from './CarouselArtist';
import CarouselDepartment from './CarouselDepartment';
import CarouselCountrie from './CarouselCountrie';
import styles from './CarouselContainer.module.css';

function CarouselContainer() {
  return (
    <div className={styles.container}>
      <CarouselArtist />
      <CarouselDepartment />
      <CarouselCountrie />
    </div>
  );
}

export default CarouselContainer;
