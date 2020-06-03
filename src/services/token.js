const key = 'Token';

function getToken() {
   const token = localStorage.getItem(key);
   return token ? `Bearer ${token}` : null;
}

function setToken(data) {
   localStorage.setItem(key, data);
}

export { setToken, getToken };
