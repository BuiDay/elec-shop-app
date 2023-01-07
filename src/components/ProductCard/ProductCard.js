import React from 'react';
import './ProductCard.css'
import StarRatings from 'react-star-ratings';

const ProductCard = () => {
    return (
        <div className='col-3'>
            <div className="product-card">
                <div className="product-image">
                    <img src={require('../../assets/images/watch.jpg')} alt="" />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Sony</h6>
                    <h5 className='product-title'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, distinctio.
                    </h5>
                    <StarRatings
                        rating={2.5}
                        edit={false}
                        starDimension="20px"
                        starRatedColor="#ffd700"
                    />
                    <p className="price mt-2">100$</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;