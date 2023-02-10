import React, { useEffect, useState } from 'react';
import './Checkout.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import {BiArrowBack} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { getCartApi,applyCoupon } from '../../features/cart/cartSlice';
import {cashOrder} from '../../features/order/orderSlice'
import {toast} from 'react-toastify';
import { resetState } from '../../features/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [discount, setDiscout] = useState("")
    const cartsState = useSelector(state=>state.cart.carts)
    const getCartState = useSelector(state=>state.cart.getcart)
    const {isLoading, isError, isSuccess, message} = useSelector(state=>state.order)
    useEffect(()=>{
      if(isSuccess){
          toast.success("Order successfully")
          navigate("/");
          dispatch(resetState())
          localStorage.removeItem("carts");
            localStorage.removeItem("totalQuantity");
            localStorage.removeItem("cartTotalAmount");
            window.location.reload()
      }if(isError){
          toast.error("Something went wrong!")
          dispatch(resetState())
      }
    },[isLoading, isError, isSuccess, message])

    useEffect(()=>{
        dispatch(getCartApi())
    },[])

    const applyCoupons = () =>{
        dispatch(applyCoupon({coupon:discount}))
    }

    const order = () =>{
        dispatch(cashOrder())
    }

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
                                    <div className='flex-grow-1'>
                                        <select 
                                            name="" 
                                            className='form-control form-select' 
                                            id="">
                                                <option value="">
                                                    Select State
                                                </option>
                                            </select>
                                    </div>
                                    <div className='w-75'>
                                        <input type="text" className='form-control' placeholder='ZipCode' onChange={(e)=>setDiscout(e.target.value)}/>
                                    </div>
                                    <div className=''>
                                        <div className='button border-0' onClick={()=>applyCoupons()}>Apply</div>
                                    </div>
                                    <div className="w-100 mt-3">
                                        <div className="d-flex justify-content-between">
                                            <Link to="/cart" className='text-dark'>
                                                <BiArrowBack className='me-2' />
                                                Return to Cart
                                            </Link>
                                            <div className='button' onClick={()=>order()}>Continue to Shipping</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            {
                                cartsState&&cartsState.map((item,key)=>{
                                    return(
                                        <div className='d-flex justify-content-between align-items-center pb-4'>
                                        <div className='w-75 d-flex gap-20'>
                                             <div className='w-25 border position-relative'>
                                                 <span style={{top:"-10px", right:"-10px"}} className="badge bg-secondary text-white rounded-circle position-absolute p-2">{item?.quantity}</span>
                                                 <img className='img-fluid' src={item.images[0]&&item.images[0].url} alt="" />
                                             </div>
                                             <div className='w-75'>
                                                 <p className='total'>{item.title}</p>
                                                 <p className='total-price'>Color:{item.color}</p>
                                             </div>
                                        </div>
                                         <div className='w-25 text-end'>
                                             <h5 className='total-price'>${item?.quantity * item?.price}</h5>
                                         </div>
                                     </div>
                                    )
                                })
                            }
                            <div className='d-flex justify-content-between align-items-center py-4 border-top'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$ {getCartState?.cartTotal}</p> 
                            </div>
                            <div className='d-flex justify-content-between align-items-center pb-4 border-bottom'>
                                <p className='total'>Discount</p>
                                <p className='total-price'>${getCartState?.totalAfterDiscount ? getCartState?.cartTotal- getCartState?.totalAfterDiscount: 0}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-cente py-3'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ {getCartState?.totalAfterDiscount ? getCartState?.totalAfterDiscount : getCartState?.cartTotal}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;