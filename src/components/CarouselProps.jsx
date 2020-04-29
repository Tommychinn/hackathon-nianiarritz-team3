import React from "react";
import {
  Progress,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardBody,
  Row,
  Col,
  CardText,
} from "reactstrap";
import styles from "./Personnages.module.css";

function SlickPersoProps(props) {

  return (
    <div className={styles.persoCartes}>
      <Card className={styles.perso}>
        <CardImg
          className={styles.persoImage}
          top
          width="100%"
          src={props.image}
          alt="Card image cap"
        />
        <CardBody className={styles.cardbody}>
          <CardTitle className={styles.cardTitle}>{props.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default SlickPersoProps;
