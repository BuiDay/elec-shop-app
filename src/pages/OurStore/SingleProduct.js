import React, { useState } from 'react';
import './OurStore.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import ProductCard from '../../components/Home/ProductCard/ProductCard';
import ReactStars from 'react-stars'

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true)
    return (
        <>
            <Meta title={"Product"} />
            <Breadcrumb title={"Product"} />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">

                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>

            <section className='description-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <h4 className='mb-4'>Description</h4>
                            <div className="bg-white p-3">                 
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate suscipit harum autem id voluptatum nemo tempora odit inventore? Praesentium, placeat! Debitis ipsa totam animi obcaecati, sunt explicabo repudiandae molestias officiis quibusdam reprehenderit voluptas nisi excepturi atque voluptatem assumenda libero, possimus alias eum facere quae nostrum nesciunt neque. Perferendis tenetur perspiciatis pariatur maxime deserunt recusandae nobis et praesentium tempora error totam ad id atque placeat itaque, qui quia a earum officiis voluptatibus voluptatum sequi quos culpa? Laboriosam ullam dignissimos nesciunt est dicta laborum assumenda repellat nobis incidunt delectus cum accusantium labore, ea impedit aspernatur ex sapiente illo placeat ratione dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='reviews-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <h4 className='mb-4'>Reviews</h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h3>Customer Reviews</h3>
                                        <div className='d-flex gap-10 align-items-center'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            color2={'#ffd700'} />
                                            <p className='mb-0 mt-1'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                        <div className="">
                                            <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                        </div>
                                        )
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a review</h4>
                                    <form action="" className='d-flex flex-column gap-20'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                edit={true}
                                                color2={'#ffd700'} />
                                        </div>
                                        <div>
                                            <textarea name="" id="" cols="30" rows="4" placeholder='Comments' className='w-100 form-control'></textarea>
                                        </div>
                                        <div className="mt-3 d-flex justify-content-end gap-15 align-items-center">
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="reviews">
                                    <div className="review py-3">
                                       <div className="d-flex gap-10 align-items-center">
                                        <h6 className='mb-0'>Admin</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            color2={'#ffd700'} />
                                       </div>
                                       <p className='mt-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est id dolorum? Ipsam ex cupiditate deleniti magnam blanditiis, iste eligendi error, voluptates explicabo illum architecto vitae. Explicabo facilis harum tenetur dolore, esse, commodi placeat, laboriosam unde aliquid laborum sequi assumenda quisquam! Saepe tenetur maiores dolore, odit reprehenderit sed accusamus neque debitis modi voluptatum soluta consectetur, aliquid quibusdam, incidunt iste obcaecati adipisci quo eius maxime! Architecto dicta dolorem placeat libero voluptates consequuntur excepturi dolore possimus eum! Harum veniam aspernatur dolore explicabo!
                                       </p>
                                    </div>

                                    <div className="review py-3">
                                       <div className="d-flex gap-10 align-items-center">
                                        <h6 className='mb-0'>Admin</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            color2={'#ffd700'} />
                                       </div>
                                       <p className='mt-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est id dolorum? Ipsam ex cupiditate deleniti magnam blanditiis, iste eligendi error, voluptates explicabo illum architecto vitae. Explicabo facilis harum tenetur dolore, esse, commodi placeat
                                       </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;