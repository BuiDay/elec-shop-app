import React from 'react';
import './index.css'
import Breadcrumb from "../../components/Common/Breadcrumb/Breadcrumb";
import Meta from "../../components/Common/Meta/Meta";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        const newUser = {
            email: username,
            password: password,
        }
        loginUser(newUser,dispatch,navigate)
    }

    return (
        <>
            <Meta title={"Login"} />
            <Breadcrumb title={"Login"} />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-4'>Login</h3>
                            <form action="" className='d-flex flex-column gap-20' onSubmit={handleLogin}>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className='form-control' onChange={(e)=>setUsername(e.target.value)} />
                                </div>
                                <div>
                                    <input type="password" name='password' placeholder='Password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div>
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