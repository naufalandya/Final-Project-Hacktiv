import { Product } from "../types/Product";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
