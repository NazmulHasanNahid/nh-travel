import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import img from "../../../img/formal-pic.JPG";

const About = () => {
  return (
    <div className="container my-5 shadow-lg p-5">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="border shadow p-3">
            <Card.Img variant="top" src={img} />
          </Card>
        </Col>
        <Col>
          <Card className="border shadow p-3">
           
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                   Name : Nazmul Hasan Nahid <br />
                   City : Cumilla
              </Card.Text>
              <Card.Title>My Goals?</Card.Title>
              <Card.Text>
              Thanks for giving me this golden opportunity to introduce myself before this panel.  i’m a front-end web developer i working on web development sector last 6month and i still  trying to improve my skills and i always try to learn as many thing as possible , And My Future Goals is Become an Full Stack Web Developer and inner future i want to work with Ai And I'm Interested in App Development But my next 6month Goals is learn as many things as possible and become Front-End Web Developer
              </Card.Text>
            </Card.Body>
            
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
