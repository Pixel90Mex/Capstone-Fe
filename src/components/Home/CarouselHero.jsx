import React from "react";
import  {carouselItems} from "../../data/carouselItems";
import {Carousel, CarouselItem} from "react-bootstrap";

const CarouselHero = () => {
    return (
        <Carousel fade>
            {carouselItems.map((item) => {
                return (
                    <CarouselItem key={item.id} style={{ maxHeight: '550px' }}>
                        <img className={item.className} src={item.src} alt={item.alt} />
                    </CarouselItem>
                )
            })}
        </Carousel>
    );
};

export default CarouselHero;