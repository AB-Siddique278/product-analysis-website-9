import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='row my-5'>


                    <dir className='col-md-6 d-flex align-items-center'>
                        <div>
                            <h1 >We are provide best burger</h1>
                            <p>We offer the best healthy burgers to our customers at the lowest cost.These incredible burger recipes offer a unique twist to the classic hamburger, incorporating ingredients like pimento cheese, sesame oil and serrano chiles. The flavors don't stop there, though. Try a few of our favorite Umami burgers, chicken burgers and buffalo burgers. Other recipes include superstar chef Bobby Flay's nacho burgers and juicy cheddar-and-onion burgers.</p>
                            <button type="button" class="btn btn-primary btn-lg">Learn More</button>
                        </div>
                    </dir>


                    <div className='col-md-6 product'>
                        {/* <img src='./images/product.jpg' alt="" /> */}
                        <img src="https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg" alt="" />
                    </div>


                </div>


                <div className=' justify-content-center'>
                    <h3 className='mb-5 text-center'>Customer Revew (3) </h3>


                    <div className='d-flex justify-content-center' >


                        <Link to="/reviews"> <button type="button" class="btn btn-primary btn-lg"> See all Reviews</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;