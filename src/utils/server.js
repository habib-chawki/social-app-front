import axios from 'axios';

// setup base url
const baseURL = 'http://localhost:3001/';

const server = axios.create({
   baseURL,
});

// setup server with authentication
export const serverWithAuth = axios.create({
   baseURL,
});

// retrieve auth token from localStorage
serverWithAuth.defaults.headers.common['authorization'] = localStorage.getItem(
   'token'
);

export default server;
