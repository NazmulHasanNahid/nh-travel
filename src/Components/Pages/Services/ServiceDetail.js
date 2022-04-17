import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
     const navigate = useNavigate()
     const {id} = useParams("")
     return (
          <div className='text-center'>
               <p className=''>Service id : {id}</p>
              <Button onClick={()=>navigate('/checkout')} variant='outline-primary'>Procid Checkout</Button> 
          </div>
     );
};

export default ServiceDetail;