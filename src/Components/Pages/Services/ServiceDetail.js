import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
     const navigate = useNavigate()
     const {id} = useParams("")
     return (
          <div className='text-center my-5 p-5'>
               <p className=''>Service id : {id}</p>
               <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
          </div>
     );
};

export default ServiceDetail;