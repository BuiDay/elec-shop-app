import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import Compare from '../../assets/images/compare.svg'
import Wishlist from '../../assets/images/wishlist.svg'
import User from "../../assets/images/user.svg"
import Cart from "../../assets/images/cart.svg"
import Menu from "../../assets/images/menu.svg"
import ShowOnLogin, { ShowOnLogout } from "../../components/hiddenLink/hiddendLink"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { useEffect } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.auth)
    const {cartTotalAmount,totalQuantity} = useSelector(state=>state.cart)
    const navigate = useNavigate();

    const log = () =>{
        window.location.reload();
        navigate("/");
    }

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
                                    <Link to="/" className='text-white'>NHAT BUI</Link>
                                </h1>
                            </div>
                            <div className="col-5">
                                <div className="input-group py-2">
                                    <input  type="text" 
                                            className="form-control" 
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
                                        <Link to='/compare-products' className='d-flex align-items-center gap-10 text-white compare-products'>
                                            <img src={Compare} alt="" />
                                            <p>Compare Products</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white wishlist'>
                                            <img src={Wishlist} alt="" />
                                            <p>Wishlist Products</p>
                                        </Link>
                                    </div>
                                    <ShowOnLogout>
                                        <div>
                                            <Link to='/login' className='d-flex align-items-center gap-10 text-white user'>
                                                <img src={User} alt="" />
                                                <p>Log in my account</p>
                                            </Link>
                                        </div>
                                    </ShowOnLogout>
                                    <ShowOnLogin>
                                        <div className='d-flex align-items-center gap-10 text-white me-3'>
                                            <img src={User} alt="" />
                                            <div className=''>
                                                <div className='' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <p>Hi,</p>
                                                    <p className='displayName'>{(user?.data?.firstName + " "+user?.data?.lastName) }</p>
                                                </div>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <Link class="dropdown-item" to="/profile">View Profile</Link>
                                                    <Link class="dropdown-item" to="/history">History</Link>
                                                    <Link class="dropdown-item" onClick={()=>{dispatch(logout()); log() }}>Sign out</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ShowOnLogin>
                                    <div>
                                        <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                                            <img src={Cart} alt="" />
                                            <div className='d-flex flex-column'>
                                                <span className='badge bg-white text-dark'>{totalQuantity ? totalQuantity : "0"}</span>
                                                <p>{cartTotalAmount ? cartTotalAmount :"0"}$</p>
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
                                <div className='me-5'>
                                    <div className='title-categories' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Menu} className='img fluid me-1' alt="" />
                                        Shop categories
                                    </div>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link class="dropdown-item" to="/profile">Laptop</Link>
                                        <Link class="dropdown-item" to="/profile">Watch</Link>
                                        <Link class="dropdown-item" to="/profile">TV</Link>
                                        <Link class="dropdown-item" to="/profile">Phone</Link>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="ourstore">Our Store</NavLink>
                                        <NavLink to="blogs">Blogs</NavLink>
                                        <NavLink to="contact">Contact</NavLink>
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