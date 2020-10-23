import axios from 'axios';
const endpoint = 'http://127.0.0.1:3300/api/';
 
export const getall = () => {
    const url = `${endpoint}getall`;
    return axios.post(url);
}

export const update = (data) => {
    const url = `${endpoint}update`;
    return axios.post(url, data);
}

export const add = (data) => {
    const url = `${endpoint}add`;
    return axios.post(url, data);
}