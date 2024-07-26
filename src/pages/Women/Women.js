// src/pages/Women/Women.js
import  { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList.js';
// import './Women.css';

const Women = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/women.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="women">
      
      {error ? (
        <p>Error fetching products: {error.message}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Women;
