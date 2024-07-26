// src/pages/Home/Home.js

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList.js';
import './Home.css';

const Home = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="home">
      {error ? (
        <p>Error fetching products: {error.message}</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

// Add PropTypes validation
Home.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Home;
