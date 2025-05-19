import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      <ul style={{ marginTop: '20px' }}>
        {cartItems.length === 0 && <li>Your cart is empty.</li>}
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}{' '}
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
