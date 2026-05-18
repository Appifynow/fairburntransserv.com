
import axios from 'axios';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const axiosClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});