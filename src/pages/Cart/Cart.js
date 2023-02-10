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

const Cart = () => {
    const cartState = useSelector(state=>state.cart)
    const cartsState = useSelector(state=>state.cart.carts)

    const dispatch = useDispatch();

    const [params, setParams] = useState([]);
    const cresCart = (id) =>{
        dispatch(creCart(id))
    }

    const descCart = (id) =>{
        dispatch(desCart(id))
    }

    const deleteCart = (id) =>{
        dispatch(removeCart(id))
    }

    
    useEffect(()=>{
        let tempArr = []
        cartsState?.map((item)=>{
            const {_id,quantity,color} = item
            let temp ={
                "id":_id,
                "count":quantity,
                "color":color,
            }
            tempArr.push(temp)
        })
        setParams(tempArr)
    },[cartsState])

    const addCart = () =>{
        dispatch(addCartApi({cart:params}))
    }
    return (
        <>
            <Meta title={"Cart"} />
            <Breadcrumb title={"Cart"} />
            <div className="cart-wrapper home-wrapper-2 py-5">
                {cartsState.length!==0 ? (
                    <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Product</h4>
                                <h4 className="cart-col-2">Price</h4>
                                <h4 className="cart-col-3">Quantity</h4>
                                <h4 className="cart-col-4">Total</h4>
                            </div>
                            {
                                cartsState&&cartsState.map((item,index)=>{
                                    return(
                                        <div className="cart-data py-4 d-flex justify-content-between align-items-center">
                                            <div className="cart-col-1 d-flex align-items-center gap-30">
                                                <div className='w-25 border border-1'>
                                                    <img className='img-fluid' src={item.images[0]&&item.images[0].url} alt="" />
                                                </div>
                                                <div className='w-75'>
                                                    <p>{item.title}</p>
                                                    <p>Color:{item.color}</p>
                                                </div>
                                            </div>
                                            <div className="cart-col-2">
                                                <h5 className="price">$ {item.price}</h5>
                                            </div>
                                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                                <div className='d-flex align-items-center'>
                                                    <AiOutlinePlus style={{cursor:"pointer"}} onClick={()=>cresCart(item)}/>
                                                    <input disabled Value={item?.quantity} type="text" className='form-control text-center' style={{width:"60px"}} />
                                                    <GrFormSubtract style={{cursor:"pointer"}} onClick={()=>descCart(item)}/>
                                                </div>
                                                <div className='icon-del'>
                                                    <AiFillDelete onClick={()=>deleteCart(item)}/>
                                                </div>
                                            </div>
                                            <div className="cart-col-4">${item?.quantity * item.price}</div>
                                        </div> 
                                    )
                                })
                            }
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
                                    <h4 className='mb-0'>Sub Total: {cartState.cartTotalAmount}</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to="/checkout" className='button' onClick={()=>{addCart()}}>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ):
                <div className='text-center'><h3>Empty</h3></div>
                }
                
            </div>
        </>
    );
};

export default Cart;