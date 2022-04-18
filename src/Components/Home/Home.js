import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Faq from '../Pages/FAQ/Faq';
import Review from '../Pages/Review/Review';
import Services from '../Pages/Services/Services';

const Home = () => {
     return (
          <div>
               <Banner/>
               <Services/>
               <Faq/>
               <Review/>
          </div>
     );
};

export default Home;