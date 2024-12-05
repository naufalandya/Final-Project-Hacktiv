import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../molecules/ProductCard";

const Products: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default Products;
