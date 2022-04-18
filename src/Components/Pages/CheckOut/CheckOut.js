import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import img from '../../../img/checkout.png'


const CheckOut = () => {
     const handleCheckout =() =>{
          toast('Thank You Booking Complete')
        } 
  return (
    <div className="container my-5 p-5">
      <Row xs={1} md={2} className="g-5 d-flex align-items-center ">
        <Col>
         <img className="img-fluid" src={img} alt="" />
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
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
      <div className="text-center my-5 py-5 " >
          <Button  variant="outline-primary" onClick={handleCheckout}>Proceed Checkout</Button>
    </div>
    <ToastContainer/>
    </div>
    
  );
};

export default CheckOut;
