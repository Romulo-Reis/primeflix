import axios from 'axios';

const token = `Bearer ${process.env.REACT_APP_TOKEN_API_TMDB}`;
const url = process.env.REACT_APP_API_URL_TMDB;
const api = axios.create({
    baseURL: url,
    headers:{
        'Authorization':token,
        'accept': 'application/json'
    }
});

export default api;