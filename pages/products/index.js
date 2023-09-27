import React, { useContext, useEffect, useState } from 'react';
import { fetchProducts } from '@/app/utils/api'
import { CartContext } from '@/app/contexts/CartContext';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
