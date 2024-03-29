const USER_KEY = 'User';

// retrieve user id from localStorage
function getUser() {
   return localStorage.getItem(USER_KEY);
}

// store use info
function storeUserInfo(id) {
   localStorage.setItem(USER_KEY, id);
}

// clear localStorage
function removeUserInfo() {
   localStorage.clear();
}

export { storeUserInfo, getUser, removeUserInfo };
