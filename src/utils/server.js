import axios from 'axios';

// setup base url
const baseURL = 'http://localhost:3001';

const server = axios.create({
   baseURL,
});

export default server;
