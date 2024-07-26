import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeItemFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={item.image} alt={item.name} />
      <div className="cart-item__details">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__price">${item.price}</p>
        <p className="cart-item__size">Size: {item.size}</p> {/* Display the selected size */}
        <p className="cart-item__quantity">Quantity: {item.quantity}</p>
        <button className="cart-item__remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired, // Ensure size is included in the item prop types
  }).isRequired,
};

export default CartItem;
