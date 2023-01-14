import React from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Meta title={"Register"} />
            <Breadcrumb title={"Register"} />
            <div className="forgot-password-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Create Account</h3>
                            <form action="" className='d-flex flex-column gap-20'>
                                <div>
                                    <input type="Frist Name" name='firstName' placeholder='First Name' className='form-control' />
                                </div>
                                <div>
                                    <input type="Last Name" name='lastName' placeholder='Last Name' className='form-control' />
                                </div>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className='form-control' />
                                </div>
                                <div>
                                    <input type="password" name='password' placeholder='Password' className='form-control' />
                                </div>
                                <div>
                                    <input type="password" name='password' placeholder='Comfirm Password' className='form-control' />
                                </div>
                                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button className='button border-0'>Create</button>
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

export default Register;