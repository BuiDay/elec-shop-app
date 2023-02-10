import axios from "axios";
import {base_url} from "../../utils/base_url"

const getAllProduct = async () =>{
    const response = await axios.get(`${base_url}product`);
    return response.data;
}

const getAProduct = async (id) =>{
    const response = await axios.get(`${base_url}product/id=${id}`);
    return response.data;
}

const productService = {
    getAllProduct,getAProduct
}

export default productService