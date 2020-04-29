import React from 'react';
import CarouselArtist from "./CarouselArtist";
import CarouselDepartment from "./CarouselDepartment";
import CarouselCountrie from "./CarouselCountrie";

function CarouselContainer() {
    return ( 
    <div className = "App" >
        <CarouselArtist />
        <CarouselDepartment />
        <CarouselCountrie />
    </div>
    );
}

export default CarouselContainer;