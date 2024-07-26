// src/pages/Men/Men.js
import  { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList.js';
// import './Men.css';

const Men = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/men.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="men">
      
      {error ? (
        <p>Error fetching products: {error.message}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Men;
