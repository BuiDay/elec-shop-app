import React from 'react';
import './Cart.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import {AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <Breadcrumb title={"Cart"} />
            <div className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Product</h4>
                                <h4 className="cart-col-2">Price</h4>
                                <h4 className="cart-col-3">Quantity</h4>
                                <h4 className="cart-col-4">Total</h4>
                            </div>
                            <div className="cart-data py-4 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 d-flex align-items-center gap-30">
                                    <div className='w-25 border border-1'>
                                        <img className='img-fluid' src={require('../../assets/images/watch-41-alum-silver.jpg')} alt="" />
                                    </div>
                                    <div className='w-75'>
                                        <p>Apple watch series 6</p>
                                        <p>Size: 44mm</p>
                                        <p>Color: Gray</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input defaultValue={1} type="number" className='form-control' style={{width:"60px"}} />
                                    </div>
                                    <div className='icon-del'>
                                        <AiFillDelete />
                                    </div>
                                </div>
                                <div className="cart-col-4">$100</div>
                            </div>
                            <div className="cart-data py-4 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 d-flex align-items-center gap-30">
                                    <div className='w-25 border border-1'>
                                        <img className='img-fluid' src={require('../../assets/images/airmac.jpg')} alt="" />
                                    </div>
                                    <div className='w-75'>
                                        <p>Macbook Pro 2</p>
                                        <p>Size: 15inch</p>
                                        <p>Color: Gray</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$1000</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input defaultValue={1} type="number" className='form-control' style={{width:"60px"}} />
                                    </div>
                                    <div className='icon-del'>
                                        <AiFillDelete />
                                    </div>
                                </div>
                                <div className="cart-col-4">$1000</div>
                            </div>
                        </div>
                        <div className="col-12 py-4">
                            <div className=''>
                                <Link to="/ourstore" className='button border-0'>Continue to shopping</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='d-flex justify-content-between align-items-baseline'>
                                <p>Order special instructions</p>
                                <div className='d-flex flex-column gap-15 align-items-end'>
                                    <h4 className='mb-0'>Sub Total: $1100</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to="/checkout" className='button'>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;