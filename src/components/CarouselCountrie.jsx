import React from 'react';

import Slider from 'react-slick';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import SlickPersoProps from './CarouselProps';

class CarouselCountrie extends React.Component {
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

  countrie = [
    {
      name: 'France',
      img:
        'https://www.welcometofrance.com/app/uploads/2019/12/Carte-France-region-2-1.jpeg',
    },
    {
      name: 'Italy',
      img:
        'https://www.touteleurope.eu/fileadmin/_processed_/6/e/italie-5193766a7b.jpg',
    },
    {
      name: 'Egypt',
      img:
        'http://www.canalmonde.fr/r-annuaire-tourisme/monde/_cartes/egypte_2.jpg',
    },
    {
      name: 'Netherlands',
      img:
        'https://t1.uc.ltmcdn.com/fr/images/8/7/6/img_12678_apa_13961_600.jpg',
    },
    {
      name: 'United Kingdom',
      img:
        'https://products-images.di-static.com/image/le-routard-angleterre-pays-de-galles/9782012800144_Q-475x500-1.webp',
    },
    {
      name: 'Spain',
      img:
        'https://www.touteleurope.eu/fileadmin/_processed_/b/1/Espagne-bdd846110c.png',
    },
    {
      name: 'China',
      img: 'https://p8.storage.canalblog.com/80/28/415339/22070622.gif',
    },
    {
      name: 'Russia',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/5/5e/Expansion-Russie-et-URSS.png',
    },
  ];

  render() {
    return (
      <div className={styles.personnages}>
        <Row>
          <Col>
            <h1>Countries</h1>
          </Col>
        </Row>

        <Slider {...this.settings}>
          {this.countrie.map((countrie) => {
            return (
              <Link to={`/randomcard-country/${countrie.name}`}>
                <SlickPersoProps key={countrie.name} {...countrie} />
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default CarouselCountrie;
