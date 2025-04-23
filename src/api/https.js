import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1'

const https = axios.create({
    baseURL: baseURL,
    headers: {
     "Content-Type": 'application/json'
    }
});

export default https;