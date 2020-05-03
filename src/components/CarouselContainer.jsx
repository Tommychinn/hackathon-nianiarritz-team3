import React from 'react';

import CarouselDate from './CarouselDate';
import CarouselDepartment from './CarouselDepartment';
import CarouselCountrie from './CarouselCountrie';
import styles from './CarouselContainer.module.css';

function CarouselContainer() {
  return (
    <div className={styles.container}>
      <CarouselDate />
      <CarouselDepartment />
      <CarouselCountrie />
    </div>
  );
}

export default CarouselContainer;
