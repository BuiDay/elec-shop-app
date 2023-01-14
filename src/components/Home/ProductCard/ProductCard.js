import React from 'react';
import './ProductCard.css'
import StarRatings from 'react-star-ratings';
import { Link, useLocation } from 'react-router-dom';
import Prodcompare from '../../../assets/images/prodcompare.svg'
import AddCart from '../../../assets/images/add-cart.svg'
import View from '../../../assets/images/view.svg'
import Wish from '../../../assets/images/wish.svg'

const ProductCard = (props) => {
    const location = useLocation()
    const {grid} = props
    return (
        <div className={`${location.pathname=="/ourstore" ? `gr-${grid}`:"col-3"}`}>
            <Link to='/product/123' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src={Wish} alt="" />
                    </Link>
                </div>
                <div className="product-image mb-3">
                    <img className='img-fluid' src={require('../../../assets/images/watch-ultra-2.png')} alt="" />
                    <img className='img-fluid' src={require('../../../assets/images/watch-ultra.png')} alt="" />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Sony</h6>
                    <h5 className='product-title'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, distinctio.
                    </h5>
                    {
                        grid === 12 ? 
                        (<p className='description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id earum, quae ipsam minima deleniti.
                        </p>) : ""
                    }
                    
                    <StarRatings
                        rating={2.5}
                        edit={false}
                        starDimension="20px"
                        starRatedColor="#ffd700"
                    />
                    <p className="price mt-2">100$</p>
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
                            <img src={AddCart} alt="" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;