import React from 'react';
import axios from 'axios';

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

//const RandomCards = ({ image, title, artist, department, date, period }) => {

class RandomCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: {},
      objectDisplayed: {},
      isLoading: true,
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get(
        'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1'
      )
      .then((res) => {
        this.setState({ datas: res.data });
        const randomId = this.randomId(this.state.datas.objectIDs);

        axios
          .get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`
          )
          .then((res) => {
            if (res.data.primaryImage === '') {
              this.getData();
            } else {
              this.setState({ objectDisplayed: res.data, isLoading: false });
            }
          })
          .catch((error) => {
            console.log(error.response.status);
            this.getData();
          });
      });
  }

  randomId(array) {
    return Math.floor(Math.random() * Math.floor(array.length));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Card className='text-center' style={{ width: '65rem' }}>
          <CardImg
            top
            width='100%'
            src={this.state.objectDisplayed.primaryImage}
            alt='Card image cap'
          />

          <CardBody>
            <CardTitle>{this.state.objectDisplayed.title}</CardTitle>
            <CardSubtitle>
              {this.state.objectDisplayed.artistDisplayName}
            </CardSubtitle>
            <CardSubtitle>{this.state.objectDisplayed.department}</CardSubtitle>
            <CardSubtitle>{this.state.objectDisplayed.objectDate}</CardSubtitle>
          </CardBody>
        </Card>
        <Button color='info' onClick={this.getData}>
          reload
        </Button>
      </div>
    );
  }
}

export default RandomCards;
