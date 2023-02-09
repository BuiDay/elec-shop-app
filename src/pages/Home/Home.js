import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Marquee from "react-fast-marquee";
import MainBanner from '../../assets/images/main-banner-1.jpg'
import CatBanner_1 from '../../assets/images/catbanner-01.jpg'
import CatBanner_2 from '../../assets/images/catbanner-02.jpg'
import CatBanner_3 from '../../assets/images/catbanner-03.jpg'
import CatBanner_4 from '../../assets/images/catbanner-04.jpg'
import Service from '../../assets/images/service.png'
import Service_2 from '../../assets/images/service-02.png'
import Service_3 from '../../assets/images/service-03.png'
import Service_4 from '../../assets/images/service-04.png'
import Service_5 from '../../assets/images/service-05.png'
import Camera from '../../assets/images/camera.jpg'
import Headphone from '../../assets/images/headphone.jpg'
import Speaker from '../../assets/images/speaker.jpg'
import Laptop from '../../assets/images/laptop.jpg'
import BlogCard from '../../components/Home/BlogCard/BlogCard';
import ProductCard from '../../components/Home/ProductCard/ProductCard';
import SpecialProduct from '../../components/Home/SpecialProduct/SpecialProduct';


const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative py-3">
                                <img src={MainBanner} alt="" 
                                    className='img-fluid rounded-3'/>
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARNGED FOR PROS.</h4>
                                    <h5>IPhone 13 Pro Max</h5>
                                    <p className='mt-4'>Form 1000$ or 2000$</p>
                                    <Link className='button mt-4'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap justify-content-between align-content-between h-100 py-3">
                                <div className="small-banner position-relative ">
                                    <img src={CatBanner_1} alt="" 
                                        className='img-fluid rounded-3'/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative">
                                    <img src={CatBanner_2} alt="" 
                                        className='img-fluid rounded-3'/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy Ipad Air</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative">
                                    <img src={CatBanner_3} alt="" 
                                        className='img-fluid rounded-3'/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative">
                                    <img src={CatBanner_4} alt="" 
                                        className='img-fluid rounded-3'/>
                                    <div className="small-banner-content position-absolute">
                                        <h4>Free ENGRAVING</h4>
                                        <h5>Headphone 6</h5>
                                        <p className=''>Form 1000$ or 2000$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center gap-15 '>
                            <img src={Service} alt="" />
                            <div>
                                <h6>Free Ship</h6>
                                <p>From all order over 200$</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <img src={Service_2} alt="" />
                            <div>
                                <h6>Daily Surprise Offers</h6>
                                <p>Save off to 25$ off</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <img src={Service_3} alt="" />
                            <div>
                                <h6>Support 24/7</h6>
                                <p>Shop with an expert</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <img src={Service_4} alt="" />
                            <div>
                                <h6>Affordable Prices</h6>
                                <p>Get Factory Default Price</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15 '>
                            <img src={Service_5} alt="" />
                            <div>
                                <h6>Secure Payments</h6>
                                <p>100% Protected Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap align-items-center">
                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>12 Items</p>
                                    </div>
                                    <img src={Camera} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Headphone</h6>
                                        <p>20 Items</p>
                                    </div>
                                    <img src={Headphone} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Speaker</h6>
                                        <p>4 Items</p>
                                    </div>
                                    <img src={Speaker} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Laptop</h6>
                                        <p>16 Items</p>
                                    </div>
                                    <img src={Laptop} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Camera</h6>
                                        <p>5 Items</p>
                                    </div>
                                    <img src={Camera} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Headphone</h6>
                                        <p>17 Items</p>
                                    </div>
                                    <img src={Headphone} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Speaker</h6>
                                        <p>4 Items</p>
                                    </div>
                                    <img src={Speaker} alt="" />
                                </div>

                                <div className='d-flex gap-30 justify-content-evenly align-items-center'>
                                    <div>
                                        <h6>Laptop</h6>
                                        <p>14 Items</p>
                                    </div>
                                    <img src={Laptop} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Featured Collection</h3>
                        </div>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </section>

            <section className='famous-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row pt-4">
                        <div className="col-3">
                            <div className="famous-card p-3 bg-dark">
                                <div className="famous-content mb-3">
                                    <h5 className='text-white'>Big Screen</h5>
                                    <h6 className='text-white'>Smart Watch Series 8</h6>
                                    <p className='text-white'>Form $399</p>
                                </div>
                                <img className='img-fluid' src={require('../../assets/images/apple-watch-series-8.png')} alt="" />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="famous-card p-3">
                                <div className="famous-content mb-3">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch Series 8</h6>
                                    <p>Form $399</p>
                                </div>
                                <img className='img-fluid' src={require('../../assets/images/watch-41-alum-silver.jpg')} alt="" />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="famous-card p-3">
                                <div className="famous-content mb-3">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch Series 8</h6>
                                    <p>Form $399</p>
                                </div>
                                <img className='img-fluid' src={require('../../assets/images/watch-41-alum-silver.jpg')} alt="" />
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="famous-card p-3">
                                <div className="famous-content mb-3">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch Series 8</h6>
                                    <p>Form $399</p>
                                </div>
                                <img className='img-fluid' src={require('../../assets/images/watch-41-alum-silver.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='special-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Special Products</h3>
                        </div>
                        
                    </div>
                    <div className="row">
                        <SpecialProduct/>
                        <SpecialProduct/>
                        <SpecialProduct/>
                    </div>
                </div>
            </section>

            <section className='popular-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="card"></div>
                        </div>
                        <div className="col-2">
                            <div className="card"></div>
                        </div>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </section>

            <section className='marquee-wrapper py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee gradient={false} className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-01.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-02.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-03.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-04.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-05.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-06.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-07.png')} alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src={require('../../assets/images/brand-08.png')} alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Latest Blogs</h3>
                        </div>
                       <BlogCard />
                       <BlogCard />
                       <BlogCard />
                       <BlogCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;