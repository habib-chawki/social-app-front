const TOKEN_KEY = 'Token';
const USER_KEY = 'User';

// retrieve token from localStorage
function getToken() {
   return 'Bearer ' + localStorage.getItem(TOKEN_KEY);
}

// retrieve user id from localStorage
function getAuthenticatedUser() {
   return localStorage.getItem(USER_KEY);
}

// store use info
function storeUserInfo(token, id) {
   localStorage.setItem(TOKEN_KEY, token);
   localStorage.setItem(USER_KEY, id);
}

// remove auth token and user id
function removeUserInfo() {
   localStorage.clear();
}

export { storeUserInfo, getToken, getAuthenticatedUser, removeUserInfo };
