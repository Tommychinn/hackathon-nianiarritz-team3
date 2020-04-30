import React from 'react';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.bienvenue}`}>
        Welcome to the Metropolitan Museum of Art
      </h1>
      <Link to='/carousel'>
        <Button color='danger' className={`${styles.button}`}>
          Begin your tour !
        </Button>
      </Link>
    </div>
  );
}
