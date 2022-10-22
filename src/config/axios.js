import axios from "axios";

export const axiosPublicIntance = axios.create({
    baseURL: 'http://localhost:1337/api/'
})


export const axiosPrivateIntance = (token) => axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        Authorization: `Bearer ${token}`,
      },
})

