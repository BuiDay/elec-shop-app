import React from 'react';
import './ProductCard.css'
import StarRatings from 'react-star-ratings';
import { Link, useLocation } from 'react-router-dom';
import Prodcompare from '../../../assets/images/prodcompare.svg'
import AddCart from '../../../assets/images/add-cart.svg'
import View from '../../../assets/images/view.svg'
import Wish from '../../../assets/images/wish.svg'
import { addCart } from '../../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = (props) => {
    const location = useLocation()
    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch(addCart(product));
      };

    const {grid,data} = props
    return (
        <div className={`${location.pathname=="/ourstore" ? `gr-${grid}`:"col-3"}`}>
            <Link to={`/product/${data?._id}`} className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src={Wish} alt="" />
                    </Link>
                </div>
                <div className="product-image mb-3">
                    <img className='img-fluid' src={data?.images[0].url} alt="" />
                    <img className='img-fluid' src={data?.images[1].url} alt="" />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>{data?.brand}</h6>
                    <h5 className='product-title'>
                        {data?.title}
                    </h5>
                    {
                        grid === 12 ? 
                        (<p className='description'>
                        
                                <div dangerouslySetInnerHTML={{ __html: `${data?.description}`}} />
                            
                        </p>) : ""
                    }
                    
                    <StarRatings
                        rating={2.5}
                        edit={false}
                        starDimension="20px"
                        starRatedColor="#ffd700"
                    />
                    <p className="price mt-2">{data?.price}$</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src={Prodcompare} alt="" />
                        </Link>
                        <Link>
                            <img src={View} alt="" />
                        </Link>
                        <Link>
                            <img src={AddCart} alt="" onClick={()=>addToCart(data)}/>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;