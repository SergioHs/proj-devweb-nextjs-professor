const fetchProducts = async () => {
  const response = await fetch('http://localhost:3000/products');
  const products = await response.json();
  return products;
}

const searchProducts = async (searchTerm) => {
  try {
      if (searchTerm) {
      const response = await fetch(`http://localhost:3000/products/search/${searchTerm}`);
      if (response.ok) {
          const data = await response.json();
          return data;
      }
      }
      return [];
      } catch (error) {
          console.error('Erro ao buscar produtos', error);
          return [];
      }
  };
export { fetchProducts, searchProducts };
  