import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import CarouselContainer from './components/CarouselContainer'
import RandomCards from './components/RandomCards'

export default function Routzer () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/carousel" component={CarouselContainer} />
                <Route path="/randomcard" component={RandomCards} />
            </Switch>
        </Router>
    )
}
