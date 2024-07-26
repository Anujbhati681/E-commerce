// src/pages/Children/Children.js
import { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList.js';
// import './Children.css';

const Children = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/children.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="children">
     
      {error ? (
        <p>Error fetching products: {error.message}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Children;
