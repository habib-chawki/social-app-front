const key = 'Token';

// retrieve token from localStorage
function getToken() {
   return 'Bearer ' + localStorage.getItem(key);
}

// save token in localStorage
function storeToken(token) {
   localStorage.setItem(key, token);
}

// remove token from localStorage
function removeToken() {
   localStorage.removeItem(key);
}

export { storeToken, getToken, removeToken };
