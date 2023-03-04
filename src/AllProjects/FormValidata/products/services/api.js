import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com';

const GetProduccts = async() => {
    // console.log('api')
    const response = await (axios.get(`${BASE_URL}/products`));
    return response.data;

}

export { GetProduccts };