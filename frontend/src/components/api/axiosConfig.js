import axios from 'axios';

const api = axios.create({
  baseURL: 'https://website-1-vfm0.onrender.com/api', // 👈 use your backend URL
});

export default api;
