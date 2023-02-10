import React,{useEffect} from 'react';
import './Profile.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import {getUser} from "../../features/auth/authSlice"
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
    const getUserFormLocalStorage = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")) : null
    const id = getUserFormLocalStorage?.data?._id;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser(id))
    },[])

    const userState = useSelector(state=>state.auth.getUsers)

    return (
        <>
            <Meta title={"Profile"} />
            <Breadcrumb title={"Profile"} />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Profile</h3>
                            <form action="" className='d-flex flex-wrap gap-15 justify-content-between mt-4'>
                                    <div className='flex-grow-1'>
                                    <label for="">First Name</label>
                                        <input type="text" className='form-control' placeholder='First Name' defaultValue={userState.firstName}/>
                                    </div>
                                    <div className='flex-grow-1'>
                                    <label for="">Last Name</label>
                                        <input type="text" className='form-control' placeholder='Last Name' defaultValue={userState.lastName}/>
                                    </div>
                                    <div className='flex-grow-1'>
                                    <label for="">Email</label>
                                        <input type="text" className='form-control' placeholder='Email' defaultValue={userState.email}/>
                                    </div>
                                    <div className='w-100'>
                                        <label for="">Address</label>
                                        <input type="text" className='form-control' placeholder='Address' defaultValue={userState.address}/>
                                    </div>
                                    <div className='w-100'>
                                    <label for="">Mobile</label>
                                        <input type="text" className='form-control' placeholder='Mobile' defaultValue={userState.mobile}/>
                                    </div>
                                  <div className="w-100 mt-3">
                                        <div className="d-flex justify-content-between">
                                            <div className='button'>Update</div>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;