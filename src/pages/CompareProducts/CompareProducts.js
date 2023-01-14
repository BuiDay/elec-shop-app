import React from 'react';
import './CompareProducts.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import Cross from'../../assets/images/cross.svg'
import Color from '../../components/Common/Color/Color'

const CompareProducts = () => {
    return (
       <>
            <Meta title={"Compare Products"} />
            <Breadcrumb title={"Compare Products"} />
            <div className="compare-products-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-products-card position-relative">
                            <img src={Cross} alt="" className='position-absolute cross img-fluid'/>  
                            <div className='product-card-image'>
                                <img className='img-fluid' src={require('../../assets/images/watch.jpg')} alt="" />
                            </div>              
                            <div className="compare-product-details">
                                <h5 className='title'>
                                    Lorem ipsum dolor sit amet.
                                </h5>
                                <h6 className='price mb-4'>$100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availablity:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                       <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>           
                        </div>
                       
                    </div>

                    <div className="col-3">
                        <div className="compare-products-card position-relative">
                            <img src={Cross} alt="" className='position-absolute cross img-fluid'/>  
                            <div className='product-card-image'>
                                <img className='img-fluid' src={require('../../assets/images/watch.jpg')} alt="" />
                            </div>              
                            <div className="compare-product-details">
                                <h5 className='title'>
                                    Lorem ipsum dolor sit amet.
                                </h5>
                                <h6 className='price mb-4'>$100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availablity:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                       <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>           
                        </div>
                       
                    </div>

                    <div className="col-3">
                        <div className="compare-products-card position-relative">
                            <img src={Cross} alt="" className='position-absolute cross img-fluid'/>  
                            <div className='product-card-image'>
                                <img className='img-fluid' src={require('../../assets/images/watch.jpg')} alt="" />
                            </div>              
                            <div className="compare-product-details">
                                <h5 className='title'>
                                    Lorem ipsum dolor sit amet.
                                </h5>
                                <h6 className='price mb-4'>$100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availablity:</h5>
                                        <p>Sony</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                       <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>           
                        </div>
                       
                    </div>
                </div>
                </div>
            </div>
       </>
    );
};

export default CompareProducts;