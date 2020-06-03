import axios from 'axios';
import { getToken } from '../services/token';

// setup base url and get auth token
const baseURL = 'http://localhost:3001';
const authToken = getToken();

const server = axios.create({
   baseURL,
   headers: { authorization: authToken },
});

export default server;
