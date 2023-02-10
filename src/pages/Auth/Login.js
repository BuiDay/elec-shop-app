import React, { useEffect } from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';

import { login } from '../../features/auth/authSlice';
import { resetState } from '../../features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password:Yup.string().required('Password is Required'),
          }),
        onSubmit: values => {
            dispatch(login(values))
        },
      });

      const {user, isLoading, isError, isSuccess, message} = useSelector(state=>state.auth)
      useEffect(()=>{
        if(!user==null || isSuccess){
            toast.success("Login successfully")
            navigate("/");
            dispatch(resetState())
            window.location.reload()
        }if(isError){
            toast.error("Something went wrong!")
            dispatch(resetState())
        }
      },[user,isLoading, isError, isSuccess, message])

    return (
        <>
            <Meta title={"Login"} />
            <Breadcrumb title={"Login"} />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Login</h3>
                            <form action="" className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className='form-control' onChange={formik.handleChange} value={formik.values.email}/>
                                </div>
                                <div className="error">
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null
                                }
                                </div>
                                <div className='mt-4'>
                                    <input type="password" name='password' placeholder='Password' className='form-control' onChange={formik.handleChange} value={formik.values.password}/>
                                </div>
                                <div className="error">
                                {
                                    formik.touched.password && formik.errors.password ? (
                                        <div>{formik.errors.password}</div>
                                    ) : null
                                }
                                </div>
                                <div className='mt-4 text-end'>
                                    <Link to='/reset-password'>Forgot Password?</Link>
                                </div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className='button border-0' type='submit'>Login</button>
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