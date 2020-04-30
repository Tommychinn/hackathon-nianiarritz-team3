import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Hello pour la visite du Musée dans votre canapé !</h1>
      <Link to='/carousel'>
        <button>Commencez la visite!</button>
      </Link>
    </div>
  );
}
