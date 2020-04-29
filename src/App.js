import React from 'react';
import RandomCards from './components/RandomCards';
import CarouselArtist from "./components/CarouselArtist";
import CarouselDepartment from "./components/CarouselDepartment";
import CarouselCountrie from "./components/CarouselCountrie";

import "./App.css";

function App () {

        return (
            <div className="App">
                <RandomCards />
                <CarouselArtist />
                <CarouselDepartment />
                <CarouselCountrie />
                
            </div>
        );


}

export default App;
