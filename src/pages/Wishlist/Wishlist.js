import React from 'react';
import './Wishlist.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import Cross from'../../assets/images/cross.svg'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist Products"} />
            <Breadcrumb title={"Wishlist Products"} />
            <div className="wishlist-products-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-products-card position-relative">
                            <img src={Cross} alt="" className='position-absolute cross img-fluid'/>  
                            <div className='wishlist-card-image'>
                                <img className='img-fluid' src={require('../../assets/images/watch.jpg')} alt="" />
                            </div>              
                        </div>
                        <div className="wishlist-product-details py-3 px-3">
                                <h5 className='title'>
                                    Lorem ipsum dolor sit amet.
                                </h5>
                                <h6 className='price mb-4'>$100</h6>
                            </div>           
                    </div>                 
                </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;