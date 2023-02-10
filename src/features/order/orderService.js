import axios from "axios";
import {base_url} from "../../utils/base_url"
import { config } from "../../utils/axiosconfig";

const cashOrder = async (data) =>{
    const response = await axios.post(`${base_url}user/cart/cash-order`,data,config);
    return response.data;
}

const getOrder = async () =>{
    const response = await axios.get(`${base_url}user/order/get-order`,config);
    return response.data;
}


const orderService = {
    cashOrder,getOrder
}

export default orderService