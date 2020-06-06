import axios from 'axios';
import { getToken } from '../services/token';

const server = axios.create({
   baseURL: 'http://localhost:3001',
});

// add auth token to request headers
server.interceptors.request.use((config) => {
   config.headers.authorization = getToken();
   return config;
});

export default server;
