const key = 'Token';

function getToken() {
   return 'Bearer ' + localStorage.getItem(key);
}

function setToken(data) {
   localStorage.setItem(key, data);
}

export { setToken, getToken };
