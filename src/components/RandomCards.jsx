import React from "react";
import axios from "axios";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col,
    Row,
} from "reactstrap";

import styles from "./RandomCards.module.css";

//const RandomCards = ({ image, title, artist, department, date, period }) => {

class RandomCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},
            objectDisplayed: {},
        };
        this.getData = this.getData.bind(this);
    }

    getData() {
        axios
            .get(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1"
            )
            .then((res) => {
                this.setState({ datas: res.data });
                const randomId = this.randomId(this.state.datas.objectIDs);

                axios
                    .get(
                        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`
                    )
                    .then((res) => {
                        if (
                            res.data.primaryImage === "" ||
                            res.data.primaryImageSmall === ""
                        ) {
                            this.getData();
                        } else {
                            this.setState({ objectDisplayed: res.data });
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
        const { objectDisplayed } = this.state;
        return (
            <div className={styles.container}>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Row className="no-gutters">
                                <Col md="8">
                                    <CardImg
                                        className={styles.CardImg}
                                        top
                                        width="100%"
                                        src={objectDisplayed.primaryImageSmall}
                                        alt={objectDisplayed.title}
                                    />
                                </Col>
                                <Col md="4">
                                    <CardBody className={styles.cardBody}>
                                        <CardTitle>
                                            {objectDisplayed.title}
                                        </CardTitle>
                                        <CardSubtitle>
                                            {objectDisplayed.artistDisplayName ===
                                            "" ? (
                                                <div>Artist unknown</div>
                                            ) : (
                                                objectDisplayed.artistDisplayName
                                            )}
                                        </CardSubtitle>
                                        <CardSubtitle>
                                            {objectDisplayed.department}
                                        </CardSubtitle>
                                        <CardSubtitle>
                                            {objectDisplayed.objectDate}
                                        </CardSubtitle>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Button
                    color="info"
                    className={styles.button}
                    onClick={this.getData}
                >
                    reload
                </Button>
            </div>
        );
    }
}

export default RandomCards;
