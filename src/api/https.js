import axios from "axios";


const baseURL = window.location.hostname === 'localhost'
  ? 'http://localhost:8000/api/v1'
  : 'https://apiminhaiafit.sistemasgu.com/api/v1';



const https = axios.create({
    baseURL: baseURL,
    headers: {
     "Content-Type": 'application/json'
    }
});

export default https;