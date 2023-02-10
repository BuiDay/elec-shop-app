import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./slice/authSilce";

export const loginUser = async(user,dispatch, navigate) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/user/login",user);
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch (error) {
        dispatch(loginFailed())        
    }
}