import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { PROJECT_NAME } from "../../constants/common";
import React, { useState, useEffect } from "react";

const FeatureCard = (props) => {

  const [width, setWidth] = useState();

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  if(isMobile) {
    return (
      <Row>
        <Col width="12">
          <Card>
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
              <Card.Title>{props.header}</Card.Title>
              <Card.Text>{props.content}</Card.Text>
              <Card.Text>{props.footer}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
  if (props.invertCols) {
    return (
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{props.header}</Card.Title>
              <Card.Text>{props.content}</Card.Text>
              <Card.Text>{props.footer}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <img src={props.imgSrc}></img>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col>
          <img src={props.imgSrc}></img>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{props.header}</Card.Title>
              <Card.Text>{props.content}</Card.Text>
              <Card.Text>{props.footer}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
};

export default FeatureCard;
