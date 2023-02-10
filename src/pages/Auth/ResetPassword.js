import React, { useEffect, useState } from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { resetPassword, resetState } from '../../features/auth/authSlice';
import {toast} from 'react-toastify';

const ResetPassword = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const tokenn = location.pathname.split('/')[2];
    const [params, setParams] = useState({})
   
    const formik = useFormik({
        initialValues: {
          password:'',
        },
        validationSchema: Yup.object({
            password:Yup.string().required('Password is Required'),
          }),
        onSubmit: values => {
            console.log(values)
            setParams({
                values,
                tokenn
            })
        },
      });
      const param = () =>{
        dispatch(resetPassword(params))
      }
      const {user, isLoading, isError, isSuccess, message} = useSelector(state=>state.auth)
      useEffect(()=>{
        if(isSuccess){
            toast.success("Reset password successfully")
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
            <Meta title={"Reset Password"} />
            <Breadcrumb title={"Reset Password"} />
            <div className="reset-password-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Comfirm Password</h3>
                            <form action="" className='d-flex flex-column gap-20' onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type="password" name='password' placeholder='Password' className='form-control' onChange={formik.handleChange} value={formik.values.password} />
                                </div>
                                <div className="error">
                                {
                                    formik.touched.password && formik.errors.password ? (
                                        <div>{formik.errors.password}</div>
                                    ) : null
                                }
                                </div>
                                <div>
                                    <input type="password" name='password' placeholder='Comfirm Password' className='form-control' />
                                </div>
                                <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                                    <button className='button border-0' type='submit' onClick={()=>param()}>Submit</button>
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

export default ResetPassword;