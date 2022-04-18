import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowReview from './ShowReview';

const Review = () => {
     const [reviews , setReviews] = useState([])
     useEffect(()=>{
          fetch("review.json")
          .then(res=> res.json())
          .then(data => setReviews(data))
     },[])
     return (
          <div className='container my-5'>
              <h3 className='text-center fw-bold text-primary my-5'>My Previous <span className='text-warning'>Client Review</span> <br /> <span className='text-info'> __________</span> </h3> 
              <Row xs={1} md={3} className="g-4">
                {
                     reviews.map(review => <ShowReview key={review.id} review={review}></ShowReview> )
                }
              </Row>
          </div>
     );
};

export default Review;