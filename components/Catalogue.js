import React from 'react';

const Catalogue = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Catalogue Page</h1>
      <p>Browse our product catalogue.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            {product.name} - ${product.price.toFixed(2)}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
