import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CarouselContainer from './components/CarouselContainer';
import RandomCardsDate from './components/RandomCardsDate';
import RandomCardsCountry from './components/RandomCardsCountry';
import RandomCardsDepartments from './components/RandomCardsDepartments.jsx';

export default function Routzer() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/carousel' component={CarouselContainer} />
        <Route path='/randomcard-date/:id' component={RandomCardsDate} />
        <Route
          path='/randomcard-country/:name'
          component={RandomCardsCountry}
        />
        <Route
          path='/randomcard-departments/:id'
          component={RandomCardsDepartments}
        />
      </Switch>
    </Router>
  );
}
