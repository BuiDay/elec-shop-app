import React from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { forgotPassword, resetState } from '../../features/auth/authSlice';

const Forgotpassword = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
          }),
        onSubmit: values => {
            dispatch(forgotPassword(values))
            dispatch(resetState())
        },
      });
      const {isLoading, isError, isSuccess, message} = useSelector(state=>state.auth)

    return (
        <>
            <Meta title={"Forgot Password"} />
            <Breadcrumb title={"Forgot Password"} />
            <div className="forgot-password-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Reset Your Password</h3>
                            {
                                !isSuccess ? (
                                <>
                                <p className='forgot-password-description'>We will send you an email to reset your password.</p>
                                <form action="" className='d-flex flex-column gap-20' onSubmit={formik.handleSubmit}>
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
                                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button type='submit' className='button signup border-0'>Submit</button>
                                    <Link to='/login' className='forgot'>Cancel</Link>
                                </div>
                            </form>
                                
                                </>    
                                ) : <p className='forgot-password-description'>Check email to reset your password.</p>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forgotpassword;