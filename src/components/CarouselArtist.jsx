import React from 'react';

import Slider from 'react-slick';
//import axios from "axios";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import SlickPersoProps from './CarouselProps';

class CarouselArtist extends React.Component {
  settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  artist = [
    {
      apiName: 'Van%20Gogh',
      name: 'Van Gogh',
      img: 'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
    },
    {
      apiName: 'Jean%20Michel%20Basquiat',
      name: 'Jean Michel Basquiat',
      img:
        'https://www.kazoart.com/blog/wp-content/uploads/2018/12/dusthead-basquiat-1982.jpg',
    },
    {
      apiName: 'Pollock',
      name: 'Benjamin Pollock',
      img:
        'https://www.expertisez.com/images/easyblog_images/511/Jackqon-Pollock-estimation.jpg',
    },
    {
      apiName: 'Leonardo%20da%20Vinci',
      name: 'Leonardo da Vinci',
      img:
        'https://cdn.radiofrance.fr/s3/cruiser-production/2019/07/a8260220-2986-47f7-8eeb-494ccc9a42b3/838_1024px-mona_lisa_by_leonardo_da_vinci_from_c2rmf_retouched.webp',
    },
    {
      apiName: 'Vassily%20Kandinsky',
      name: 'Vassily Kandinsky',
      img:
        'https://www.kazoart.com/blog/wp-content/uploads/2016/12/Vassily_Kandinsky_1921_-_Segment_bleu.jpg',
    },
    {
      apiName: 'Michel%20Angelo',
      name: 'Michael Angelo',
      img:
        'https://www.rivagedeboheme.fr/medias/images/michel-ange.chapelle.sixtine..la.cr.ation.d.adam.-1510-.jpg',
    },
    {
      apiName: 'Ernst',
      name: 'Wilhelm Ernst',
      img:
        'https://caisdamemoria.files.wordpress.com/2016/04/max-ernst-lange-du-foyer-1937_30x23cm.jpg?w=620',
    },
  ];

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
            return (
              <Link to={`/randomcard-artist/${artist.name}`}>
                <SlickPersoProps key={artist.name} {...artist} />
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default CarouselArtist;
