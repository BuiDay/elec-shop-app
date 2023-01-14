import React from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <Breadcrumb title={"Login"} />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Login</h3>
                            <form action="" className='d-flex flex-column gap-20'>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className='form-control' />
                                </div>
                                <div>
                                    <input type="password" name='password' placeholder='Password' className='form-control' />
                                </div>
                                <div>
                                    <Link to='/reset-password'>Forgot Password?</Link>
                                </div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className='button border-0'>Login</button>
                                    <Link to='/register' className='button signup'>Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;