import React from 'react';
import './SpecialProduct.css'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
    return (
        <div className='col-4'>
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img className='img-fluid' src={require('../../../assets/images/watch.jpg')} alt="" />
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
                        <p className="price">
                            <span className="red-p">$100</span> &nbsp;
                            <strike>$200</strike>
                        </p>
                        <div className="discount-till d-flex align-items-center gap-2">
                            <p>
                                <b>5</b> days
                            </p>
                            <div className="d-flex gap-1 align-items-center ">
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                                <span className='badge rounded-circle p-3 bg-warning'>1</span>
                            </div>
                        </div>
                        <div className='prod-count mt-3'>
                            <p>Products: 5</p>
                            <div className="progress">
                                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link className='button'>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;