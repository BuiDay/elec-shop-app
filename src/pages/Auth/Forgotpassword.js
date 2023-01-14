import React from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <Breadcrumb title={"Forgot Password"} />
            <div className="forgot-password-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Reset Your Password</h3>
                            <p className='forgot-password-description'>We will send you an email to reset your password.</p>
                            <form action="" className='d-flex flex-column gap-20'>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className='form-control' />
                                </div>
                                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <Link to='/comfirm-password' className='button signup border-0'>Submit</Link>
                                    <Link to='/login' className='forgot'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forgotpassword;