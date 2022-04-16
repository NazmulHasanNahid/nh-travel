import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import bannerImg from "../../../img/bannerImg.png";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <Row className="d-flex align-items-center">
           <Col lg={6} sm={12}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident tempore molestiae libero saepe ducimus facilis doloribus quia enim aperiam minima. Molestias a expedita dignissimos ipsa hic consectetur nostrum doloribus, nobis aut quas incidunt nisi, eaque veritatis deserunt! Dicta sequi ipsa eos impedit tempora ullam. Aut eaque nihil sunt. Maxime, hic.</p>
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
