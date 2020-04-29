import React from "react";

import Slider from "react-slick";
//import axios from "axios";
import { Row, Col } from "reactstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import SlickPersoProps from "./CarouselProps";

class CarouselArtist extends React.Component {
    settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        slidesToScroll: 4,
        swipeToSlide: true,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    artist = 
    [
        {
            name: 'Picasso',
            img: 
            "https://apollo.imgix.net/content/uploads/2018/02/LEADPablo-Picasso-Femme-au-beret-et-a-la-robe-quadrillee-Marie-Therese-Walter-December-1937.jpg?auto=compress,format&amp;crop=faces,entropy,edges&amp;fit=crop&amp;w=900&amp;h=600"
        },
        {
            name: 'Van Gogh',
            img: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
        },
        {
            name: 'Jean Michel Basquiat',
            img: "https://www.kazoart.com/blog/wp-content/uploads/2018/12/dusthead-basquiat-1982.jpg"
        },
        {
            name: 'Jason Pollock',
            img: "https://www.expertisez.com/images/easyblog_images/511/Jackqon-Pollock-estimation.jpg"
        },
        {
            name: 'Leonard de Vinci',
            img: "https://cdn.radiofrance.fr/s3/cruiser-production/2019/07/a8260220-2986-47f7-8eeb-494ccc9a42b3/838_1024px-mona_lisa_by_leonardo_da_vinci_from_c2rmf_retouched.webp"
        },
        {
            name: 'Vassily Kandinsky',
            img: "https://www.kazoart.com/blog/wp-content/uploads/2016/12/Vassily_Kandinsky_1921_-_Segment_bleu.jpg"
        },
        {
            name: 'Michel-Ange',
            img: "https://www.rivagedeboheme.fr/medias/images/michel-ange.chapelle.sixtine..la.cr.ation.d.adam.-1510-.jpg"
        },
        {
            name: 'Max Ernst',
            img: "https://caisdamemoria.files.wordpress.com/2016/04/max-ernst-lange-du-foyer-1937_30x23cm.jpg?w=620"
        }
       
    ]

    render() {
        return (
            <div className={styles.personnages}>
                <Row>
                    <Col>
                        <h1>Les Artistes Peintre</h1>
                    </Col>
                </Row>

                <Slider {...this.settings}>
                    {this.artist.map((artist) => {
                        return <SlickPersoProps {...artist} />;
                    })}
                </Slider>
            </div>
        );
    }
}

export default CarouselArtist;
