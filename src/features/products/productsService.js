import axios from "axios";
import {base_url} from "../../utils/base_url"
import { config } from "../../utils/axiosconfig";

const getAllProduct = async (params) =>{
    const response = await axios.get(`${base_url}product?${params}`);
    console.log(params)
    return response.data;
}

const getAProduct = async (id) =>{
    const response = await axios.get(`${base_url}product/id=${id}`);
    return response.data;
}

const ratingAProduct = async (value) =>{
    console.log(value)
    const response = await axios.put(`${base_url}product/rating`,value,config);
    return response.data;
}

const productService = {
    getAllProduct,getAProduct,ratingAProduct
}

export default productService