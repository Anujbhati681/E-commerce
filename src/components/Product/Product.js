import  { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext.jsx';
import './Product.css';

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext); // Use addItemToCart

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product__image" />
      <div className="product__details">
        <h2 className="product__name">{product.name}</h2>
        <p className="product__price">${product.price}</p>
        <button onClick={() => addItemToCart(product)} className="product__add-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
