import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import Compare from '../../assets/images/compare.svg'
import Wishlist from '../../assets/images/wishlist.svg'
import User from "../../assets/images/user.svg"
import Cart from "../../assets/images/cart.svg"


const Header = () => {
    return (
        <>
            <header className='header-top-stric py-3'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white m-0'>Free Shipping Over 100$ & Free Return</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end m-0 text-white'>Hot line: 0933 804 785</p>
                        </div>
                    </div>
                </div>
            </header>
            <header>
                <div className="header-top-upper py-3">
                    <div className="container-xxl">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <h1>
                                    <Link className='text-white'>NHAT BUI</Link>
                                </h1>
                            </div>
                            <div className="col-5">
                                <div class="input-group py-2">
                                    <input  type="text" 
                                            class="form-control" 
                                            placeholder='Search product here...'
                                    />
                                    <span className='input-group-text py-3'>
                                        <BsSearch className='fs-6'/>
                                    </span>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="header-top-upper d-flex align-items-center justify-between-content">
                                    <div>
                                        <Link className='d-flex align-items-center gap-10 text-white'>
                                            <img src={Compare} alt="" />
                                            <p>Compare Products</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='d-flex align-items-center gap-10 text-white'>
                                            <img src={Wishlist} alt="" />
                                            <p>Wishlist Products</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='d-flex align-items-center gap-10 text-white'>
                                            <img src={User} alt="" />
                                            <p>Log in my account</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='d-flex align-items-center gap-10 text-white'>
                                            <img src={Cart} alt="" />
                                            <div className='d-flex flex-column'>
                                                <span className='badge bg-white text-dark'>0</span>
                                                <p>500$</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center">
                                <div>
                                    
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/">Our Store</NavLink>
                                        <NavLink>Blogs</NavLink>
                                        <NavLink>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;