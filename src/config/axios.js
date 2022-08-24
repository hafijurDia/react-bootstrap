import axios from "axios";

const axiosPublicIntance = axios.create({
    baseURL: 'http://localhost:1337/api/'
})

export default axiosPublicIntance