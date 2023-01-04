import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import MainBanner from '../../assets/images/main-banner-1.jpg'

const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative py-3">
                                <img src={MainBanner} alt="" 
                                    className='img-fluid rounded-3'/>
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARNGED FOR PROS.</h4>
                                    <h5>IPhone 13 Pro Max</h5>
                                    <p className='mt-4'>Form 1000$ or 2000$</p>
                                    <Link className='button mt-4'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;