import axios from 'axios';

// const BASE_URL = import.meta.env.VITE_BASE_URL_AUTH;
const BASE_URL = "https://coaching-draft-backend.onrender.com/api/"
axios.defaults.baseURL = BASE_URL

const token = {
    setToken(token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    unsetToken() {
        axios.defaults.headers.Authorization = '';
    }
}

export {axios, token}