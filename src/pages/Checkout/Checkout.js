import React from 'react';
import './Checkout.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'

const Checkout = () => {
    return (
        <>
            <Meta title={"Checkout"} />
            <Breadcrumb title={"Checkout"} />
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <div className="checkout-left-data">
                                <nav style={{"--bs-breadcrumb-divider":">"}} aria-label="breadcrumb"></nav>
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'>
                                        Cart
                                    </li>
                                    &nbsp;
                                    <li className='breadcrumb-item active' aria-current="page">
                                        Information
                                    </li>
                                    <li className='breadcrumb-item' aria-current="page">
                                        Shipping
                                    </li>
                                    <li className='breadcrumb-item' aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                                <h4 className='title'>Contact Information</h4>
                                <p className='user-details'>buivanduynhat@gmail.com</p>
                                <form action="" className='d-flex flex-wrap gap-15 justify-content-between mt-4'>
                                    <div className='w-100'>
                                        <select 
                                            name="" 
                                            className='form-control form-select' 
                                            id="">
                                            <option value="">
                                                Select country
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='First Name'/>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='Last Name' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className='form-control' placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className='form-control' placeholder='Apartment' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='City'/>
                                    </div>
                                    <div className='w-25'>
                                        <select 
                                            name="" 
                                            className='form-control form-select' 
                                            id="">
                                                <option value="">
                                                    Select State
                                                </option>
                                            </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='ZipCode' />
                                    </div>
                                    <div className="w-100 mt-3">
                                        <div className="d-flex justify-content-between">
                                            <Link to="/cart" className='text-dark'>
                                                <BiArrowBack className='me-2' />
                                                Return to Cart
                                            </Link>
                                            <Link to="/cart" className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='d-flex justify-content-between align-items-center pb-4'>
                               <div className='w-75 d-flex gap-20'>
                                    <div className='w-25 border position-relative'>
                                        <span style={{top:"-10px", right:"-10px"}} className="badge bg-secondary text-white rounded-circle position-absolute p-2">1</span>
                                        <img className='img-fluid' src={require('../../assets/images/watch-41-alum-silver.jpg')} alt="" />
                                    </div>
                                    <div className='w-75'>
                                        <p className='total'>Lorem ipsum dolor sit consectetur!</p>
                                        <p className='total-price'>Size: dsf</p>
                                    </div>
                               </div>
                                <div className='w-25 text-end'>
                                    <h5 className='total-price'>$ 100</h5>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-items-center pb-4'>
                               <div className='w-75 d-flex gap-20'>
                                    <div className='w-25 border position-relative'>
                                        <span style={{top:"-10px", right:"-10px"}} className="badge bg-secondary text-white rounded-circle position-absolute p-2">1</span>
                                        <img className='img-fluid' src={require('../../assets/images/watch-41-alum-silver.jpg')} alt="" />
                                    </div>
                                    <div className='w-75'>
                                        <p className='total'>Lorem ipsum dolor sit consectetur!</p>
                                        <p className='total-price'>Size: dsf</p>
                                    </div>
                               </div>
                                <div className='w-25 text-end'>
                                    <h5 className='total-price'>$ 100</h5>
                                </div>
                            </div>
                           
                            <div className='d-flex justify-content-between align-items-center py-4 border-top'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$ 1000</p> 
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-4 border-bottom'>
                                <p className='total'>Shipping</p>
                                <p className='total-price'>$ 1000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-cente py-3'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ 1000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;