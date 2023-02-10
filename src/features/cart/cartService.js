import axios from "axios";
import {base_url} from "../../utils/base_url"
import {config} from "../../utils/axiosconfig"

const addCartApi = async (data) =>{
    const response = await axios.post(`${base_url}user/cart`,data,config);
    return response.data;
}

const getcartApi = async () =>{
    const response = await axios.get(`${base_url}user/cart`,config);
    return response.data;
}

const applyCoupon = async (data) =>{
    const response = await axios.post(`${base_url}user/cart/apply-coupon`,data,config);
    return response.data;
}

const cartService = {
    addCartApi,
    getcartApi,
    applyCoupon
}

export default cartService