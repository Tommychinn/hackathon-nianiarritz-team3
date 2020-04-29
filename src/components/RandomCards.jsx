import React from 'react';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const RandomCards = ({ image, title, artist, department, date, period }) => {
  return (
    <div>
      <Card className='text-center' style={{ width: '65rem' }}>
        <CardImg top width='100%' src={image} alt='Card image cap' />

        <CardBody>
          <CardTitle>title</CardTitle>
          <CardSubtitle>artist</CardSubtitle>
          <CardSubtitle>department</CardSubtitle>
          <CardSubtitle>date</CardSubtitle>
          <CardSubtitle>period</CardSubtitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            sit aspernatur provident voluptate in sequi mollitia incidunt dicta
            quidem, error neque placeat consequatur magni, saepe ut harum. Quos,
            accusamus doloribus.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default RandomCards;

//function RandomCards({ image, title, artist, department, date, period }) {
//   return (
//     <div className={styles.container}>
//       <figure>
//         <div>image</div>
//         <figcaption>title</figcaption>
//         <figcaption>artist</figcaption>
//         <figcaption>department</figcaption>
//         <figcaption>date</figcaption>
//         <figcaption>period</figcaption>
//         <figcaption>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
//           sit aspernatur provident voluptate in sequi mollitia incidunt dicta
//           quidem, error neque placeat consequatur magni, saepe ut harum. Quos,
//           accusamus doloribus.
//         </figcaption>
//       </figure>

//       {/* <figure>
//         {image}
//         <figcaption>{title}</figcaption>
//         <figcaption>{artist}</figcaption>
//         <figcaption>{department}</figcaption>
//         <figcaption>{date}</figcaption>
//         <figcaption>{period}</figcaption>
//       </figure> */}
//     </div>
//   );
// }

// export default RandomCards;
