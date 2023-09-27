import React, { useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
