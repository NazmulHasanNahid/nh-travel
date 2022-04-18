import React from "react";
import { Card, Col } from "react-bootstrap";

const ShowReview = ({ review }) => {
  const { img, name, rating, reviewTitle } = review;
  return (
    <div className="">
      <Col>
        <Card className="border-0 shadow-lg rounded ">
          <Card.Img className="w-50 mx-auto"  variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Rating : {rating}</Card.Text>
            <Card.Text>{reviewTitle.slice(0,90)} ...</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ShowReview;
