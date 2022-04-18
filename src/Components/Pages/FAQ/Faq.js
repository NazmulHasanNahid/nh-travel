import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import img from "../../../img/confused-img.jpg";

const Faq = () => {
  return (
    <div className=" my-5 py-5">
      <h2 className="text-center text-warning  d fw-bold">
      Frequently  <span className="text-dark">Asked Questions</span> <br /> <span className="text-info">________</span>
      </h2>
      <Row xs={1} md={3} className="g-5 d-flex align-items-center justify-content-center">
        <Col>
          <img width="500px" className="img-fluid" src={img} alt="" />
        </Col>
        <Col>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What Actually I do ? </Accordion.Header>
              <Accordion.Body>
                Basically Im  a Tour Guide  If you Want to visit some where And you Are New In Thia Place I can Guide you And i can help you for Visit All Beutiful And Important Places And Also I can Provide You Hotel Service And Lunch And Dinner Services
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How Can You Reach Me ? </Accordion.Header>
              <Accordion.Body>
               You Can Book My Services using This Web Site Also You you contact me In whatsapp i provided My Contact Info In Bottom In this Web Site 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default Faq;
