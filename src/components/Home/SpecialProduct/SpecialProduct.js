import React from 'react';
import './SpecialProduct.css'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import CountdownTimer from '../../Countdown/CountdownTimer';

const SpecialProduct = (props) => {
    console.log(props.timer)
    return (
        <div className='col-4'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img className='img-fluid' src={require('../../../assets/images/watch.jpg')} alt="" />
                        <div className="other-product d-flex justify-content-between gap-15 ">
                            <div><img className='img-fluid' src={require('../../../assets/images/watch-ultra-2.png')} alt="" /></div>
                            <div><img className='img-fluid' src={require('../../../assets/images/watch-ultra.png')} alt="" /></div>
                        </div>
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Sony</h5>
                        <h6 className='title'>Lorem ipsum dolor sit amet consectetur</h6>
                        <StarRatings
                            rating={2.5}
                            edit={false}
                            starDimension="20px"
                            starRatedColor="#ffd700"
                        />
                        <p className="price mt-2">
                            <span className="text-danger">$100</span> &nbsp;
                            <strike>$200</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-2">
                            <CountdownTimer targetDate={props.timer} />
                        </div>
                        <div className='prod-count mt-3'>
                            <p>Products: 5</p>
                            <div className="progress">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link className='button py-2 px-3 mt-3'>Option</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;