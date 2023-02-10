import React, { useState,useEffect } from 'react';
import './OurStore.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import ProductCards from '../../components/Home/ProductCards/ProductCards';
import ReactStars from 'react-stars'
import ReactImageZoom from 'react-image-zoom';
import Watch from '../../assets/images/watch-41-alum-silver.jpg'
import Color from '../../components/Common/Color/Color';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbGitCompare  } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getAProduct, ratingAProduct, resetState} from '../../features/products/productsSlice'

const SingleProduct = () => {
    const dispatch = useDispatch();
    const [star, setStar] = useState("");
    const [comment, setComment] = useState("");

    const {id} = useParams();
    useEffect(()=>{
        dispatch(getAProduct(id))
        dispatch(resetState());
    },[])
    const productState = useSelector(state=>state.products?.product)
    

    let {images} = productState
    const props = {width: 600, height: 500, zoomWidth: 500, img:`${images&&images[0]?.url}`};
    const [orderedProduct, setOrderedProduct] = useState(true)

    const handleRating = () =>{
        const params = {
            "star":star,
            "proId":productState._id,
            "comment":comment
        }
        dispatch(ratingAProduct(params));
        dispatch(resetState());
    }
    const product = useSelector(state=>state.products)
    let {isSuccess} = product


    return (
        <>
            <Meta title={"Product"} />
            <Breadcrumb title={"Product"} />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                {
                                    productState?.images?.map((item, index)=>{
                                        return(
                                            <div><img className='img-fluid' src={item?.url} alt="" /></div>
                                        )
                                    })
                                }
                                {
                                    productState?.images?.map((item, index)=>{
                                        return(
                                            <div><img className='img-fluid' src={item?.url} alt="" /></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className='title'>
                                       {productState?.title}
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">{productState?.price}$</p>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            color2={'#ffd700'} />
                                        <p className='mb-0 t-review'>(2 Reviews)</p>
                                    </div>
                                    <a href="#review" className='t-review'>Write a Review</a>
                                </div>
                                <div className="border-bottom">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type:</h3>
                                        <p className='product-info'>{productState?.category}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand:</h3>
                                        <p className='product-info'>{productState?.brand}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags:</h3>
                                        <p className='product-info'>{productState?.category}</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availablity:</h3>
                                        <p className='product-info'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <h3 className='product-heading'>Size:</h3>
                                       <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                       </div>
                                    </div>

                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <h3 className='product-heading'>Colors:</h3>
                                       <Color />
                                    </div>

                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Quantity:</h3>
                                        <div>
                                            <input type="number" 
                                            name=''
                                            defaultValue={1}
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{width:"60px",height:"30px",textAlign:"center"}}
                                            />
                                        </div>
                                       
                                    </div>
                                    <div className="d-flex gap-15 align-items-center pb-3">
                                        <button className='button border-0'>Add to cart</button>
                                        <button className='button border-0 orange-color'>Buy it now</button>
                                    </div>

                                    <div className='d-flex gap-15 align-items-center mb-4'>
                                        <div>
                                            <a href="">
                                                <TbGitCompare className='fs-5 me-2' />
                                                Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <AiOutlineHeart className='fs-5 me-2' />
                                                Add to Wishlist
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
                            </div>
                        </div>
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
                                <div dangerouslySetInnerHTML={{ __html: `${productState?.description}`}} />
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
                                    {
                                        !isSuccess ? (
                                            <div className="review-form py-4" id="review">
                                            <h4>Write a review</h4>
                                            <form action="" className='d-flex flex-column gap-20'>
                                                <div>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        edit={true}
                                                        color2={'#ffd700'}
                                                        onChange={(e)=>setStar(e)}
                                                    />
                                                </div>
                                                <div>
                                                    <textarea name="" id="" cols="30" rows="4" placeholder='Comments' className='w-100 form-control' onChange={(e)=>setComment(e.target.value)}></textarea>
                                                </div>
                                                <div className="mt-3 d-flex justify-content-end gap-15 align-items-center">
                                                    <button className='button border-0' onClick={()=>handleRating()}>Submit Review</button>
                                                </div>
                                            </form>
                                        </div>
                                        ):""
                                    }
                               

                                <div className="reviews">
                                   {
                                    productState?.ratings && productState?.ratings?.map((item,index)=>{
                                        return(
                                            <div className="review py-3">
                                            <div className="d-flex gap-10 align-items-center">
                                             <h6 className='mb-0'>{item.postedby?.firstName}</h6>
                                             <ReactStars
                                                 count={5}
                                                 size={24}
                                                 value={item.star}
                                                 edit={false}
                                                 color2={'#ffd700'} />
                                            </div>
                                            <p className='mt-2'>
                                             {item.comment}
                                            </p>
                                         </div>
                                        
                                        )
                                    })
                                   }
                                            
                                            
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
                        <ProductCards img={require('../../assets/images/watch-2.jpg')}/>
                        <ProductCards img={require('../../assets/images/watch-41-alum-silver.jpg')}/>
                        <ProductCards img={require('../../assets/images/watch-ultra.png')}/>
                        <ProductCards img={require('../../assets/images/watch-ultra-2.png')}/>
                        <ProductCards img={require('../../assets/images/samsung_2.jpg')}/>
                        <ProductCards img={require('../../assets/images/samsung_1.jpg')}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProduct;