import axios from "axios";
import {base_url} from "../../utils/base_url"


const login = async (userData) =>{
    const response = await axios.post(`${base_url}user/login`,userData);
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data));
    }
    return response.data;
}

const logout = async () =>{
    // const response = await axios.get(`${base_url}user/logout`);
    // if(response.data){
        localStorage.removeItem("user");
    // }
    // return response.data;
}

const registerUser = async (userData) =>{
    const response = await axios.post(`${base_url}user/register`,userData)
    return response.data;
}

const authService = {
    login,logout,registerUser
}

export default authService