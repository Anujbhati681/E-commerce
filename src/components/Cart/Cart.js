import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';
import CartItem from './CartItem.jsx';
import './Cart.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    const totalAmount = calculateTotal();
    if (totalAmount > 0) {
      // Redirect to the checkout page with the total amount
      navigate(`/checkout?amount=${totalAmount}`);
    } else {
      alert('Your cart is empty.');
    }
  };

  return (
    <div className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      <div className="cart__items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart__summary">
          <div className="cart-total">
            Total: ${calculateTotal()}
          </div>
          <button className="cart__checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
