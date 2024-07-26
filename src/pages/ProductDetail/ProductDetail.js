import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../context/CartContext.jsx'; // Adjust path as needed
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext); // Add to cart context
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.PUBLIC_URL}/products.json`); // Fetch all products
        const product = response.data.find(p => p.id === parseInt(id)); // Find product by id
        console.log('Fetched product:', product); // Debug: Log fetched product
        setProduct(product);
      } catch (error) {
        setError(error);
        console.error('Error fetching product:', error); // Debug: Log error
      }
    };

    fetchProduct();
  }, [id]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleAddToCart = () => {
    if (product) {
      // Check if size selection is required and ensure a size is selected
      if ([1, 4, 7].includes(product.id) && !selectedSize) {
        alert('Please select a size before adding to the cart.');
      } else {
        addItemToCart({ ...product, size: selectedSize });
      }
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Check if the product requires size selection
  const requiresSizeSelection = [1, 4, 7].includes(product?.id);

  return (
    <div className="product-detail">
      {error ? (
        <p>Error fetching product details: {error.message}</p>
      ) : product ? (
        <>
          <img 
            src={`${process.env.PUBLIC_URL}/${product.image}`} 
            alt={product.name} 
            className="product-detail__image" 
          />
          <div className="product-detail__info">
            <h2 className="product-detail__name">{product.name}</h2>
            <p className="product-detail__price">${product.price}</p>
            <div className="product-detail__rating">{renderStars(product.rating)}</div>
            {requiresSizeSelection && (
              <div className="product-detail__size">
                <label htmlFor="size">Select size:</label>
                <select id="size" value={selectedSize} onChange={handleSizeChange}>
                  <option value="">Select</option>
                  {product.sizes && product.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="product-detail__actions">
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div className="product-detail__description">
              <p>{product.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
