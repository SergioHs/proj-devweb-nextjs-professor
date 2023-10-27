// pages/products.js
import React, { useContext, useEffect, useState } from 'react';
import { fetchProducts } from '@/app/utils/api';
import { CartContext } from '@/app/contexts/CartContext';
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
} from '@/app/styles/ProductsPage';
import 'tailwindcss/tailwind.css';

const ProductsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
    <main>
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductContainer>
                <ProductImage src={product.image} alt={product.title} />
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
                <AddToCartButton onClick={() => addToCart(product)}>
                  Add to Cart
                </AddToCartButton>
              </ProductContainer>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProductsPage;
