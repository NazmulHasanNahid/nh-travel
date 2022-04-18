import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const ServiceDetail = () => {
  
  const { id } = useParams();
  const [service , setService] = useState({})
  useEffect(()=>{
       fetch('service.json')
        .then(res => res.json())
        .then(data =>{
            const services = data.find(item => item.id === id)
            console.log(services);
        })
  },[id])
  return (
    <div className="my-5 container">
      <Row xs={1} md={2}>
      <Col>
          <p className="">Service id : {id}</p>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="Text" placeholder="Phone" />
            </Form.Group>
          </Form>
        </Col>
       
      </Row>
      <div className="text-center my-5">
          <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
