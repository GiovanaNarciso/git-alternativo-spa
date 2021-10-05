import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'token ' + process.env.REACT_APP_TOKEN
  }
});

export default api;
