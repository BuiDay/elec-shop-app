import axios from "axios";
import {base_url} from "../../utils/base_url"
import { config } from "../../utils/axiosconfig";

const createEnq = async (data) =>{
    const response = await axios.post(`${base_url}enquiry`,data,config);
    return response.data;
}

const EnqService = {
    createEnq
}

export default EnqService