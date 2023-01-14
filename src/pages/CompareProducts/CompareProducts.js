import React from 'react';
import './CompareProducts.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";

const CompareProducts = () => {
    return (
       <>
            <Meta title={"Compare Products"} />
            <Breadcrumb title={"Compare Products"} />
            <div className="compare-products-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-products-card position-relative">
                            <img src={require('../../assets/images/cross.svg')} alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
       </>
    );
};

export default CompareProducts;