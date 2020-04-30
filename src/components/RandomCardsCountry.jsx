import React from 'react';

import axios from 'axios';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from 'reactstrap';

import styles from './RandomCards.module.css';

//const RandomCards = ({ image, title, artist, department, date, period }) => {

class RandomCardsDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: {},
      objectDisplayed: {},
    };
    this.getData = this.getData.bind(this);
  }

  getData(props) {
    const params = this.props.match.params;
    console.log(params.name);
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=${params.name}&q=${params.name}`;
    console.log(url);
    //https://collectionapi.metmuseum.org/public/collection/v1/search?geoLocation=France&q=france

    axios.get(url).then(async (res) => {
      try {
        const res_1 = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${
            res.data.objectIDs[
              Math.floor(Math.random() * res.data.objectIDs.length)
            ]
          }`
        );

        if (
          res_1.data.primaryImage === '' ||
          res_1.data.primaryImageSmall === ''
        ) {
          this.getData(props);
        } else {
          this.setState({ objectDisplayed: res_1.data });
        }
      } catch (error) {
        console.log(error.response.status);
        this.getData(props);
      }
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { objectDisplayed } = this.state;
    return (
      <div className={styles.container}>
        <Row>
          <Col>
            <Card className='text-center'>
              <Row className='no-gutters'>
                <Col md='8'>
                  <CardImg
                    className={styles.CardImg}
                    top
                    width='100%'
                    src={objectDisplayed.primaryImageSmall}
                    alt={objectDisplayed.title}
                  />
                </Col>
                <Col md='4'>
                  <CardBody className={styles.cardBody}>
                    <CardTitle>{objectDisplayed.title}</CardTitle>
                    <CardSubtitle>
                      {objectDisplayed.artistDisplayName === '' ? (
                        <div>Artist unknown</div>
                      ) : (
                        objectDisplayed.artistDisplayName
                      )}
                    </CardSubtitle>
                    <CardSubtitle>{objectDisplayed.department}</CardSubtitle>
                    <CardSubtitle>{objectDisplayed.objectDate}</CardSubtitle>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Button color='info' className={styles.button} onClick={this.getData}>
          reload
        </Button>
      </div>
    );
  }
}

export default RandomCardsDepartments;
