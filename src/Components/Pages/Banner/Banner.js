import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import bannerImg from "../../../img/bannerImg.png";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <Row className="d-flex align-items-center">
           <Col lg={6} sm={12}>
          <p>If you Want To Travel You can Contact With us We are Working on Travel Guiding and we have lot of packages spceially Tour Guide , Tour Package And Travel And Hotel Management Packages , You can find There Best Travel Packages In reasonable Price</p>
          <p>Our happiest moments as tourists always seem to come when we stumble upon one thing while in pursuit of something else. <span className="text-info">Lawrence Block</span></p>
          <Button variant="outline-primary">Explore</Button>
           </Col>
           <Col lg={6} sm={12}>
           <img className="img-fluid" src={bannerImg} alt="" />
           </Col>
      </Row>
    </div>
  );
};

export default Banner;
