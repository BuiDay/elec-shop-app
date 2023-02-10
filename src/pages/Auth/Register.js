import React, { useEffect }  from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authSlice';
import {toast} from 'react-toastify';
import { resetState } from '../../features/auth/authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          firstName:'',
          lastName:'',
          mobile:'',
          email: '',
          password:'',
        },
        validationSchema: Yup.object({
            firstName:Yup.string().required('firstName is Required'),
            lastName:Yup.string().required('lastName is Required'),
            mobile:Yup.string().required('mobile is Required'),
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password:Yup.string().required('Password is Required'),
            }),
        onSubmit: values => {
            dispatch(registerUser(values))
        },
      });
      const {isLoading, isError, isSuccess, message} = useSelector(state=>state.auth)
      useEffect(()=>{
        if(isSuccess){
            toast.success("Register successfully")
            navigate("/login");
            dispatch(resetState())
        }if(isError){
            toast.error("Something went wrong!")
            dispatch(resetState())
        }
      },[isLoading, isError, isSuccess, message])
    return (
        <>
            <Meta title={"Register"} />
            <Breadcrumb title={"Register"} />
            <div className="forgot-password-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Create Account</h3>
                            <form action="" className='d-flex flex-column' onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type="text"  
                                            name='firstName' 
                                            placeholder='First Name' 
                                            className='form-control' 
                                            onChange={formik.handleChange} 
                                            value={formik.values.firstName}
                                    />
                                </div>
                                <div className="error">
                                {
                                    formik.touched.firstName && formik.errors.firstName ? (
                                        <div>{formik.errors.firstName}</div>
                                    ) : null
                                }
                                </div>
                                <div className='mt-3'>
                                    <input type="text"  
                                            name='lastName' 
                                            placeholder='Last Name' 
                                            className='form-control' 
                                            onChange={formik.handleChange} 
                                            value={formik.values.lastName}
                                    />
                                </div>
                                <div className="error">
                                {
                                    formik.touched.lastName && formik.errors.lastName ? (
                                        <div>{formik.errors.lastName}</div>
                                    ) : null
                                }
                                </div>
                                <div className='mt-3'>
                                    <input type="text" 
                                            name='mobile' 
                                            placeholder='Mobile' 
                                            className='form-control' 
                                            onChange={formik.handleChange} 
                                            value={formik.values.mobile}
                                    />
                                </div>
                                <div className="error">
                                {
                                    formik.touched.mobile && formik.errors.mobile ? (
                                        <div>{formik.errors.mobile}</div>
                                    ) : null
                                }
                                </div>
                                <div className='mt-3'>
                                    <input type="email" 
                                            name='email' 
                                            placeholder='Email' 
                                            className='form-control' 
                                            onChange={formik.handleChange} 
                                            value={formik.values.email}
                                    />
                                </div>
                                <div className="error">
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null
                                }
                                </div>
                                
                                <div className='mt-3'>
                                    <input type="password" 
                                            name='password' 
                                            placeholder='Password' 
                                            className='form-control' 
                                            onChange={formik.handleChange("password")} 
                                            value={formik.values.password}
                                    />
                                </div>
                                <div className="error">
                                {
                                    formik.touched.password && formik.errors.password ? (
                                        <div>{formik.errors.password}</div>
                                    ) : null
                                }
                                </div>
                                <div className='mt-3'>
                                    <input 
                                        type="password" 
                                        name='comfirmPassword' 
                                        placeholder='Comfirm Password' 
                                        className='form-control' 
                                        onChange={formik.handleChange} 
                                        value={formik.values.comfirmPassword}
                                        />
                                </div>
                                <div className="error">
                                {
                                    formik.touched.comfirmPassword && formik.errors.comfirmPassword ? (
                                        <div>{formik.errors.comfirmPassword}</div>
                                    ) : null
                                }
                                </div>
                                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button type='submit' className='button border-0'>Create</button>
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