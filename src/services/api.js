import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Change to your API base URL
});

export const fetchProducts = () => api.get('/products');
export const fetchProductById = (id) => api.get(`/products/${id}`);
