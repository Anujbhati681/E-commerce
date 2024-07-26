import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';
import './CartIcon.css';

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-icon">
      <span className="cart-icon__count">{cartItems.length}</span>
      <svg
        className="cart-icon__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 3h2l3.6 7.59-1.35 2.44C7.08 13.37 7 13.68 7 14a2 2 0 002 2h12v-2H9.42a1 1 0 01-.94-.68L11 11h9a1 1 0 00.93-.63l3-7A1 1 0 0023 2H6.21l-.94-2H1V2h2zm16 16a2 2 0 100 4 2 2 0 000-4zm-10 0a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    </Link>
  );
};

export default CartIcon;
