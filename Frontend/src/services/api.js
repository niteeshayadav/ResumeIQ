import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api/resume';

const api = axios.create({
  baseURL: BACKEND_URL
});

export default api;