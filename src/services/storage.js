const TOKEN_KEY = 'Token';
const USER_KEY = 'User';

// retrieve token from localStorage
function getToken() {
   return 'Bearer ' + localStorage.getItem(TOKEN_KEY);
}

// retrieve user id from localStorage
function getUser() {
   return localStorage.getItem(USER_KEY);
}

// store token in localStorage
function storeToken(token) {
   localStorage.setItem(TOKEN_KEY, token);
}

// store user id in localStorage
function storeUser(id) {
   localStorage.setItem(USER_KEY, id);
}

// remove token from localStorage
function removeToken() {
   localStorage.removeItem(TOKEN_KEY);
}

// remove user id from localStorage
function removeUser() {
   localStorage.removeUser(USER_KEY);
}

export { storeToken, storeUser, getToken, getUser, removeToken, removeUser };
