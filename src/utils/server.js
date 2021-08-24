import axios from 'axios';
import { getToken } from '../services/storage';

const server = axios.create({
   baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});

// add auth token to request headers
server.interceptors.request.use((config) => {
   config.headers.authorization = getToken();
   return config;
});

export default server;
