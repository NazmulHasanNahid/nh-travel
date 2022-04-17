import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {BsFacebook ,  } from 'react-icons/bs';
import {SiInstagram} from 'react-icons/si';
import {BsLinkedin} from 'react-icons/bs';
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
     return (
          <div className='footer-bg p-5 '>
           <Row  xs={1} md={4}>
                <Col>
                <h5 className='fw-bold'>Information</h5>
                <div>
                     <p>About Us</p>
                     <p>More Search</p>
                     <p>Blog</p>
                     <p>Testimonial</p>
                </div>
                </Col>
                <Col>
                <h5 className='fw-bold'>Helpful Links</h5>
                <div>
                <p>Services</p>
                <p>Supports</p>
                <p>Terms And Condition</p>
                <p>Privacy</p>
                </div>
                </Col>
                <Col>
                <h5 className='fw-bold'>Our Service</h5>
                <div>
                     <p>Travel Guide</p>
                     <p>Tour Plan</p>
                     <p>Guide</p>
                     <p>Support 24/7</p>
                </div>
                </Col>
                <Col>
                    <div>
                    <BsFacebook className='ms-3 text-' size={40}/>
                    <SiInstagram className='ms-3 ' size={40}/>
                    <BsLinkedin className='ms-3 ' size={40}/>
                    <p className='my-3'> <MdOutlineMarkEmailUnread className='mx-3'/> nhnahid.work@gmail.com</p>
                    <p><BsWhatsapp  className='mx-3'/>01646170993</p>
                    </div>
                </Col>
           </Row>
                <p className='text-center text-success mt-5'>Nh-Official © 2022 all rights reserved</p>
          </div>
     );
};

export default Footer;