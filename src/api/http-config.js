import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type': 'application/json'
    },
})
