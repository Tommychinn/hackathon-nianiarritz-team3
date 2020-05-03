import React from 'react';

import Slider from 'react-slick';
//import axios from "axios";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import SlickPersoProps from './CarouselProps';

class CarouselDate extends React.Component {
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
      departmentId: "dateBegin=-5000&dateEnd=-3000",
      img:
        'https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTU3ODc5MDg2NzA2NTk5NjQ3/fresco-painting-of-nefertari-playing-senet-2.jpg',
      name: '5000 to 3000 BC',
    },
    {
      departmentId: "dateBegin=-3000&dateEnd=-2000",
      img:
        'https://images.metmuseum.org/CRDImages/an/web-large/ss1984_383_6.jpg',
      name: '3000 to 2000 BC',
    },
    {
      departmentId: "dateBegin=-2000&dateEnd=-1000",
      img:
        'https://images.metmuseum.org/CRDImages/an/web-large/ME43_89_10.jpg',
      name: '2000 to 1000 BC',
    },
    {
      departmentId: "dateBegin=-1000&dateEnd=-500",
      img:
        'https://images.metmuseum.org/CRDImages/gr/web-large/DP157058.jpg',
      name: '1000 to 500 BC',
    },
    {
      departmentId: "dateBegin=-500&dateEnd=0",
      img:
        'https://images.metmuseum.org/CRDImages/an/web-large/sd1995_163_4.jpg',
      name: '500 BC to 0 AD',
    },
    {
      departmentId: "dateBegin=0&dateEnd=400",
      img:
        'https://images.metmuseum.org/CRDImages/gr/web-large/DP806.jpg',
      name: '0 to 400 AD',
    },
    {
      departmentId: "dateBegin=400&dateEnd=800",
      img:
        'https://images.metmuseum.org/CRDImages/as/web-large/19_90.JPG',
      name: '400 to 800 AD',
    },
    {
      departmentId: "dateBegin=800&dateEnd=1000",
      img:
        'https://images.metmuseum.org/CRDImages/is/web-large/40.170.139-D.jpg',
      name: '800 to 1000 AD',
    },
    {
      departmentId: "dateBegin=1000&dateEnd=1200",
      img:
        'https://images.metmuseum.org/CRDImages/is/web-large/sf45-153-4a.jpg',
      name: '1000 to 1200 AD',
    },
    {
      departmentId: "dateBegin=1200&dateEnd=1400",
      img: 'https://images.metmuseum.org/CRDImages/rl/web-large/DP317341.jpg',
      name: '1200 to 1400 AD',
    },
    {
      departmentId: "dateBegin=1400&dateEnd=1500",
      img:
        'https://images.metmuseum.org/CRDImages/as/web-large/DP-12232-020.jpg',
      name: '15th Century',
    },
    {
      departmentId: "dateBegin=1500&dateEnd=1600",
      img:
        'https://images.metmuseum.org/CRDImages/dp/web-large/DP828545.jpg',
      name: '16th Century',
    },
    {
      departmentId: "dateBegin=1600&dateEnd=1700",
      img:
        'https://images.metmuseum.org/CRDImages/dp/web-large/DP819845.jpg',
      name: '17th Century',
    },
    {
      departmentId: "dateBegin=1700&dateEnd=1800",
      img:
        'https://images.metmuseum.org/CRDImages/as/web-large/29_100_723_Tp.JPG',
      name: '18th Century',
    },
    {
      departmentId: "dateBegin=1800&dateEnd=1900",
      img:
        'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
      name: '19th Century',
    },
    {
      departmentId: "dateBegin=1900&dateEnd=2000",
      img:
        'https://images.metmuseum.org/CRDImages/as/web-large/DP122777.jpg',
      name: '20th Century',
    },
  ];

  render() {
    return (
      <div className={styles.personnages}>
        <Row>
          <Col>
            <h1>Historical Periods</h1>
          </Col>
        </Row>

        <Slider {...this.settings}>
          {this.department.map((department) => {
            return (
              <Link to={`/randomcard-date/${department.departmentId}`}>
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

export default CarouselDate;
