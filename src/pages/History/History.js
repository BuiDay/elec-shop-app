import React from 'react';
import './Cart.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import {AiFillDelete } from 'react-icons/ai'
import { Link, useSearchParams } from 'react-router-dom';
import {AiOutlinePlus} from 'react-icons/ai'
import {GrFormSubtract} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { creCart,desCart,removeCart,addCartApi} from '../../features/cart/cartSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { getOrder } from '../../features/order/orderSlice';

const Hisory = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOrder())
    },[])
    const orderState = useSelector(state=>state.order.order)
    console.log(orderState)

    return (
        <>
            <Meta title={"History"} />
            <Breadcrumb title={"History"} />
            <div className="cart-wrapper home-wrapper-2 py-5">
            {
                orderState.length !== 0 ? (
                    <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-2">No</h4>
                                <h4 className="cart-col-4">Product</h4>
                                <h4 className="cart-col-4">Count</h4>
                                <h4 className="cart-col-2">Amount</h4>
                                <h4 className="cart-col-2">Date</h4>
                                <h4 className="cart-col-3">Status</h4>
                            </div>
                        {
                            orderState.length !== 0 && orderState.map((item,index)=>{
                                return(
                                    <div className="cart-data py-4 d-flex justify-content-between align-items-center">
                                    <div className="cart-col-1 d-flex align-items-center gap-30">
                                        <div className=''>
                                            {index + 1}
                                        </div>
                                        <div className='w-75 ms-5'>
                                            {
                                               item.products.map((item,index)=>{
                                                return(<div className='d-flex justify-content-between'>
                                                    <p>{item.product.title}</p>

                                                    <p>{item.count}</p>
                                                    </div>
                                                )
                                               })
                                            }
                                        </div>
                                    </div>
                                    <div className="cart-col-2">
                                        <h5 className="price">${item.paymentIntent.amout}</h5>
                                    </div>
                                    <div className="cart-col-3 d-flex align-items-center gap-15">
                                        <div className='d-flex align-items-center'>
                                        {new Date(item.updatedAt.toString()).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="cart-col-4">
                                        {item.orderStatus}
                                    </div>
                                </div> 
                                )
                            }) 
                        }
                        </div>
                    </div>
                    </div> 
                ):(<div className='text-center'>
                    <h3>Empty</h3>
                </div>)
            }
                   
            </div>
        </>
    );
};

export default Hisory;