import React, { useEffect, useState } from 'react';
import './OurStore.css'
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';
import Meta from '../../components/Common/Meta/Meta';
import StarRatings from 'react-star-ratings';
import Gr from '../../assets/images/gr.svg'
import Gr2 from '../../assets/images/gr2.svg'
import Gr3 from '../../assets/images/gr3.svg'
import Gr4 from '../../assets/images/gr4.svg'
import ProductCard from '../../components/Home/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from "../../features/products/productsSlice"
import { Link, useParams } from 'react-router-dom';

const OurStore = () => {
    const dispatch = useDispatch();
    const [param, setParam ] = useState("")
    const productsState = useSelector(state=>state.products.products)
    const [grid, setGrid] = useState(4);
    const getGrid = (i) =>{
        setGrid(i)
    }

    const handleParam = (e) =>{
        setParam(e)
    }
    
    useEffect(()=>{
        dispatch(getAllProducts(param))
    },[param])

    useEffect(()=>{
        const btnGrid = document.querySelectorAll(".filter-sort-grid img");
        btnGrid.forEach(item=>{
                item.addEventListener("click", ()=>{
                    removeActive ();
                    item.classList.add("active")
                });
        })

        function removeActive (){
            btnGrid.forEach(item =>{
                if(item.className.includes('active')){
                    item.classList.remove('active')
                }
            })
        }
    },[grid])
   
    return (
        <>
            <Meta title={"Our Store"}/>
            <Breadcrumb title={"Store"} />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-tilte">Shop By Categories</h3>
                                <div>
                                    <ul>
                                        <li><Link to="/ourstore" onClick={()=>setParam("")}>All</Link></li>
                                        <li><Link to="/ourstore?category=Watch" onClick={()=>setParam("category=Watch")}>Watch</Link></li>
                                        <li><Link to="/ourstore?category=TV" onClick={()=>setParam("category=TV")}>TV</Link></li>
                                        <li><Link to="/ourstore?category=Camera" onClick={()=>setParam("category=Camera")}>Camera</Link></li>
                                        <li><Link to="/ourstore?category=Laptop" onClick={()=>setParam("category=Laptop")}>Laptop</Link></li>
                                        <li><Link to="/ourstore?category=Phone" onClick={()=>setParam("category=Phone")}>Phone</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-tilte">Filter By</h3>
                                <div>
                                    <h5 className='sub-title'>Brand</h5>
                                    <div>
                                    <ul>
                                        <li><Link to="/ourstore?brand=Apple" onClick={()=>setParam("brand=Apple")}>Apple</Link></li>
                                        <li><Link to="/ourstore?brand=Dell" onClick={()=>setParam("brand=Dell")}>Dell</Link></li>
                                        <li><Link to="/ourstore?brand=Samsung" onClick={()=>setParam("brand=Samsung")}>Samsung</Link></li>
                                        <li><Link to="/ourstore?brand=Hp" onClick={()=>setParam("brand=Hp")}>Hp</Link></li>
                                    </ul>
                                </div>
                                    <h5 className='sub-title'>Availablity</h5>
                                    <div>
                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input'/>
                                            <label className='form-check-label'>
                                                In stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input'/>
                                            <label className='form-check-label'>
                                                Out of stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10' >
                                        <div className="form-floating">
                                            <label htmlFor="form-floating-input">From</label>
                                            <input type="email" className="form-control" id="form-floating-input"/>
                                        </div>
                                        <div className="form-floating">
                                            <label htmlFor="form-floating-input1">To</label>
                                            <input type="email" className="form-control" id="form-floating-input1"/>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li style={{background:"yellow"}}></li>
                                            <li style={{background:"blue"}}></li>
                                            <li style={{background:"green"}}></li>
                                            <li style={{background:"gray"}}></li>
                                            <li style={{background:"purple"}}></li>
                                            <li style={{background:"black"}}></li>
                                            <li style={{background:"cyan"}}></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input' id=""/>
                                            <label className='form-check-label'>
                                                S (1)
                                            </label>
                                        </div>

                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input' id=""/>
                                            <label className='form-check-label'>
                                                M (1)
                                            </label>
                                        </div>

                                        <div className="form-check d-flex align-items-center">
                                            <input type="checkbox" className='form-check-input' id=""/>
                                            <label className='form-check-label'>
                                                L (1)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-tilte">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 p-2">
                                            Headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 p-2">
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 p-2">
                                            Wire
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-tilte">Random Product</h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="random-products-left">
                                            <img className='img-fluid' src={require("../../assets/images/watch.jpg")} alt="" />
                                        </div>
                                        <div className="random-products-right d-flex flex-column justify-content-center">
                                            <h5>Lorem ipsum dolor sit amet</h5>
                                            <StarRatings
                                                rating={2.5}
                                                edit={false}
                                                starDimension="14px"
                                                starRatedColor="#ffd700"
                                            />
                                            <b className='mt-1'>$ 300</b>
                                        </div>
                                        
                                    </div>

                                    <div className="random-products mb-2 pb-2 d-flex">
                                        <div className="random-products-left">
                                            <img className='img-fluid' src={require("../../assets/images/watch.jpg")} alt="" />
                                        </div>
                                        <div className="random-products-right d-flex flex-column justify-content-center">
                                            <h5>Lorem ipsum dolor sit amet</h5>
                                            <StarRatings
                                                rating={2.5}
                                                edit={false}
                                                starDimension="16px"
                                                starRatedColor="#ffd700"
                                            />
                                            <b className='mt-1'>$ 300</b>
                                        </div>
                                    </div>
                                </div>       
                            </div>                                              
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0'>Sort by:</p>
                                        <select name="" id="" className='form-control form-select' onChange={(e)=>handleParam(e.target.value)}>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Best selling</option>
                                            <option value="sort=brand">Alphabetically: A-Z</option>
                                            <option value="sort=-brand">Alphabetically: Z-A</option>
                                            <option value="sort=price">Price: Low to High</option>
                                            <option value="sort=-price">Price: High to Low</option>
                                            <option value="created-ascending">Date: Old to New</option>
                                            <option value="created-descending">Date: New to Old</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="total-products">21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img className='img-fluid active' src={Gr4} alt="" onClick={()=>getGrid(4)} />
                                            <img className='img-fluid' src={Gr3} alt="" onClick={()=>getGrid(3)}/>
                                            <img className='img-fluid' src={Gr2} alt="" onClick={()=>getGrid(6)}/>
                                            <img className='img-fluid' src={Gr} alt="" onClick={()=>getGrid(12)}/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="products-list pb-5 d-flex flex-wrap gap-10">
                              {
                                    productsState?.map((item,index)=>{
                                        return(
                                            <ProductCard key={index} data={item} grid={grid}/>
                                        )
                                    })
                              }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;