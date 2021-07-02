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
function storeUserId(id) {
   localStorage.setItem(USER_KEY, id);
}

// store use info
function storeUserInfo(token, id) {
   storeToken(token);
   storeUserId(id);
}

// remove token from localStorage
function removeToken() {
   localStorage.removeItem(TOKEN_KEY);
}

// remove user id from localStorage
function removeUser() {
   localStorage.removeUser(USER_KEY);
}

// remove auth token and user id
function endSession() {
   localStorage.clear();
}

export {
   storeToken,
   storeUserId as storeUser,
   getToken,
   getUser,
   removeToken,
   removeUser,
   endSession,
};
