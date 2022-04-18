import React from 'react';
import { Col, Row } from 'react-bootstrap';

const BLog = () => {
     return (
          <div className='container shadow my-5 p-5'>
             <Row xs={1} md={2} className="g-4 ">
                  <Col>
                   <h5>1.Why are you using firebase? What other options do you have to implement authentication?</h5>
                   <p>Ans: i'm  Using Firebase For Multipurposes First of all i'm using firebase for Authorised user and also i can  build  Authentication systeam using firebase Second Of all i'm Hosting Website Using Firebase and firebase is a data base thats why i can used firebase for store data .At this moment i have lot of firebase alternative for  implement authentication<br /> for example :
                   <ul>
                        <li>Paese</li>
                        <li>Back4App</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>Couchbase</li>
                   </ul> <br />
                   Here are just five examples but there are many more Firebase Alternative for implement authentication !!
                   </p>
                  </Col>
                  <Col >
                    <h5>2.What other services does firebase provide other than authentication?</h5>
                    <p>Firebase provide Lot of things First of all you can host website fully free in firebase and second of all firebase has real time database you can use firebase as a database and firebase provide  cloud you can used cloud function And firbase provide lot of extenstion that you can used in your project </p> <br />
                    <h5>3.Difference between authorization and authentication</h5>
                    <p>Ans :First Of All Authentication Means veryfying who some one is , i mean who are you whats your account is real or fake and you i mean user is real or fake and second of all authorization means veryfying whats specific applications, filses  data and etc. </p>
                  </Col>
             </Row>
          </div>
     );
};

export default BLog;