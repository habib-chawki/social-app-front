const key = 'Token';

// retrieve token from localStorage
function getToken() {
   return 'Bearer ' + localStorage.getItem(key);
}

// save token in localStorage
function setToken(token) {
   localStorage.setItem(key, token);
}

export { setToken, getToken };
