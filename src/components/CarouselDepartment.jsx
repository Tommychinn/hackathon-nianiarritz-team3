import React from 'react';

import Slider from 'react-slick';
//import axios from "axios";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import SlickPersoProps from './CarouselProps';

class CarouselDepartment extends React.Component {
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

  department = [
    {
      departmentId: 1,
      img:
        'http://ada1900.org/yahoo_site_admin/assets/images/NewcombOakTree_-_Copy.61191452.jpg',
      name: 'American Decorative Arts',
    },
    {
      departmentId: 3,
      img:
        'https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/ancient-near-east/ane-zodiac/2018/lion-marquee_2320x920.jpg?as=1&la=en&mh=920&mw=2320&hash=01122E0CF78EFABBBE878940DC89F417',
      name: 'Ancient Near Eastern Art',
    },
    {
      departmentId: 4,
      img:
        'https://images.metmuseum.org/CRDImages/aa/web-large/61902.jpg',
      name: 'Arms and Armor',
    },
    {
      departmentId: 5,
      img:
        'http://worldwidemuseumguide.com/wp-content/themes/editorial/functions/thumb.php?src=wp-content/uploads/2014/04/Twin-Mask.jpg&w=606&h=&zc=1&q=90',
      name: 'Arts of Africa, Oceania, and the Americas',
    },
    {
      departmentId: 6,
      img:
        'https://images-na.ssl-images-amazon.com/images/I/51nD8mwfbDL._AC_.jpg',
      name: 'Asian Art',
    },
    {
      departmentId: 7,
      img:
        'https://media.gettyimages.com/photos/pontaut-chapter-house-limestone-brick-and-plaster-originally-from-picture-id128076297?s=2048x2048',
      name: 'The Cloisters',
    },
    {
      departmentId: 8,
      img:
        'https://ca-times.brightspotcdn.com/dims4/default/3f0bf83/2147483647/strip/true/crop/2047x1151+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff8%2Fbf%2F54cf2196f56a4e849dc021b6173c%2Fla-1525728005-wzz7974q8r-snap-image',
      name: 'The Costume Institute',
    },
    {
      departmentId: 9,
      img:
        'https://www.parisinsidersguide.com/image-files/louvre-prints-drawing1-musee-du-louvre-800-2x1.jpg',
      name: 'Drawings and Prints',
    },
    {
      departmentId: 10,
      img:
        'https://cdn.britannica.com/25/83825-050-F8826674/Anubis-Egyptian-Book-of-the-Dead-dead-c-1275-bce.jpg',
      name: 'Egyptian Art',
    },
    {
      departmentId: 11,
      img: 'https://p1.storage.canalblog.com/11/71/119589/117582593_o.jpg',
      name: 'European Paintings',
    },
    {
      departmentId: 12,
      img:
        'https://i.pinimg.com/originals/26/57/3e/26573e2e3e1f7e4141cc1cd59c386cc3.jpg',
      name: 'European Sculpture and Decorative Arts',
    },
    {
      departmentId: 13,
      img:
        'https://risdmuseum.org/sites/default/files/styles/scaled_1324_w/museumplus/279008.jpg?itok=ev3f2uXG',
      name: 'Greek and Roman Art',
    },
    {
      departmentId: 14,
      img:
        'https://www.islamicartssociety.org/wp-content/uploads/art-54-768x629.jpg',
      name: 'Islamic Art',
    },
    {
      departmentId: 15,
      img:
        'https://upload.wikimedia.org/wikipedia/commons/f/f8/Robert_Lehman_Wing_-_Visitors_Watching_Impressionist_Masters.JPG',
      name: 'The Robert Lehman Collection',
    },
    {
      departmentId: 16,
      img:
        'https://www.ecopetit.cat/wpic/mpic/157-1578510_libraries-reading-wallpapers-beautiful-fantasy-library-art.jpg',
      name: 'The Libraries',
    },
    {
      departmentId: 17,
      img:
        'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/10/killer-art12.jpg',
      name: 'Medieval Art',
    },
    {
      departmentId: 18,
      img:
        'https://images-na.ssl-images-amazon.com/images/I/61F8cplKjXL._AC_SX425_.jpg',
      name: 'Musical Instruments',
    },
    {
      departmentId: 19,
      img:
        'https://ctl.s6img.com/society6/img/ioF6uDuEBikdYWmuP85u5gKfDVI/h_264,w_264/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/1cb0524113124fe599608c53abfdf05f/~~/ocean-pink-blush-prints.jpg',
      name: 'Photographs',
    },
    {
      departmentId: 21,
      img:
        'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/36835/50093/1547274864391_Screenshot_20190108_111037_copy__55052.1547528015.jpg?c=2&imbypass=on',
      name: 'Modern Art',
    },
  ];

  render() {
    return (
      <div className={styles.personnages}>
        <Row>
          <Col>
            <h1>Departments</h1>
          </Col>
        </Row>

        <Slider {...this.settings}>
          {this.department.map((department) => {
            return (
              <Link to={`/randomcard-departments/${department.departmentId}`}>
                <SlickPersoProps
                  className={styles.linkStyle}
                  key={department.departmentId}
                  {...department}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default CarouselDepartment;
