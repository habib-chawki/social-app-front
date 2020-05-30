const key = 'Token';

function setToken(data) {
   localStorage.setItem(key, data);
}

function getToken() {
   return 'Bearer ' + localStorage.getItem(key);
}

export { setToken, getToken };
