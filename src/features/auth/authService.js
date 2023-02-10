import axios from "axios";
import {base_url} from "../../utils/base_url"
import { config } from "../../utils/axiosconfig";


const login = async (userData) =>{
    const response = await axios.post(`${base_url}user/login`,userData);
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data));
    }
    return response.data;
}

const logout = async () =>{
        localStorage.removeItem("user");
}

const registerUser = async (userData) =>{
    const response = await axios.post(`${base_url}user/register`,userData)
    return response.data;
}

const getUser = async (userData) =>{
    const response = await axios.get(`${base_url}user/id=${userData}`,config)
    return response.data;
}

const forgotPassword = async (userData) =>{
    const response = await axios.post(`${base_url}user/forgot-password`,userData)
    return response.data;
}

const resetPassword = async (values) =>{
    const {tokenn} = values

    const response = await axios.post(`${base_url}user/reset-password/${tokenn}`,values)
    return response.data;
}

const authService = {
    login,logout,registerUser,getUser,forgotPassword,resetPassword
}

export default authService