import { Button } from "react-bootstrap";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, description, price, img } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img height={300} variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {description.slice(0,100)}
            </Card.Text>
            <Card.Text >
             <Button className="w-100" variant="outline-primary">Book</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
